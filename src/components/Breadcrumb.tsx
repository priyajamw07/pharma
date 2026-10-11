import React from 'react';

interface BreadcrumbProps {
  title: string;
  parentPath?: string;
  parentTitle?: string;
  onNavigate: (path: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  parentPath,
  parentTitle,
  onNavigate
}) => {
  return (
    <section className="page-title-section">
      <div className="container">
        <h1 className="main-page-title">{title}</h1>
        <div className="breadcrumb-links">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
          >
            Home
          </a>
          <i className="fa-solid fa-angle-right" style={{ fontSize: '11px' }}></i>

          {parentPath && parentTitle && (
            <>
              <a
                href={parentPath}
                onClick={(e) => { e.preventDefault(); onNavigate(parentPath); }}
              >
                {parentTitle}
              </a>
              <i className="fa-solid fa-angle-right" style={{ fontSize: '11px' }}></i>
            </>
          )}

          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};
