import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/products';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');

  // Handle client-side routing & browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title dynamically
    if (path === '/') document.title = `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`;
    else if (path === '/about-us') document.title = `About Us | ${COMPANY_INFO.name}`;
    else if (path === '/products') document.title = `Products & Formulations | ${COMPANY_INFO.name}`;
    else if (path.startsWith('/products-list/')) {
      const cat = path.replace('/products-list/', '').replace(/-/g, ' ').toUpperCase();
      document.title = `${cat} | ${COMPANY_INFO.name}`;
    } else if (path.startsWith('/products/')) {
      document.title = `C-ONE ENZYME Tablet | ${COMPANY_INFO.name}`;
    } else if (path === '/career') document.title = `Career Opportunities | ${COMPANY_INFO.name}`;
    else if (path === '/contact-us') document.title = `Contact Us | ${COMPANY_INFO.name}`;
  };


  const renderContent = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentPath === '/about-us') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/products') {
      return <ProductsPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/products-list/')) {
      const categorySlug = currentPath.replace('/products-list/', '');
      return (
        <ProductsPage
          currentCategory={categorySlug}
          onNavigate={navigate}
         
        />
      );
    }
    if (currentPath.startsWith('/products/')) {
      const productSlug = currentPath.replace('/products/', '');
      return (
        <ProductDetailPage
          slug={productSlug}
          onNavigate={navigate}
         
        />
      );
    }
    if (currentPath === '/career') {
      return <CareerPage onNavigate={navigate} />;
    }
    if (currentPath === '/contact-us') {
      return <ContactPage onNavigate={navigate} />;
    }

    // Default fallback
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="app-root">
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
       
      />

      {renderContent()}

      <Footer onNavigate={navigate} />

      {/* Floating WhatsApp CTA */}
      <a
        href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
        title={`Chat with ${COMPANY_INFO.name}`}
      >
        <i className="fab fa-whatsapp"></i>
      </a>


    </div>
  );
};

export default App;
