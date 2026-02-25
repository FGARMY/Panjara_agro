import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AnimatedCounter from '../components/AnimatedCounter';
import useScrollAnimation from '../hooks/useScrollAnimation';
import heroBg from '../assets/hero-banner.png';
import './Home.css';

export default function Home() {
    useScrollAnimation();

    return (
        <>
            {/* HERO */}
            <Hero
                bg={heroBg}
                title="From Farmers to the World — Trusted Agro Supply Chain Partner"
                subtitle="Panjara Agro connects Indian farmer clusters directly to global importers through ethical aggregation, rigorous quality control, and reliable supply chain management."
            >
                <Link to="/contact" className="btn btn--gold">Request Bulk Quote</Link>
                <Link to="/contact" className="btn btn--secondary">Become a Trade Partner</Link>
            </Hero>

            {/* TRUST BADGES */}
            <section className="section home-trust">
                <div className="container">
                    <div className="home-trust__grid fade-in">
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={5000} suffix="+" />
                            </div>
                            <p className="home-trust__label">Farmer Network</p>
                            <p className="home-trust__desc">Connected across multiple states</p>
                        </div>
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={15} suffix="+" />
                            </div>
                            <p className="home-trust__label">Export Destinations</p>
                            <p className="home-trust__desc">Across Asia, Africa & Middle East</p>
                        </div>
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={50} suffix="+" />
                            </div>
                            <p className="home-trust__label">Product Varieties</p>
                            <p className="home-trust__desc">Grains, pulses, spices & more</p>
                        </div>
                        <div className="home-trust__item">
                            <div className="home-trust__number">
                                <AnimatedCounter end={10000} suffix=" MT" />
                            </div>
                            <p className="home-trust__label">Monthly Capacity</p>
                            <p className="home-trust__desc">Bulk supply capability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Who We Are</span>
                        <h2 className="section-heading__title">A Farmer-Owned Supply Ecosystem</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Panjara Agro is a Farmer Producer Company (FPC) — a collective of Indian farmers organized
                            to aggregate, process, and export agricultural commodities directly to global buyers,
                            eliminating middlemen and ensuring fair prices for farmers.
                        </p>
                    </div>
                    <div className="grid-3">
                        <div className="card fade-in">
                            <div className="card__icon">🌱</div>
                            <h3 className="card__title">Direct Farm Sourcing</h3>
                            <p className="card__text">
                                Every product is traceable to its farm origin. We work directly with farmer clusters
                                to ensure quality from seed to shipment.
                            </p>
                        </div>
                        <div className="card fade-in">
                            <div className="card__icon">📦</div>
                            <h3 className="card__title">Bulk Supply Capability</h3>
                            <p className="card__text">
                                With nationwide farmer networks and warehousing infrastructure, we can fulfill
                                large-volume orders consistently throughout the year.
                            </p>
                        </div>
                        <div className="card fade-in">
                            <div className="card__icon">🌍</div>
                            <h3 className="card__title">Global Logistics Support</h3>
                            <p className="card__text">
                                End-to-end export management — from documentation and compliance to containerized
                                shipping and port-to-port coordination.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPORT CATEGORIES */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Commodity Portfolio</span>
                        <h2 className="section-heading__title">Export-Ready Agricultural Products</h2>
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

            {/* SUSTAINABILITY */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Sustainability</span>
                        <h2 className="section-heading__title">Ethical Sourcing · Sustainable Farming · Fair Pricing</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            As a farmer-owned company, every trade we facilitate directly impacts agricultural
                            livelihoods. Our model ensures farmers receive fair market prices while buyers get
                            traceable, quality-assured commodities.
                        </p>
                    </div>
                    <div className="grid-4 fade-in">
                        {[
                            { icon: '🤝', title: 'Fair Trade', text: 'Farmers receive transparent, market-linked pricing without middlemen deductions.' },
                            { icon: '🌿', title: 'Sustainable Methods', text: 'Promoting organic and low-chemical farming practices across our network.' },
                            { icon: '📊', title: 'Full Traceability', text: 'Every shipment can be traced back to the farmer cluster and region of origin.' },
                            { icon: '🎓', title: 'Farmer Training', text: 'Ongoing capacity building programs for quality improvement and sustainable yield.' },
                        ].map((item, i) => (
                            <div className="sustain-card" key={i}>
                                <span className="sustain-card__icon">{item.icon}</span>
                                <h4 className="sustain-card__title">{item.title}</h4>
                                <p className="sustain-card__text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section home-cta">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in">
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '16px', color: 'var(--green-800)' }}>
                            Ready to Source Quality Indian Agricultural Commodities?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.05rem' }}>
                            Whether you need bulk food grains, premium spices, or custom commodity sourcing —
                            our trade team is ready to serve you.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn--primary">Request Bulk Quote →</Link>
                            <a href="/panjara-company-profile.pdf" download className="btn btn--outline">Download Company Profile</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
