import Hero from '../components/Hero';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { leadership, operationsTeam, infrastructure, logisticsPartners } from '../data/companyData';
import heroBg from '../assets/hero-banner.png';
import './About.css';
import './Leadership.css';

export default function About() {
    useScrollAnimation();

    return (
        <>
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="about-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">About Panjara Agro</h1>
                    <p className="hero__subtitle">A Farmer Producer Company building India's most trusted farm-to-global supply chain.</p>
                </div>
            </section>

            {/* What is FPC */}
            <section className="section">
                <div className="container">
                    <div className="about-split fade-in">
                        <div className="about-split__text">
                            <span className="section-heading__label" style={{ textAlign: 'left' }}>Understanding Our Model</span>
                            <h2 className="about-split__title">What is a Farmer Producer Company?</h2>
                            <p>
                                A Farmer Producer Company (FPC) is a collective of agricultural producers — farmers —
                                who come together to form a company under the Indian Companies Act. Unlike traditional
                                cooperatives, FPCs operate as professional business entities while keeping farmers
                                at the center of decision-making.
                            </p>
                            <p>
                                Panjara Agro Farmers Producer Company Limited is owned and governed by its farmer
                                members. This structure ensures that the benefits of trade — fair pricing, market access,
                                and infrastructure support — flow directly back to the farming communities.
                            </p>
                            <div className="about-highlight">
                                <strong>Key Difference:</strong> We are not traders buying from farmers. We are farmers
                                organizing to trade directly with the world.
                            </div>
                        </div>
                        <div className="about-split__visual">
                            <div className="about-flow">
                                <div className="about-flow__step">🌱<span>Farmer Clusters</span></div>
                                <div className="about-flow__arrow">→</div>
                                <div className="about-flow__step">🏭<span>Aggregation & Processing</span></div>
                                <div className="about-flow__arrow">→</div>
                                <div className="about-flow__step">📦<span>Quality Packaging</span></div>
                                <div className="about-flow__arrow">→</div>
                                <div className="about-flow__step">🚢<span>Export to Buyers</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section section--green">
                <div className="container">
                    <div className="grid-2 fade-in">
                        <div className="about-mv-card">
                            <h3>🎯 Our Mission</h3>
                            <p>
                                To empower Indian farmers through organised global trade — providing them direct market
                                access, fair pricing, and the infrastructure needed to compete in international
                                agricultural commodity markets.
                            </p>
                        </div>
                        <div className="about-mv-card">
                            <h3>🔭 Our Vision</h3>
                            <p>
                                To build India's most efficient and transparent farm-to-market export ecosystem,
                                where every farmer has the opportunity to participate in global trade, and every
                                buyer has confidence in the quality and traceability of their supply.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Governance</span>
                        <h2 className="section-heading__title">Board of Directors</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Experienced leaders from agriculture, trade, and finance guiding the strategic direction
                            of our farmer-owned enterprise.
                        </p>
                    </div>

                    <div className="leader-grid fade-in">
                        {leadership.map((person, i) => (
                            <div className="leader-card" key={i}>
                                <div className="leader-card__avatar">
                                    <span className="leader-card__initials">{person.initials}</span>
                                </div>
                                <h3 className="leader-card__name">{person.name}</h3>
                                <div className="leader-card__role">{person.role}</div>
                                <p className="leader-card__bio">{person.bio}</p>
                                <div className="leader-card__dept">{person.department}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operations Team */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Team</span>
                        <h2 className="section-heading__title">Operations Team</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="ops-grid fade-in">
                        {operationsTeam.map((member, i) => (
                            <div className="ops-card" key={i}>
                                <div className="ops-card__header">
                                    <div className="ops-card__avatar-sm">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="ops-card__name">{member.name}</h4>
                                        <div className="ops-card__role">{member.role}</div>
                                    </div>
                                </div>
                                <div className="ops-card__dept-badge">{member.department}</div>
                                <p className="ops-card__responsibilities">{member.responsibilities}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Approach</span>
                        <h2 className="section-heading__title">Eliminating Middlemen, Empowering Farmers</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="about-compare grid-2 fade-in">
                        <div className="about-compare__card about-compare__card--old">
                            <h4>❌ Traditional Model</h4>
                            <ul>
                                <li>Farmer → Village Trader → Mandi Agent → Wholesaler → Processor → Exporter → Buyer</li>
                                <li>Farmer receives 30–40% of final price</li>
                                <li>No quality control or traceability</li>
                                <li>Delayed, inconsistent payments</li>
                            </ul>
                        </div>
                        <div className="about-compare__card about-compare__card--new">
                            <h4>✅ Panjara Agro Model</h4>
                            <ul>
                                <li>Farmer → Panjara Agro (Aggregation + Processing) → Buyer</li>
                                <li>Farmer receives 70–85% of final price</li>
                                <li>Farm-to-shipment traceability</li>
                                <li>Timely, transparent payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Values</span>
                        <h2 className="section-heading__title">What We Stand For</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="grid-4 fade-in">
                        {[
                            { icon: '🔍', title: 'Transparency', text: 'Open pricing, traceable sourcing, and clear communication at every stage.' },
                            { icon: '⚖️', title: 'Fair Pricing', text: 'Farmers receive market-linked rates without intermediary deductions.' },
                            { icon: '🏅', title: 'Quality', text: 'Standardized grading and compliance with international food safety norms.' },
                            { icon: '🌍', title: 'Sustainability', text: 'Promoting eco-friendly farming and responsible trading practices.' },
                        ].map((v, i) => (
                            <div className="card" key={i}>
                                <div className="card__icon">{v.icon}</div>
                                <h3 className="card__title">{v.title}</h3>
                                <p className="card__text">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
