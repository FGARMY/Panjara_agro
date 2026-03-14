import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import heroBg from '../assets/hero-banner.png';
import './ExportDocs.css';

const documents = [
    { name: 'Commercial Invoice', icon: '🧾', desc: 'Detailed invoice with product description, quantity, unit price, total value, and trade terms for customs clearance.' },
    { name: 'Packing List', icon: '📦', desc: 'Comprehensive packaging details — carton counts, net/gross weight, dimensions, and container-wise breakdown.' },
    { name: 'Bill of Lading (B/L)', icon: '🚢', desc: 'Shipping document issued by the carrier, serving as receipt of goods and contract of carriage.' },
    { name: 'Certificate of Origin (CoO)', icon: '🏛️', desc: 'Government-issued certificate confirming the country of origin, required for preferential duty treatment.' },
    { name: 'Phytosanitary Certificate', icon: '🌿', desc: 'Plant health certificate issued by NPPO confirming products are free from pests and diseases.' },
    { name: 'Fumigation Certificate', icon: '💨', desc: 'Proof that goods have been treated with approved fumigants per importing country requirements.' },
    { name: 'Inspection Reports', icon: '🔍', desc: 'Third-party quality inspection and lab testing reports — SGS, Bureau Veritas, or buyer-nominated agencies.' },
    { name: 'Letter of Credit (L/C) Documents', icon: '🏦', desc: 'Full banking documentation compliant with LC requirements for secure international payments.' },
];

const workflowSteps = [
    { step: 1, title: 'Farm', icon: '🌾', desc: 'Sourcing from verified farmer clusters' },
    { step: 2, title: 'Processing', icon: '⚙️', desc: 'Cleaning, grading, quality testing' },
    { step: 3, title: 'Packing', icon: '📦', desc: 'Export-standard packaging & labeling' },
    { step: 4, title: 'Documentation', icon: '📋', desc: 'Complete trade documentation' },
    { step: 5, title: 'Shipment', icon: '🚢', desc: 'Container loading & dispatch' },
];

export default function ExportDocs() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Export Documentation & Logistics Support"
                description="Complete export documentation capability — commercial invoices, bill of lading, certificates of origin, phytosanitary certificates, LC documents & customs clearance."
                path="/export-docs"
                keywords="export documentation India, bill of lading, certificate of origin, phytosanitary certificate, export customs clearance, trade documentation"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="export-docs-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Export Documentation & Logistics Support</h1>
                    <p className="hero__subtitle">End-to-end documentation capability for seamless international trade operations.</p>
                </div>
            </section>

            {/* Workflow Timeline */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Process</span>
                        <h2 className="section-heading__title">Farm-to-Shipment Workflow</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            A transparent, documented process from farm sourcing to vessel loading —
                            every step tracked and auditable.
                        </p>
                    </div>

                    <div className="workflow-timeline fade-in">
                        {workflowSteps.map((s, i) => (
                            <div className="workflow-step" key={i}>
                                <div className="workflow-step__icon">{s.icon}</div>
                                <div className="workflow-step__number">Step {s.step}</div>
                                <h3 className="workflow-step__title">{s.title}</h3>
                                <p className="workflow-step__desc">{s.desc}</p>
                                {i < workflowSteps.length - 1 && <div className="workflow-step__connector" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Document Capability */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Documentation</span>
                        <h2 className="section-heading__title">Supported Export Documents</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            We prepare and manage all trade documents required by importing countries,
                            customs authorities, and banking channels.
                        </p>
                    </div>

                    <div className="docs-grid fade-in">
                        {documents.map((doc, i) => (
                            <div className="doc-card" key={i}>
                                <div className="doc-card__icon">{doc.icon}</div>
                                <div className="doc-card__content">
                                    <h3 className="doc-card__name">{doc.name}</h3>
                                    <p className="doc-card__desc">{doc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Readiness */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Readiness</span>
                        <h2 className="section-heading__title">Operational Readiness Overview</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="readiness-grid fade-in">
                        {[
                            { label: 'Pre-Shipment Inspection', value: 'In-house + 3rd Party', icon: '🔬' },
                            { label: 'Document Turnaround', value: '24–48 Hours', icon: '⏱️' },
                            { label: 'Shipping Line Access', value: 'Maersk, MSC, Hapag-Lloyd', icon: '🚢' },
                            { label: 'Payment Terms Supported', value: 'L/C, T/T, D/P, D/A', icon: '💳' },
                            { label: 'Port of Loading', value: 'JNPT, Mundra, Vizag', icon: '⚓' },
                            { label: 'Customs Broker', value: 'Licensed CHA Partner', icon: '📑' },
                        ].map((item, i) => (
                            <div className="readiness-card" key={i}>
                                <span className="readiness-card__icon">{item.icon}</span>
                                <h4 className="readiness-card__label">{item.label}</h4>
                                <span className="readiness-card__value">{item.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="readiness-cta fade-in">
                        <Link to="/contact" className="btn btn--gold">
                            Discuss Your Shipment Requirements →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
