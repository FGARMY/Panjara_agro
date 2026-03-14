import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import products from '../data/products.json';
import productsBg from '../assets/products-hero.png';
import './Products.css';

const categories = ['All', 'Food Grains', 'Pulses', 'Spices', 'Oilseeds & Agro Commodities', 'Fresh Produce'];

export default function Products() {
    useScrollAnimation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    const filtered = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <>
            <SEO
                title="Agricultural Products Catalog | Spices, Grains, Pulses, Oilseeds"
                description="Browse our export-ready catalog of Indian agricultural commodities — spices, food grains, pulses, oilseeds & fresh produce. Bulk supply with quality certification and full traceability."
                path="/products"
                keywords="Indian agricultural products, spices exporter, food grains supplier India, pulses wholesale, oilseeds export, rice exporter, turmeric supplier"
            />
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
                            <div className="product-card" key={product.id} onClick={() => { setSelectedProduct(product); setActiveTab('overview'); }}>
                                <div className="product-card__badge">{product.category}</div>
                                <h3 className="product-card__name">{product.name}</h3>
                                <p className="product-card__desc">{product.description}</p>
                                <div className="product-card__specs">
                                    <div className="product-card__spec">
                                        <span className="product-card__spec-label">HS Code</span>
                                        <span className="product-card__spec-value">{product.hsCode}</span>
                                    </div>
                                    <div className="product-card__spec">
                                        <span className="product-card__spec-label">MOQ</span>
                                        <span className="product-card__spec-value">{product.moq}</span>
                                    </div>
                                    <div className="product-card__spec">
                                        <span className="product-card__spec-label">Origin</span>
                                        <span className="product-card__spec-value">{product.origin}</span>
                                    </div>
                                    <div className="product-card__spec">
                                        <span className="product-card__spec-label">Monthly Supply</span>
                                        <span className="product-card__spec-value">{product.availableQtyPerMonth}</span>
                                    </div>
                                </div>
                                <button className="btn btn--outline product-card__btn">View Full Spec Sheet →</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Spec Modal */}
            {selectedProduct && (
                <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="product-modal product-modal--wide" onClick={e => e.stopPropagation()}>
                        <button className="product-modal__close" onClick={() => setSelectedProduct(null)}>✕</button>
                        <div className="product-modal__badge">{selectedProduct.category}</div>
                        <h2 className="product-modal__name">{selectedProduct.name}</h2>
                        <p className="product-modal__desc">{selectedProduct.description}</p>

                        {/* Tabs */}
                        <div className="spec-tabs">
                            <button className={`spec-tab ${activeTab === 'overview' ? 'spec-tab--active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
                            <button className={`spec-tab ${activeTab === 'specifications' ? 'spec-tab--active' : ''}`} onClick={() => setActiveTab('specifications')}>Specifications</button>
                            <button className={`spec-tab ${activeTab === 'shipping' ? 'spec-tab--active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping & Trade</button>
                        </div>

                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="spec-content">
                                <div className="spec-grid">
                                    <div className="spec-item">
                                        <span className="spec-item__label">Variety / Grade</span>
                                        <span className="spec-item__value">{selectedProduct.variety}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Farm Origin</span>
                                        <span className="spec-item__value">{selectedProduct.origin}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Harvest Season</span>
                                        <span className="spec-item__value">{selectedProduct.harvestSeason}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Export Capacity</span>
                                        <span className="spec-item__value">{selectedProduct.exportCapacity}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Quality Standards</span>
                                        <span className="spec-item__value">{selectedProduct.qualityStandards}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">HS Code</span>
                                        <span className="spec-item__value spec-item__value--code">{selectedProduct.hsCode}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Specifications Tab */}
                        {activeTab === 'specifications' && (
                            <div className="spec-content">
                                <div className="spec-grid">
                                    <div className="spec-item">
                                        <span className="spec-item__label">Size Specification</span>
                                        <span className="spec-item__value">{selectedProduct.sizeSpec}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Moisture Content</span>
                                        <span className="spec-item__value">{selectedProduct.moisture}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Minimum Order Quantity</span>
                                        <span className="spec-item__value">{selectedProduct.moq}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Available Qty / Month</span>
                                        <span className="spec-item__value">{selectedProduct.availableQtyPerMonth}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-item__label">Export Standards</span>
                                        <span className="spec-item__value">{selectedProduct.exportStandards}</span>
                                    </div>
                                    <div className="spec-item spec-item--full">
                                        <span className="spec-item__label">Packaging Options</span>
                                        <div className="spec-item__tags">
                                            {selectedProduct.packagingOptions.map((opt, i) => (
                                                <span className="spec-tag" key={i}>{opt}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Shipping Tab */}
                        {activeTab === 'shipping' && (
                            <div className="spec-content">
                                <div className="spec-grid">
                                    <div className="spec-item">
                                        <span className="spec-item__label">Loading Capacity</span>
                                        <span className="spec-item__value">{selectedProduct.loadingCapacity}</span>
                                    </div>
                                    <div className="spec-item spec-item--full">
                                        <span className="spec-item__label">Shipping Terms Supported</span>
                                        <div className="spec-item__tags">
                                            {selectedProduct.shippingTerms.map((term, i) => (
                                                <span className="spec-tag spec-tag--gold" key={i}>{term}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="spec-item spec-item--full">
                                        <span className="spec-item__label">Packaging Options</span>
                                        <div className="spec-item__tags">
                                            {selectedProduct.packagingOptions.map((opt, i) => (
                                                <span className="spec-tag" key={i}>{opt}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <Link to="/contact" className="btn btn--primary" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                            Send Inquiry for {selectedProduct.name} →
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
