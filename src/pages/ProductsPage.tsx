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
              Explore our complete portfolio of proven formulations. We ensure safe, temperature-controlled doorstep delivery across Delhi NCR.
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

          {/* Products Grid */}
          <div className="products-four-grid">
            {filteredProducts.map((product) => (
              <div key={product.slug} className="product-card-elevated product-card-modern">
                {/* 1. Dedicated Header Row - Never Overlaps Image */}
                <div className="product-card-badge-row">
                  <span className="badge-category">{product.categoryName}</span>
                  <span className="badge-status-in-stock">
                    <i className="fa-solid fa-check"></i> In Stock
                  </span>
                </div>

                {/* 2. Spotlight Image Frame - 100% Uncut Image */}
                <div
                  className="product-img-frame"
                  onClick={() => onNavigate(`/products/${product.slug}`)}
                  style={{ cursor: 'pointer' }}
                  title={`View details for ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-uncropped-img"
                  />
                </div>

                {/* 3. Card Body Content */}
                <div className="product-card-body">
                  <h3 className="product-card-title">
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                    >
                      {product.name}
                    </a>
                  </h3>

                  <p className="product-card-short-desc">{product.shortDesc}</p>

                  {product.packaging && (
                    <div className="product-packaging-pill">
                      <i className="fa-solid fa-boxes-packing"></i>
                      <span>{product.packaging}</span>
                    </div>
                  )}

                  <div className="product-card-actions">
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                      className="btn-card-view"
                    >
                      <span>View Details</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="btn-card-call-order"
                      title="Direct phone order"
                    >
                      <i className="fa-solid fa-phone"></i>
                      <span>Order</span>
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
