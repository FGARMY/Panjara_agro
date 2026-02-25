import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import products from '../data/products.json';
import productsBg from '../assets/products-hero.png';
import './Products.css';

const categories = ['All', 'Food Grains', 'Pulses', 'Spices', 'Oilseeds & Agro Commodities', 'Fresh Produce'];

export default function Products() {
    useScrollAnimation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filtered = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <>
            <section className="hero hero--inner" style={{ backgroundImage: `url(${productsBg})` }} id="products-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Our Products</h1>
                    <p className="hero__subtitle">Export-ready agricultural commodities sourced directly from Indian farmer clusters.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Trade Catalog</span>
                        <h2 className="section-heading__title">Agricultural Commodity Portfolio</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Browse our export catalog. Each product is available in bulk with full traceability,
                            quality certification, and customizable packaging. No pricing listed — inquire for
                            competitive trade quotes.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="products-tabs fade-in">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`products-tab ${activeCategory === cat ? 'products-tab--active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="products-grid fade-in">
                        {filtered.map(product => (
                            <div className="product-card" key={product.id} onClick={() => setSelectedProduct(product)}>
                                <div className="product-card__badge">{product.category}</div>
                                <h3 className="product-card__name">{product.name}</h3>
                                <p className="product-card__desc">{product.description}</p>
                                <div className="product-card__specs">
                                    <div className="product-card__spec">
                                        <span className="product-card__spec-label">Origin</span>
                                        <span className="product-card__spec-value">{product.origin}</span>
                                    </div>
                                    <div className="product-card__spec">
                                        <span className="product-card__spec-label">Export Capacity</span>
                                        <span className="product-card__spec-value">{product.exportCapacity}</span>
                                    </div>
                                </div>
                                <button className="btn btn--outline product-card__btn">View Details & Inquire →</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Modal */}
            {selectedProduct && (
                <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="product-modal" onClick={e => e.stopPropagation()}>
                        <button className="product-modal__close" onClick={() => setSelectedProduct(null)}>✕</button>
                        <div className="product-modal__badge">{selectedProduct.category}</div>
                        <h2 className="product-modal__name">{selectedProduct.name}</h2>
                        <p className="product-modal__desc">{selectedProduct.description}</p>
                        <div className="product-modal__specs">
                            <div><strong>Farm Origin:</strong> {selectedProduct.origin}</div>
                            <div><strong>Quality Standards:</strong> {selectedProduct.qualityStandards}</div>
                            <div><strong>Packaging Options:</strong> {selectedProduct.packaging}</div>
                            <div><strong>Export Capacity:</strong> {selectedProduct.exportCapacity}</div>
                        </div>
                        <Link to="/contact" className="btn btn--primary" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                            Send Inquiry for {selectedProduct.name} →
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
