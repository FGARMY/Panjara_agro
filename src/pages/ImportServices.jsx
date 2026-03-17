import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
const heroBg = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';
import './Services.css';

export default function ImportServices() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Import Services — Agricultural Commodity Sourcing for India"
                description="Import agricultural commodities into India with Panjara Agro. Global sourcing, supplier verification, quality inspection, customs clearance & warehouse redistribution."
                path="/import-services"
                keywords="agricultural import India, commodity sourcing, import trade facilitation, food import India, agro import services"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="import-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Import Services</h1>
                    <p className="hero__subtitle">Sourcing agricultural commodities for Indian buyers with quality assurance and trade facilitation.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Import Solutions</span>
                        <h2 className="section-heading__title">Commodity Sourcing for Indian Markets</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Panjara Agro facilitates the import of agricultural commodities that Indian processors,
                            manufacturers, and wholesalers need — with the same quality standards and reliability
                            we bring to our exports.
                        </p>
                    </div>

                    <div className="services-cards fade-in">
                        <div className="service-card">
                            <div className="service-card__icon">🔍</div>
                            <h3 className="service-card__title">Global Commodity Sourcing</h3>
                            <p className="service-card__desc">
                                We identify and connect with reliable international suppliers to source agricultural
                                commodities required by Indian processors and manufacturers.
                            </p>
                            <ul className="service-card__list">
                                <li>Edible oils and oilseed products</li>
                                <li>Specialty grains and seeds</li>
                                <li>Dried fruits and nuts</li>
                                <li>Cocoa, coffee, and tropical commodities</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-card__icon">🤝</div>
                            <h3 className="service-card__title">Trade Facilitation</h3>
                            <p className="service-card__desc">
                                End-to-end import process management, from supplier negotiation to customs
                                clearance and doorstep delivery in India.
                            </p>
                            <ul className="service-card__list">
                                <li>Supplier verification and due diligence</li>
                                <li>Price negotiation and contract management</li>
                                <li>Import documentation and compliance</li>
                                <li>Customs clearance and duty optimization</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-card__icon">🧪</div>
                            <h3 className="service-card__title">Quality Inspection</h3>
                            <p className="service-card__desc">
                                Pre-shipment and on-arrival quality inspection to ensure every import
                                meets Indian food safety and quality standards.
                            </p>
                            <ul className="service-card__list">
                                <li>Pre-shipment inspection (PSI)</li>
                                <li>Lab testing for FSSAI compliance</li>
                                <li>Moisture, purity, and adulteration testing</li>
                                <li>Certificate verification</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-card__icon">🏭</div>
                            <h3 className="service-card__title">Warehouse & Redistribution</h3>
                            <p className="service-card__desc">
                                Post-import warehousing, repackaging, and redistribution services for
                                imported commodities across Indian markets.
                            </p>
                            <ul className="service-card__list">
                                <li>Bonded warehouse facilities</li>
                                <li>Bulk-to-retail repackaging</li>
                                <li>Pan-India distribution network</li>
                                <li>Inventory management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--cream">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in">
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '16px', color: 'var(--green-800)' }}>
                            Need to Source Agricultural Commodities?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 28px' }}>
                            Tell us what you need and our sourcing team will find the right supplier at the right price.
                        </p>
                        <Link to="/contact" className="btn btn--primary">Submit Import Requirement →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
