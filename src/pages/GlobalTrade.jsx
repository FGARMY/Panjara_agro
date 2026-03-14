import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import heroBg from '../assets/hero-banner.png';
import './GlobalTrade.css';

export default function GlobalTrade() {
    useScrollAnimation();

    const regions = [
        {
            icon: '🕌',
            name: 'Middle East',
            countries: 'UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain',
            commodities: ['Rice', 'Spices', 'Pulses', 'Onion']
        },
        {
            icon: '🌍',
            name: 'East Africa',
            countries: 'Kenya, Tanzania, Mozambique, Ethiopia, Djibouti',
            commodities: ['Rice', 'Maize', 'Wheat', 'Millets']
        },
        {
            icon: '🏙️',
            name: 'West Africa',
            countries: 'Nigeria, Ghana, Senegal, Benin, Togo',
            commodities: ['Rice', 'Groundnut', 'Spices', 'Pulses']
        },
        {
            icon: '🌏',
            name: 'Southeast Asia',
            countries: 'Vietnam, Indonesia, Malaysia, Bangladesh, Sri Lanka',
            commodities: ['Spices', 'Oilseeds', 'Grains', 'Pulses']
        },
        {
            icon: '🇪🇺',
            name: 'Europe',
            countries: 'UK, Germany, Netherlands, Belgium, France',
            commodities: ['Organic Spices', 'Millets', 'Specialty Grains']
        },
        {
            icon: '🌎',
            name: 'Americas',
            countries: 'USA, Canada, Brazil',
            commodities: ['Basmati Rice', 'Spices', 'Organic Products']
        },
    ];

    const advantages = [
        { icon: '🏭', title: 'Direct Farm-to-Port Supply', text: 'No middlemen between farmer clusters and export shipments — ensuring competitive pricing.' },
        { icon: '📋', title: 'Comprehensive Documentation', text: 'All export documentation, certifications, and compliance handled in-house.' },
        { icon: '🔄', title: 'Flexible Payment Terms', text: 'LC at sight, TT advance, DA terms — we work with your preferred payment method.' },
        { icon: '🚢', title: 'Multi-Port Logistics', text: 'Shipping from JNPT Mumbai, Mundra, Chennai, and Kolkata — proximity to all major Indian ports.' },
        { icon: '📊', title: 'Consistent Quality', text: 'Standardized grading and lab-tested quality reports with every consignment.' },
        { icon: '🤝', title: 'Long-Term Partnerships', text: 'We build enduring trade relationships — not just one-time transactions.' },
    ];

    return (
        <>
            <SEO
                title="Global Trade Presence — Exports to 15+ Countries"
                description="Panjara Agro exports Indian agricultural commodities to 15+ countries across Middle East, Africa, Southeast Asia, Europe & Americas. Flexible partnership & supply models."
                path="/global-trade"
                keywords="global agro trade India, agricultural export destinations, Middle East agro exporter, Africa food grain supply, international trade partner India"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="globaltrade-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Global Trade Presence</h1>
                    <p className="hero__subtitle">Connecting India's agricultural heartland to buyers across 6 continents with reliable supply and competitive pricing.</p>
                </div>
            </section>

            {/* Stats */}
            <section className="section section--green">
                <div className="container">
                    <div className="trade-stats fade-in">
                        <div className="trade-stat">
                            <div className="trade-stat__number"><AnimatedCounter end={15} suffix="+" /></div>
                            <div className="trade-stat__label">Countries Served</div>
                        </div>
                        <div className="trade-stat">
                            <div className="trade-stat__number"><AnimatedCounter end={6} /></div>
                            <div className="trade-stat__label">Continents Reached</div>
                        </div>
                        <div className="trade-stat">
                            <div className="trade-stat__number"><AnimatedCounter end={50} suffix="+" /></div>
                            <div className="trade-stat__label">Commodities Exported</div>
                        </div>
                        <div className="trade-stat">
                            <div className="trade-stat__number"><AnimatedCounter end={10000} suffix=" MT" /></div>
                            <div className="trade-stat__label">Monthly Capacity</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive map */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Export Destinations</span>
                        <h2 className="section-heading__title">Where Our Products Reach</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Panjara Agro exports premium Indian agricultural commodities to buyers across the
                            Middle East, Africa, Southeast Asia, Europe, and the Americas.
                        </p>
                    </div>
                    <div className="trade-map-wrapper fade-in">
                        <svg viewBox="0 0 1000 500" className="trade-map-svg" role="img" aria-label="World map showing Panjara Agro export destinations">
                            {/* Simplified world regions */}
                            {/* North America */}
                            <path className="land dest" d="M100,80 L280,60 L300,100 L310,180 L280,220 L220,240 L160,220 L100,180 Z" />
                            {/* South America */}
                            <path className="land dest" d="M220,260 L300,240 L320,300 L310,380 L280,420 L240,440 L210,400 L200,320 Z" />
                            {/* Europe */}
                            <path className="land dest" d="M420,60 L540,50 L560,80 L550,140 L520,160 L460,150 L430,120 Z" />
                            {/* Africa */}
                            <path className="land dest" d="M440,180 L540,170 L570,240 L560,340 L520,400 L470,410 L430,360 L420,260 Z" />
                            {/* Middle East */}
                            <path className="land dest" d="M560,140 L640,130 L660,170 L650,210 L600,220 L560,200 Z" />
                            {/* India — highlighted */}
                            <path className="india" d="M660,160 L700,140 L730,170 L740,220 L720,270 L690,280 L660,250 L650,210 Z" />
                            {/* Southeast Asia */}
                            <path className="land dest" d="M740,180 L820,160 L850,200 L840,260 L800,280 L760,270 L740,230 Z" />
                            {/* Australia */}
                            <path className="land" d="M780,340 L880,320 L920,360 L900,420 L840,430 L790,400 Z" />
                            {/* Pulse markers for key destinations */}
                            <circle cx="500" cy="120" r="5" fill="var(--green-500)" opacity="0.8">
                                <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="600" cy="180" r="5" fill="var(--green-500)" opacity="0.8">
                                <animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="490" cy="300" r="5" fill="var(--green-500)" opacity="0.8">
                                <animate attributeName="r" values="5;8;5" dur="2.2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="790" cy="220" r="5" fill="var(--green-500)" opacity="0.8">
                                <animate attributeName="r" values="5;8;5" dur="1.8s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="260" cy="150" r="5" fill="var(--green-500)" opacity="0.8">
                                <animate attributeName="r" values="5;8;5" dur="2.3s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.3s" repeatCount="indefinite" />
                            </circle>
                            {/* Trade lines from India */}
                            <line x1="690" y1="220" x2="600" y2="180" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5" />
                            <line x1="690" y1="220" x2="490" y2="300" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5" />
                            <line x1="690" y1="220" x2="500" y2="120" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5" />
                            <line x1="690" y1="220" x2="790" y2="220" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5" />
                            <line x1="690" y1="220" x2="260" y2="150" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5" />
                        </svg>
                        <div className="trade-map__legend">
                            <div className="trade-map__legend-item">
                                <span className="trade-map__legend-dot trade-map__legend-dot--india" />India (Origin)
                            </div>
                            <div className="trade-map__legend-item">
                                <span className="trade-map__legend-dot trade-map__legend-dot--dest" />Export Destinations
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regions */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Key Markets</span>
                        <h2 className="section-heading__title">Regional Trade Presence</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="trade-regions fade-in">
                        {regions.map((region, i) => (
                            <div className="trade-region" key={i}>
                                <div className="trade-region__icon">{region.icon}</div>
                                <h3 className="trade-region__name">{region.name}</h3>
                                <p className="trade-region__countries">{region.countries}</p>
                                <div className="trade-region__commodities">
                                    {region.commodities.map((c, j) => (
                                        <span className="trade-region__tag" key={j}>{c}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trade Advantages */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Why Trade With Us</span>
                        <h2 className="section-heading__title">Your Competitive Advantage</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="trade-advantages fade-in">
                        {advantages.map((adv, i) => (
                            <div className="trade-advantage" key={i}>
                                <span className="trade-advantage__icon">{adv.icon}</span>
                                <div>
                                    <h4 className="trade-advantage__title">{adv.title}</h4>
                                    <p className="trade-advantage__text">{adv.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Models */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Engagement Models</span>
                        <h2 className="section-heading__title">Partnership & Supply Models</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            We offer flexible engagement models tailored to your sourcing requirements —
                            from spot purchases to long-term contracts.
                        </p>
                    </div>

                    <div className="partnership-grid fade-in">
                        <div className="partnership-card">
                            <div className="partnership-card__icon">📦</div>
                            <h3 className="partnership-card__title">Bulk Supply</h3>
                            <p className="partnership-card__desc">
                                Spot and recurring bulk orders for grains, pulses, spices, and oilseeds.
                                Competitive FOB/CIF pricing with flexible payment terms.
                            </p>
                            <ul className="partnership-card__features">
                                <li>Minimum 25 MT per shipment</li>
                                <li>Multi-port loading options</li>
                                <li>Full documentation support</li>
                            </ul>
                        </div>
                        <div className="partnership-card partnership-card--featured">
                            <div className="partnership-card__badge">Most Popular</div>
                            <div className="partnership-card__icon">📝</div>
                            <h3 className="partnership-card__title">Contract Farming</h3>
                            <p className="partnership-card__desc">
                                Pre-agreed supply contracts with guaranteed quality, quantity, and delivery schedules.
                                Crops grown to your specifications with full traceability.
                            </p>
                            <ul className="partnership-card__features">
                                <li>Custom variety & grade selection</li>
                                <li>Guaranteed monthly supply</li>
                                <li>Dedicated farmer clusters</li>
                                <li>Price-lock options available</li>
                            </ul>
                        </div>
                        <div className="partnership-card">
                            <div className="partnership-card__icon">🏷️</div>
                            <h3 className="partnership-card__title">Private Label</h3>
                            <p className="partnership-card__desc">
                                White-label and private-label packaging with your branding, artwork, and
                                market-specific labeling requirements.
                            </p>
                            <ul className="partnership-card__features">
                                <li>Custom packaging & branding</li>
                                <li>Multi-language labels</li>
                                <li>Retail-ready packing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trade Approach */}
            <section className="section section--brown">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Vision</span>
                        <h2 className="section-heading__title">Long-Term Supply Partnership</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="trade-vision fade-in">
                        <div className="trade-vision__grid">
                            <div className="trade-vision__item">
                                <div className="trade-vision__number">01</div>
                                <h4 className="trade-vision__title">Reliable Supply Chain</h4>
                                <p className="trade-vision__text">
                                    We invest in farmer relationships, not just transactions. Our aggregation model
                                    ensures year-round supply consistency, even across seasonal fluctuations.
                                </p>
                            </div>
                            <div className="trade-vision__item">
                                <div className="trade-vision__number">02</div>
                                <h4 className="trade-vision__title">Scalable Capacity</h4>
                                <p className="trade-vision__text">
                                    With 2,500+ farmers and 15,000+ acres, we can scale supply to match growing
                                    demand — from trial orders to full-container monthly contracts.
                                </p>
                            </div>
                            <div className="trade-vision__item">
                                <div className="trade-vision__number">03</div>
                                <h4 className="trade-vision__title">Quality-First Approach</h4>
                                <p className="trade-vision__text">
                                    Buyers work with us because of consistent quality. Every shipment is lab-tested,
                                    documented, and backed by our quality guarantee.
                                </p>
                            </div>
                            <div className="trade-vision__item">
                                <div className="trade-vision__number">04</div>
                                <h4 className="trade-vision__title">Transparent Communication</h4>
                                <p className="trade-vision__text">
                                    We believe in proactive communication — shipment tracking, market updates,
                                    and pricing transparency at every stage of the trade relationship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--cream">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in">
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '16px', color: 'var(--green-800)' }}>
                            Start Trading with Panjara Agro
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 28px' }}>
                            Whether you are a first-time importer or an established trading house — we are ready to be your
                            trusted supply partner for Indian agricultural commodities.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn--primary">Send Trade Inquiry →</Link>
                            <Link to="/products" className="btn btn--outline">View Product Catalog</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

