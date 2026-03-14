import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import heroBg from '../assets/hero-banner.png';
import './Home.css';

export default function Home() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Farmer Producer Company | Indian Agro Exports"
                description="Panjara Agro Farmers Producer Company Limited — Premium Indian agricultural commodity exports. Direct farm sourcing of spices, food grains, pulses & oilseeds for global buyers."
                path="/"
                keywords="agro export India, farmer producer company, indian spices exporter, food grains supplier, pulses exporter, bulk agricultural supply, APEDA registered"
            />
            {/* HERO — sharp, trade-focused */}
            <Hero
                bg={heroBg}
                title="Reliable Agro Exports From India's Farmer Network"
                subtitle="Direct sourcing · Quality assured · Export-ready supply for global buyers"
            >
                <Link to="/contact" className="btn btn--gold">Request Quotation</Link>
                <Link to="/products" className="btn btn--secondary">View Products</Link>
            </Hero>

            {/* TRUST METRICS — immediate credibility */}
            <section className="section home-trust">
                <div className="container">
                    <div className="home-trust__grid fade-in">
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={5000} suffix="+" />
                            </div>
                            <p className="home-trust__label">Farmer Network</p>
                        </div>
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={15} suffix="+" />
                            </div>
                            <p className="home-trust__label">Export Destinations</p>
                        </div>
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={50} suffix="+" />
                            </div>
                            <p className="home-trust__label">Product Varieties</p>
                        </div>
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={10000} suffix=" MT" />
                            </div>
                            <p className="home-trust__label">Monthly Capacity</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE EXPORT — concise product categories */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Export Catalog</span>
                        <h2 className="section-heading__title">What We Export</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="home-categories grid-3 fade-in">
                        {[
                            { icon: '🌾', name: 'Food Grains', items: 'Rice, Wheat, Maize, Millets' },
                            { icon: '🫘', name: 'Pulses', items: 'Tur Dal, Chana, Moong, Urad' },
                            { icon: '🌶️', name: 'Spices', items: 'Turmeric, Chilli, Coriander, Cumin' },
                            { icon: '🥜', name: 'Oilseeds', items: 'Soybean, Groundnut, Mustard' },
                            { icon: '🧅', name: 'Fresh Produce', items: 'Onion, Fruits, Vegetables' },
                            { icon: '📋', name: 'Custom Sourcing', items: 'Tell us what you need' },
                        ].map((cat, i) => (
                            <Link to="/products" className="home-cat-card" key={i}>
                                <span className="home-cat-card__icon">{cat.icon}</span>
                                <h3 className="home-cat-card__name">{cat.name}</h3>
                                <p className="home-cat-card__items">{cat.items}</p>
                                <span className="home-cat-card__arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA — single clear action */}
            <section className="section home-cta">
                <div className="container home-cta__inner fade-in">
                    <h2 className="home-cta__title">
                        Ready to Source Quality Indian Agricultural Commodities?
                    </h2>
                    <p className="home-cta__text">
                        Get competitive pricing, product specifications, and shipping quotes — our trade team responds within 24 hours.
                    </p>
                    <div className="home-cta__actions">
                        <Link to="/contact" className="btn btn--primary">Request Bulk Quote →</Link>
                        <Link to="/products" className="btn btn--outline">Browse Products</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
