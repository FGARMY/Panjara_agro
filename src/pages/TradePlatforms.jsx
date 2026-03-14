import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { tradePlatforms } from '../data/companyData';
import heroBg from '../assets/hero-banner.png';
import './TradePlatforms.css';

const statusColors = {
    Active: '#16a34a',
    'Coming Soon': '#d97706',
    Planned: '#6b7280',
};

export default function TradePlatforms() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Trade Platforms — Find Us on Global B2B Marketplaces"
                description="Connect with Panjara Agro on IndiaMart, TradeIndia, Alibaba & other global B2B trade platforms. Verified seller profiles with full product catalogs."
                path="/trade-platforms"
                keywords="B2B trade platform India, IndiaMart seller, agricultural exporter Alibaba, TradeIndia agro, global marketplace agricultural"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="trade-platforms-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Connect With Us on Global Trade Platforms</h1>
                    <p className="hero__subtitle">Find us on the world's leading B2B marketplaces and trade directories.</p>
                </div>
            </section>

            {/* Platforms Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Marketplace Presence</span>
                        <h2 className="section-heading__title">Where We're Listed</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            We're expanding our presence across global trade platforms to make it easier
                            for international buyers to discover and connect with us.
                        </p>
                    </div>

                    <div className="tp-grid fade-in">
                        {tradePlatforms.map((platform, i) => (
                            <div className="tp-card" key={i}>
                                <div className="tp-card__header">
                                    <span className="tp-card__icon">{platform.icon}</span>
                                    <span
                                        className="tp-card__status"
                                        style={{ background: statusColors[platform.status] || '#6b7280' }}
                                    >
                                        {platform.status}
                                    </span>
                                </div>
                                <h3 className="tp-card__name">{platform.name}</h3>
                                <p className="tp-card__desc">{platform.description}</p>
                                {platform.url !== '#' ? (
                                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline tp-card__btn">
                                        Visit Profile →
                                    </a>
                                ) : (
                                    <span className="tp-card__coming">Profile setup in progress</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Trade Platforms */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Buyer Engagement</span>
                        <h2 className="section-heading__title">Why We're on Multiple Platforms</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="tp-reasons fade-in">
                        {[
                            { icon: '🌍', title: 'Global Reach', desc: 'Accessible to buyers from 190+ countries through verified trade directories.' },
                            { icon: '🛡️', title: 'Verified Seller', desc: 'Our profiles are verified and backed by trade compliance documentation.' },
                            { icon: '📊', title: 'Product Catalog', desc: 'Full product portfolios with specifications, MOQs, and packaging details.' },
                            { icon: '💬', title: 'Direct Communication', desc: 'Instant messaging and inquiry systems for quick buyer engagement.' },
                        ].map((item, i) => (
                            <div className="card" key={i}>
                                <div className="card__icon">{item.icon}</div>
                                <h3 className="card__title">{item.title}</h3>
                                <p className="card__text">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--green">
                <div className="container">
                    <div className="compliance-trust fade-in">
                        <h2 className="compliance-trust__title">Prefer Direct Contact?</h2>
                        <p className="compliance-trust__text">
                            Skip the marketplaces and talk directly with our trade team.
                            We respond to all inquiries within 24 hours.
                        </p>
                        <Link to="/contact" className="btn btn--gold">
                            Send Direct Inquiry →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
