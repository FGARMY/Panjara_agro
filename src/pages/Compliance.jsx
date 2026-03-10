import useScrollAnimation from '../hooks/useScrollAnimation';
import { compliance } from '../data/companyData';
import heroBg from '../assets/hero-banner.png';
import './Compliance.css';

const statusColors = {
    Active: '#16a34a',
    Applied: '#d97706',
    'In Process': '#2563eb',
};

export default function Compliance() {
    useScrollAnimation();
    const entries = Object.values(compliance);

    return (
        <>
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="compliance-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Legal Compliance & Export Registration</h1>
                    <p className="hero__subtitle">Fully registered, government-verified, and export-ready — every credential in order.</p>
                </div>
            </section>

            {/* Credentials Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Trust & Compliance</span>
                        <h2 className="section-heading__title">Our Export Credentials</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Panjara Agro maintains all mandatory registrations and certifications required for
                            seamless international agricultural trade.
                        </p>
                    </div>

                    <div className="compliance-grid fade-in">
                        {entries.map((item, i) => (
                            <div className="compliance-card" key={i}>
                                <div className="compliance-card__header">
                                    <span className="compliance-card__icon">{item.icon}</span>
                                    <span
                                        className="compliance-card__status"
                                        style={{ background: statusColors[item.status] || '#6b7280' }}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                                <h3 className="compliance-card__label">{item.label}</h3>
                                <div className="compliance-card__value">{item.value}</div>
                                <p className="compliance-card__desc">{item.description}</p>
                                <div className="compliance-card__issuer">
                                    <span className="compliance-card__issuer-label">Issued by:</span>
                                    <span>{item.issuedBy}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloadable Certificates */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Verification</span>
                        <h2 className="section-heading__title">Downloadable Certificates & Documents</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Request copies of our compliance certificates for your internal due diligence.
                        </p>
                    </div>

                    <div className="cert-grid fade-in">
                        {[
                            { name: 'IEC Certificate', icon: '📄', format: 'PDF' },
                            { name: 'APEDA Registration', icon: '📋', format: 'PDF' },
                            { name: 'GST Certificate', icon: '🧾', format: 'PDF' },
                            { name: 'FSSAI License', icon: '✅', format: 'PDF' },
                            { name: 'FPO Incorporation Certificate', icon: '🏢', format: 'PDF' },
                            { name: 'Company Profile', icon: '📊', format: 'PDF' },
                        ].map((cert, i) => (
                            <div className="cert-card" key={i}>
                                <span className="cert-card__icon">{cert.icon}</span>
                                <div className="cert-card__info">
                                    <h4 className="cert-card__name">{cert.name}</h4>
                                    <span className="cert-card__format">{cert.format}</span>
                                </div>
                                <button className="btn btn--outline cert-card__btn">Request Copy</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="section section--green">
                <div className="container">
                    <div className="compliance-trust fade-in">
                        <h2 className="compliance-trust__title">100% Government Verified & Export Compliant</h2>
                        <p className="compliance-trust__text">
                            Every transaction with Panjara Agro is backed by complete regulatory compliance.
                            We maintain transparent records and invite buyer audits at any time.
                        </p>
                        <div className="compliance-trust__badges">
                            <div className="trust-badge">
                                <span className="trust-badge__icon">🏛️</span>
                                <span className="trust-badge__label">DGFT Registered</span>
                            </div>
                            <div className="trust-badge">
                                <span className="trust-badge__icon">🌾</span>
                                <span className="trust-badge__label">APEDA Certified</span>
                            </div>
                            <div className="trust-badge">
                                <span className="trust-badge__icon">✅</span>
                                <span className="trust-badge__label">FSSAI Licensed</span>
                            </div>
                            <div className="trust-badge">
                                <span className="trust-badge__icon">📋</span>
                                <span className="trust-badge__label">GST Compliant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
