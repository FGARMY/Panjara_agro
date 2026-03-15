import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
const heroBg = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';
import './Infrastructure.css';

export default function Infrastructure() {
    useScrollAnimation();

    const supplyChainSteps = [
        { icon: '🌾', label: 'Farmer Clusters' },
        { icon: '🚜', label: 'Collection Centers' },
        { icon: '🏭', label: 'Processing Units' },
        { icon: '🧪', label: 'Quality Lab' },
        { icon: '📦', label: 'Packaging' },
        { icon: '🏢', label: 'Warehouse' },
        { icon: '🚢', label: 'Port / Shipment' },
    ];

    const facilities = [
        {
            icon: '🏘️',
            title: 'Collection Centers',
            desc: 'Strategically located rural collection centers that serve as the first aggregation point for farmer produce. Each center is equipped for basic cleaning, weighing, and preliminary quality checks.',
            features: ['Multi-state network coverage', 'Electronic weighing systems', 'Moisture testing at entry', 'Daily procurement tracking']
        },
        {
            icon: '🏭',
            title: 'Processing & Sorting Units',
            desc: 'Modern processing facilities for cleaning, sorting, grading, and value-addition. Equipped with gravity separators, color sorters, and destoners for export-quality output.',
            features: ['Color sorting machines', 'Gravity separators & destoners', 'Polishing and grading lines', 'Spice grinding & blending units']
        },
        {
            icon: '🏢',
            title: 'Warehousing Infrastructure',
            desc: 'Large-capacity warehouses with scientific storage practices — fumigation, ventilation, pest control, and FIFO inventory management for long shelf life.',
            features: ['50,000+ MT combined capacity', 'Temperature & humidity monitoring', 'FIFO inventory management', 'Regular fumigation schedules']
        },
        {
            icon: '❄️',
            title: 'Cold Chain Facilities',
            desc: 'Cold storage and refrigerated transport for perishable commodities — fresh produce, fruits, and temperature-sensitive products for export markets.',
            features: ['Multi-temperature cold rooms', 'Reefer container coordination', 'Pre-cooling chambers', 'Continuous temperature logging']
        },
    ];

    const ports = [
        { icon: '⚓', name: 'JNPT Mumbai', info: 'Primary western port' },
        { icon: '⚓', name: 'Mundra', info: 'Gujarat bulk port' },
        { icon: '⚓', name: 'Chennai', info: 'Southern corridor' },
        { icon: '⚓', name: 'Kolkata', info: 'Eastern export hub' },
    ];

    return (
        <>
            <SEO
                title="Infrastructure — Farm-to-Port Supply Chain Facilities"
                description="Panjara Agro's end-to-end infrastructure: 20+ collection centers, 50,000 MT warehouse capacity, processing units, cold chain & multi-port logistics network."
                path="/infrastructure"
                keywords="agricultural infrastructure India, warehouse capacity, cold chain agro, processing facility, farm to port logistics"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="infra-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Our Infrastructure</h1>
                    <p className="hero__subtitle">A robust, end-to-end supply chain infrastructure built to aggregate, process, store, and ship agricultural commodities at scale.</p>
                </div>
            </section>

            {/* Supply Chain Flow */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Supply Chain</span>
                        <h2 className="section-heading__title">Farm-to-Port Pipeline</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Our integrated supply chain connects thousands of farmer clusters to international ports
                            through a seamless pipeline of collection, processing, and logistics.
                        </p>
                    </div>
                    <div className="infra-flow fade-in">
                        {supplyChainSteps.map((step, i) => (
                            <div className="infra-flow-step" key={i}>
                                <div className="infra-flow-step__circle">{step.icon}</div>
                                <span className="infra-flow-step__label">{step.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capacity Stats */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Capacity</span>
                        <h2 className="section-heading__title">Built for Scale</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="infra-stats fade-in">
                        <div className="infra-stat">
                            <div className="infra-stat__number"><AnimatedCounter end={20} suffix="+" /></div>
                            <div className="infra-stat__label">Collection Centers</div>
                        </div>
                        <div className="infra-stat">
                            <div className="infra-stat__number"><AnimatedCounter end={50000} suffix=" MT" /></div>
                            <div className="infra-stat__label">Warehouse Capacity</div>
                        </div>
                        <div className="infra-stat">
                            <div className="infra-stat__number"><AnimatedCounter end={10000} suffix=" MT" /></div>
                            <div className="infra-stat__label">Monthly Processing</div>
                        </div>
                        <div className="infra-stat">
                            <div className="infra-stat__number"><AnimatedCounter end={4} /></div>
                            <div className="infra-stat__label">Port Connections</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Facilities</span>
                        <h2 className="section-heading__title">End-to-End Infrastructure</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="infra-grid fade-in">
                        {facilities.map((item, i) => (
                            <div className="infra-card" key={i}>
                                <div className="infra-card__icon">{item.icon}</div>
                                <h3 className="infra-card__title">{item.title}</h3>
                                <p className="infra-card__desc">{item.desc}</p>
                                <ul className="infra-card__list">
                                    {item.features.map((f, j) => (
                                        <li key={j}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Port Logistics */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Logistics</span>
                        <h2 className="section-heading__title">Multi-Port Shipping Network</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Strategic proximity to India's major ports enables competitive freight rates
                            and faster transit times to all key export destinations.
                        </p>
                    </div>
                    <div className="infra-ports fade-in">
                        {ports.map((port, i) => (
                            <div className="infra-port" key={i}>
                                <div className="infra-port__icon">{port.icon}</div>
                                <div className="infra-port__name">{port.name}</div>
                                <div className="infra-port__info">{port.info}</div>
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
                            Want a Virtual Facility Walkthrough?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 28px' }}>
                            Schedule a virtual tour of our processing and warehousing facilities, or arrange an on-site
                            inspection before your first order.
                        </p>
                        <Link to="/contact" className="btn btn--primary">Schedule a Facility Tour →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
