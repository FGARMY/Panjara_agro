import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import heroBg from '../assets/hero-banner.png';
import './PackagingLogistics.css';

const packagingMethods = [
    { icon: '📦', title: 'PP Woven Bags', desc: 'Standard 25 kg & 50 kg polypropylene bags with inner liner for grains, pulses, and oilseeds.', specs: 'HDPE/PP laminated | Food-grade inner | Printed branding available' },
    { icon: '🧶', title: 'Jute Bags', desc: 'Traditional jute sacking for rice and grain exports — eco-friendly and widely accepted.', specs: 'Twill weave | 50 kg / 100 kg | Biodegradable' },
    { icon: '🏗️', title: 'Jumbo Bags (FIBC)', desc: 'Flexible Intermediate Bulk Containers for high-volume bulk shipments.', specs: '1 MT / 1.5 MT capacity | UN rated | Top-fill, bottom-discharge' },
    { icon: '📦', title: 'Corrugated Boxes', desc: 'For fresh produce, fruits, and value-added products requiring rigid packaging.', specs: '5-ply / 7-ply | Custom printed | Ventilated designs' },
    { icon: '🏷️', title: 'Private Label / Custom', desc: 'Custom branding, retail-ready packaging, and buyer-specified labeling.', specs: 'Buyer artwork | Multi-language labels | Bar-coded' },
    { icon: '🫙', title: 'Vacuum Packaging', desc: 'Extended shelf life packaging for spices, nuts, and specialty products.', specs: 'Nitrogen flushed | Multi-layered | Moisture barrier' },
];

const containerSpecs = [
    { type: '20\' FCL (Standard)', capacity: '24–27 MT', suitable: 'Grains, Pulses, Oilseeds, Spices', icon: '📐' },
    { type: '40\' FCL (Standard)', capacity: '48–55 MT', suitable: 'Bulk grains, High-volume shipments', icon: '📐' },
    { type: '40\' HC (High Cube)', capacity: '52–58 MT', suitable: 'Light-weight bulky cargo', icon: '📐' },
    { type: '40\' Reefer', capacity: '22–28 MT', suitable: 'Fresh Produce, Temperature Sensitive', icon: '❄️' },
];

const shippingCapabilities = [
    { icon: '🧱', title: 'Palletization', desc: 'Euro pallets (1200×800mm) and standard pallets (1200×1000mm) — shrink-wrapped and strapped for container stability.', detail: 'Compliant with ISPM-15 wood treatment standards' },
    { icon: '❄️', title: 'Cold Chain', desc: 'Refrigerated container operations for fresh fruits, vegetables, and temperature-sensitive commodities.', detail: '0°C to 15°C range | Pre-cooling facility available' },
    { icon: '🚛', title: 'Freight Coordination', desc: 'Door-to-port and port-to-port freight arrangements with partnered shipping lines and transport operators.', detail: 'Maersk, MSC, Hapag-Lloyd | Weekly sailing schedules' },
    { icon: '⚓', title: 'Port Operations', desc: 'Seamless coordination at JNPT (Nhava Sheva), Mundra Port, and Vizag Port for container loading and customs clearance.', detail: 'Licensed Custom House Agent partnerships' },
    { icon: '📋', title: 'CLP & Stuffing', desc: 'In-house Container Loading Plan preparation and supervised stuffing at CFS/ICD facilities.', detail: 'Photo documentation | Weight verification | Seal tracking' },
    { icon: '🛡️', title: 'Marine Insurance', desc: 'Comprehensive cargo insurance coverage for all shipments, covering transit risk from warehouse to destination.', detail: 'All-risk policy | Institute Cargo Clauses (A)' },
];

export default function PackagingLogistics() {
    useScrollAnimation();

    return (
        <>
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="packaging-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Packaging, Logistics & Shipping Readiness</h1>
                    <p className="hero__subtitle">Export-grade packaging, container operations, and end-to-end freight coordination.</p>
                </div>
            </section>

            {/* Packaging Methods */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Packaging</span>
                        <h2 className="section-heading__title">Export Packaging Methods</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            We offer a full range of packaging solutions tailored to each product category
                            and buyer specification.
                        </p>
                    </div>

                    <div className="pkg-grid fade-in">
                        {packagingMethods.map((pkg, i) => (
                            <div className="pkg-card" key={i}>
                                <div className="pkg-card__icon">{pkg.icon}</div>
                                <h3 className="pkg-card__title">{pkg.title}</h3>
                                <p className="pkg-card__desc">{pkg.desc}</p>
                                <div className="pkg-card__specs">{pkg.specs}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Container Stuffing */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Container Loading</span>
                        <h2 className="section-heading__title">Container Stuffing & Loading Capacity</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="container-grid fade-in">
                        {containerSpecs.map((c, i) => (
                            <div className="container-card" key={i}>
                                <div className="container-card__icon">{c.icon}</div>
                                <h3 className="container-card__type">{c.type}</h3>
                                <div className="container-card__capacity">{c.capacity}</div>
                                <p className="container-card__suitable">{c.suitable}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping Capabilities */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Logistics</span>
                        <h2 className="section-heading__title">Shipping & Logistics Capabilities</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="ship-grid fade-in">
                        {shippingCapabilities.map((cap, i) => (
                            <div className="ship-card" key={i}>
                                <div className="ship-card__icon">{cap.icon}</div>
                                <div className="ship-card__content">
                                    <h3 className="ship-card__title">{cap.title}</h3>
                                    <p className="ship-card__desc">{cap.desc}</p>
                                    <div className="ship-card__detail">{cap.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Readiness Banner */}
            <section className="section section--green">
                <div className="container">
                    <div className="compliance-trust fade-in">
                        <h2 className="compliance-trust__title">Shipment-Ready, Anytime</h2>
                        <p className="compliance-trust__text">
                            Our packaging, logistics, and documentation teams work as one unit to ensure
                            your cargo reaches its destination on time, in perfect condition.
                        </p>
                        <div className="compliance-trust__badges">
                            <div className="trust-badge">
                                <span className="trust-badge__icon">📦</span>
                                <span className="trust-badge__label">Custom Packaging</span>
                            </div>
                            <div className="trust-badge">
                                <span className="trust-badge__icon">🚢</span>
                                <span className="trust-badge__label">3 Major Ports</span>
                            </div>
                            <div className="trust-badge">
                                <span className="trust-badge__icon">❄️</span>
                                <span className="trust-badge__label">Cold Chain Ready</span>
                            </div>
                            <div className="trust-badge">
                                <span className="trust-badge__icon">🛡️</span>
                                <span className="trust-badge__label">Insured Cargo</span>
                            </div>
                        </div>
                        <div style={{ marginTop: 32 }}>
                            <Link to="/contact" className="btn btn--gold">
                                Request Shipping Quote →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
