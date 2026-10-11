import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CATEGORIES, PRODUCTS } from '../data/products';

interface ProductsPageProps {
  currentCategory?: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  currentCategory,
  onNavigate,
  onOpenEnquiry
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>(currentCategory || 'all');

  const activeCategoryObj = currentCategory ? CATEGORIES[currentCategory] : null;
  const pageTitle = activeCategoryObj ? activeCategoryObj.name : 'Products & Formulations';

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedFilter === 'all'
        ? true
        : p.categoryId === selectedFilter;

    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <Breadcrumb
        title={pageTitle}
        parentPath={currentCategory ? '/products' : undefined}
        parentTitle={currentCategory ? 'Products' : undefined}
        onNavigate={onNavigate}
      />

      <section className="section-padding">
        <div className="container">
          {/* Category Filter Pills & Search */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedFilter('all')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '30px',
                  border: '1px solid #0047bb',
                  backgroundColor: selectedFilter === 'all' ? '#0047bb' : '#ffffff',
                  color: selectedFilter === 'all' ? '#ffffff' : '#0047bb',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                All Formulations ({PRODUCTS.length})
              </button>

              {Object.values(CATEGORIES).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '30px',
                    border: '1px solid #0047bb',
                    backgroundColor: selectedFilter === cat.id ? '#0047bb' : '#ffffff',
                    color: selectedFilter === cat.id ? '#ffffff' : '#0047bb',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Quick Search Box */}
            <div style={{ position: 'relative', width: '280px' }}>
              <input
                type="text"
                placeholder="Search formulations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control"
                style={{ paddingRight: '36px' }}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ position: 'absolute', right: '12px', top: '14px', color: '#888' }}
              ></i>
            </div>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <div key={prod.slug} className="product-card">
                <a
                  href={`/products/${prod.slug}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                >
                  <div className="product-img-wrap">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="product-card-img"
                    />
                    <div className="product-plus-badge">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </a>

                <div className="product-info-wrap">
                  <div>
                    <span className="product-category-tag">{prod.categoryName}</span>
                    <h5 className="product-card-name">
                      <a
                        href={`/products/${prod.slug}`}
                        onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                      >
                        {prod.name}
                      </a>
                    </h5>
                    {prod.mrp && (
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#0047bb', marginBottom: '8px' }}>
                        {prod.mrp}
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    <a
                      href={`/products/${prod.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                      className="product-read-more-btn"
                    >
                      Read Details <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                    </a>

                    <button
                      onClick={() => onOpenEnquiry(prod.name)}
                      style={{
                        background: 'transparent',
                        border: '1px solid #0047bb',
                        color: '#0047bb',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
