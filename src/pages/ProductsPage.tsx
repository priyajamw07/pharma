import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from '../data/products';

interface ProductsPageProps {
  currentCategory?: string;
  onNavigate: (path: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  currentCategory,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(currentCategory || 'all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categoryId === selectedCategory);

  return (
    <main>
      <Breadcrumb
        title="All Products"
        onNavigate={onNavigate}
      />

      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-capsules"></i> Sourced & Delivered Directly
            </span>
            <h1 className="section-main-heading">All Healthcare Products</h1>
            <p className="section-sub-lead">
              Explore our complete portfolio of four proven formulations. We ensure safe, temperature-controlled doorstep delivery across Delhi NCR.
            </p>
          </div>

          {/* Filter Pills for the 4 Categories */}
          <div className="product-filter-bar">
            <button
              className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Formulations ({PRODUCTS.length})
            </button>
            {Object.values(CATEGORIES).map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 4 Products Grid */}
          <div className="products-four-grid">
            {filteredProducts.map((product) => (
              <div key={product.slug} className="product-card-modern">
                <div className="product-card-media">
                  <span className="product-category-badge">{product.categoryName}</span>
                  <a
                    href={`/products/${product.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                    className="product-card-img-link"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-img-uncropped"
                    />
                  </a>
                  {product.packaging && (
                    <div className="product-packaging-tag">
                      <i className="fa-solid fa-box"></i> {product.packaging}
                    </div>
                  )}
                </div>

                <div className="product-card-content">
                  <h3 className="product-card-title">
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                    >
                      {product.name}
                    </a>
                  </h3>
                  <p className="product-card-desc">{product.shortDesc}</p>

                  <div className="product-card-actions">
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                      className="btn-card-details"
                    >
                      <span>View Details</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <a
                      href="/contact-us"
                      onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                      className="btn-card-order"
                      title="Enquire or order this formulation"
                    >
                      <i className="fa-solid fa-envelope"></i>
                      <span>Enquire Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Delivery Notice Banner */}
          <div className="products-delivery-notice">
            <div className="delivery-notice-icon">
              <i className="fa-solid fa-truck-medical"></i>
            </div>
            <div className="delivery-notice-text">
              <h4>Direct Supply & Delivery Information</h4>
              <p>
                We distribute genuine pharmaceutical products to registered chemists, nursing homes, and retail customers with valid prescriptions. To check immediate stock availability or order bulk quantities, please call our Delhi office at <strong>{COMPANY_INFO.phone}</strong> or <strong>{COMPANY_INFO.phoneAlt}</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
