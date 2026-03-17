import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
const heroBg = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';
import './Quality.css';

export default function Quality() {
    useScrollAnimation();

    const qualitySteps = [
        {
            step: 'Step 01',
            icon: '🔍',
            title: 'Incoming Inspection',
            desc: 'Raw produce received from farmer clusters undergoes initial visual inspection, foreign matter removal, and moisture testing at the collection center level.',
            tags: ['Visual Inspection', 'Moisture Check', 'Foreign Matter Removal']
        },
        {
            step: 'Step 02',
            icon: '⚖️',
            title: 'Sorting & Grading',
            desc: 'Mechanical and manual sorting to separate produce by size, color, density, and grade. Each batch is classified into export-grade tiers as per buyer specifications.',
            tags: ['Size Grading', 'Color Sorting', 'Density Separation']
        },
        {
            step: 'Step 03',
            icon: '🧪',
            title: 'Laboratory Testing',
            desc: 'Samples from every batch are sent to accredited labs for testing – moisture content, protein levels, aflatoxin, pesticide residues, and microbiological parameters.',
            tags: ['Aflatoxin Testing', 'Pesticide Residue', 'Microbiology']
        },
        {
            step: 'Step 04',
            icon: '📦',
            title: 'Packaging & Fumigation',
            desc: 'Export-grade packaging with proper sealing, labeling, and batch coding. Fumigation as per destination country phytosanitary requirements.',
            tags: ['Export Packaging', 'Fumigation', 'Batch Coding']
        },
        {
            step: 'Step 05',
            icon: '📋',
            title: 'Documentation & Certification',
            desc: 'Complete documentation trail including Certificate of Origin, phytosanitary certificate, health certificate, and lab test reports per shipment.',
            tags: ['CoO', 'Phytosanitary Cert', 'Lab Reports']
        },
        {
            step: 'Step 06',
            icon: '🚢',
            title: 'Pre-Shipment Inspection',
            desc: 'Final quality verification at the port/warehouse before loading using random sampling. Third-party inspection can be arranged on buyer request.',
            tags: ['Random Sampling', 'Third-Party Inspection', 'Final QC']
        },
    ];

    const certifications = [
        { icon: '🏛️', name: 'FSSAI', desc: 'Food Safety & Standards Authority of India' },
        { icon: '📊', name: 'ISO 22000', desc: 'Food Safety Management System' },
        { icon: '🌿', name: 'Organic', desc: 'NPOP / NOP certified options available' },
        { icon: '🌍', name: 'GLOBALGAP', desc: 'Global Good Agricultural Practices' },
        { icon: '📄', name: 'HACCP', desc: 'Hazard Analysis & Critical Control Points' },
    ];

    const traceSteps = [
        { icon: '🌱', label: 'Farm Origin' },
        { icon: '🚜', label: 'Collection' },
        { icon: '🏭', label: 'Processing' },
        { icon: '🧪', label: 'Lab Testing' },
        { icon: '📦', label: 'Packaging' },
        { icon: '🚢', label: 'Shipment' },
        { icon: '🏪', label: 'Buyer' },
    ];

    return (
        <>
            <SEO
                title="Quality Assurance — 6-Stage Quality Control & Traceability"
                description="Every grain, spice & pulse is quality-controlled through our 6-stage pipeline — from farm inspection to pre-shipment testing. FSSAI, ISO 22000 & HACCP compliant."
                path="/quality"
                keywords="agro quality assurance India, food safety standards, FSSAI certified exporter, ISO 22000 agriculture, farm traceability, export quality control"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="quality-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Quality Assurance</h1>
                    <p className="hero__subtitle">Every grain, every spice, every shipment — quality controlled from farm to port with full traceability.</p>
                </div>
            </section>

            {/* Quality Process */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Process</span>
                        <h2 className="section-heading__title">6-Stage Quality Control Pipeline</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            From the moment produce arrives from farmer clusters to the final pre-shipment inspection,
                            every batch passes through our rigorous 6-stage quality pipeline.
                        </p>
                    </div>
                    <div className="quality-process fade-in">
                        {qualitySteps.map((item, i) => (
                            <div className="quality-card" key={i}>
                                <span className="quality-card__step">{item.step}</span>
                                <div className="quality-card__icon">{item.icon}</div>
                                <h3 className="quality-card__title">{item.title}</h3>
                                <p className="quality-card__desc">{item.desc}</p>
                                <div className="quality-card__tags">
                                    {item.tags.map((tag, j) => (
                                        <span className="quality-card__tag" key={j}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Certifications</span>
                        <h2 className="section-heading__title">Standards & Compliance</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            We work with accredited certification bodies to ensure our products meet the highest
                            international food safety and quality standards.
                        </p>
                    </div>
                    <div className="quality-certs fade-in">
                        {certifications.map((cert, i) => (
                            <div className="quality-cert" key={i}>
                                <span className="quality-cert__icon">{cert.icon}</span>
                                <span className="quality-cert__name">{cert.name}</span>
                                <span className="quality-cert__desc">{cert.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Traceability */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Traceability</span>
                        <h2 className="section-heading__title">Full Supply Chain Transparency</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Every shipment from Panjara Agro can be traced back to the farmer cluster and region
                            of origin — ensuring complete transparency for importers.
                        </p>
                    </div>
                    <div className="quality-trace fade-in">
                        {traceSteps.map((step, i) => (
                            <span key={i} style={{ display: 'contents' }}>
                                <div className="trace-step">
                                    <div className="trace-step__icon">{step.icon}</div>
                                    <span className="trace-step__label">{step.label}</span>
                                </div>
                                {i < traceSteps.length - 1 && <span className="trace-arrow">→</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Farm-to-Export Traceability Dashboard */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Supply Chain Transparency</span>
                        <h2 className="section-heading__title">Farm-to-Export Traceability System</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Our traceability system ensures every batch can be traced from the farmer's field
                            to the buyer's warehouse — complete supply chain transparency.
                        </p>
                    </div>

                    <div className="trace-dashboard fade-in">
                        <div className="trace-dash-card">
                            <div className="trace-dash-card__icon">🗺️</div>
                            <h3 className="trace-dash-card__title">Farmer Network Mapping</h3>
                            <p className="trace-dash-card__desc">
                                Every registered farmer is mapped with geo-coordinates, land records, and crop history.
                                Buyers can verify the origin cluster of any shipment.
                            </p>
                            <div className="trace-dash-card__stats">
                                <div><strong>2,500+</strong> Mapped Farmers</div>
                                <div><strong>12</strong> Collection Zones</div>
                            </div>
                        </div>
                        <div className="trace-dash-card">
                            <div className="trace-dash-card__icon">🌿</div>
                            <h3 className="trace-dash-card__title">Crop Source Identification</h3>
                            <p className="trace-dash-card__desc">
                                Each batch is tagged with farmer ID, plot number, variety, and harvest date.
                                Full crop lineage documentation maintained per consignment.
                            </p>
                            <div className="trace-dash-card__stats">
                                <div><strong>100%</strong> Source Tagged</div>
                                <div><strong>Per-Batch</strong> Records</div>
                            </div>
                        </div>
                        <div className="trace-dash-card">
                            <div className="trace-dash-card__icon">🔬</div>
                            <h3 className="trace-dash-card__title">Quality Inspection Stages</h3>
                            <p className="trace-dash-card__desc">
                                Multi-point inspection: at farm gate, collection center, processing unit,
                                and pre-shipment — 4 documented quality checkpoints.
                            </p>
                            <div className="trace-dash-card__stats">
                                <div><strong>4</strong> Inspection Points</div>
                                <div><strong>Lab</strong> Certified</div>
                            </div>
                        </div>
                        <div className="trace-dash-card">
                            <div className="trace-dash-card__icon">🏭</div>
                            <h3 className="trace-dash-card__title">Storage & Handling Practices</h3>
                            <p className="trace-dash-card__desc">
                                FSSAI-compliant warehousing with temperature monitoring, pest management,
                                and FIFO inventory rotation for optimal freshness.
                            </p>
                            <div className="trace-dash-card__stats">
                                <div><strong>25,000 MT</strong> Capacity</div>
                                <div><strong>FSSAI</strong> Compliant</div>
                            </div>
                        </div>
                        <div className="trace-dash-card trace-dash-card--wide">
                            <div className="trace-dash-card__icon">📊</div>
                            <h3 className="trace-dash-card__title">Batch Tracking Capability</h3>
                            <p className="trace-dash-card__desc">
                                Every export shipment carries a unique batch code linking it to farm origin, processing date,
                                lab test results, and packaging details. Buyers receive full batch documentation with every consignment,
                                enabling end-to-end traceability from farm to shelf.
                            </p>
                            <div className="trace-dash-card__stats">
                                <div><strong>Unique</strong> Batch Codes</div>
                                <div><strong>Digital</strong> Records</div>
                                <div><strong>Full</strong> Documentation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ethical Sourcing */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Commitment</span>
                        <h2 className="section-heading__title">Ethical & Sustainable Sourcing</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="quality-values fade-in">
                        {[
                            { icon: '🤝', title: 'Fair Farmer Pricing', text: 'Farmers receive transparent, market-linked pricing without exploitation by middlemen. Every trade benefits the grower directly.' },
                            { icon: '🌿', title: 'Sustainable Practices', text: 'We promote low-chemical farming, water conservation, and soil health programs across our farmer network.' },
                            { icon: '👥', title: 'Worker Welfare', text: 'Fair wages, safe working conditions, and no child labor at any point in our supply chain — from farm to warehouse.' },
                        ].map((val, i) => (
                            <div className="quality-value" key={i}>
                                <div className="quality-value__icon">{val.icon}</div>
                                <h4 className="quality-value__title">{val.title}</h4>
                                <p className="quality-value__text">{val.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--cream">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in">
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '16px', color: 'var(--green-800)' }}>
                            Want Lab Reports & Quality Documentation?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 28px' }}>
                            We provide complete quality documentation including lab test reports, certificates, and
                            product specification sheets with every trade inquiry.
                        </p>
                        <Link to="/contact" className="btn btn--primary">Request Quality Documentation →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
