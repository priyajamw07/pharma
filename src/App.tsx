import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { COMPANY_INFO, PRODUCTS } from './data/products';

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
    if (path === '/' || path === '') {
      document.title = `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`;
    } else if (path === '/about-us') {
      document.title = `About Us | ${COMPANY_INFO.name}`;
    } else if (path === '/products') {
      document.title = `All 4 Products | ${COMPANY_INFO.name}`;
    } else if (path.startsWith('/products/')) {
      const slug = path.replace('/products/', '');
      const prod = PRODUCTS.find(p => p.slug === slug);
      document.title = prod ? `${prod.name} | ${COMPANY_INFO.name}` : `Product Details | ${COMPANY_INFO.name}`;
    } else if (path === '/career') {
      document.title = `Career Opportunities | ${COMPANY_INFO.name}`;
    } else if (path === '/contact-us') {
      document.title = `Contact Us | ${COMPANY_INFO.name}`;
    }
  };

  const renderContent = () => {
    if (currentPath === '/' || currentPath === '' || currentPath.startsWith('/#')) {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentPath === '/about-us') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/products') {
      return <ProductsPage onNavigate={navigate} />;
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
    </div>
  );
};

export default App;
