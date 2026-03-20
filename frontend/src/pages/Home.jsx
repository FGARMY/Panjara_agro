import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import allProducts from '../data/products.json';
import './Home.css';

/* Show top 6 products by popularity on the homepage */
const featuredProducts = [...allProducts]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);

const certifications = [
    { icon: '🏛️', label: 'APEDA Registered', desc: 'Agricultural export authority' },
    { icon: '🔬', label: 'FSSAI Licensed', desc: 'Food safety certified' },
    { icon: '🌐', label: 'IEC Certified', desc: 'Import-Export Code holder' },
    { icon: '📋', label: 'GST Registered', desc: 'Government tax compliance' },
];

const qualitySteps = [
    { icon: '🌾', title: 'Farm Sourcing', desc: 'Direct procurement from 5,000+ verified farmer partners across India.' },
    { icon: '🔍', title: 'Quality Testing', desc: 'Lab-tested for purity, moisture, and contamination at every batch.' },
    { icon: '📦', title: 'Export Packaging', desc: 'Food-grade PP bags, jute, and custom branding for global markets.' },
    { icon: '🚢', title: 'Global Shipping', desc: 'Air & sea freight with full documentation (Bill of Lading, COO, Phyto).' },
];

const exportCountries = [
    { name: 'UAE', code: 'ae' },
    { name: 'Saudi Arabia', code: 'sa' },
    { name: 'USA', code: 'us' },
    { name: 'UK', code: 'gb' },
    { name: 'Singapore', code: 'sg' },
    { name: 'Malaysia', code: 'my' },
    { name: 'Australia', code: 'au' },
    { name: 'Canada', code: 'ca' },
    { name: 'Germany', code: 'de' },
    { name: 'Japan', code: 'jp' },
    { name: 'South Africa', code: 'za' },
    { name: 'Qatar', code: 'qa' },
    { name: 'Oman', code: 'om' },
    { name: 'Kuwait', code: 'kw' },
    { name: 'Nepal', code: 'np' },
];

export default function Home() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Premium Indian Agro Exporter | Panjara Agro"
                description="Panjara Agro — India's trusted agricultural commodity exporter. Premium spices, food grains, pulses & oilseeds exported to 15+ countries. APEDA registered, FSSAI licensed. Request a bulk quote today."
                path="/"
                keywords="Indian agro exporter, bulk agriculture supplier India, export quality spices, APEDA registered exporter, bulk spices supplier, Indian food grains exporter, pulses exporter India"
            />
            <HeroSlider />

            {/* ── CERTIFICATION TRUST STRIP ── */}
            <section className="section home-certs">
                <div className="container">
                    <div className="home-certs__grid">
                        {certifications.map(cert => (
                            <div className="home-certs__item" key={cert.label}>
                                <span className="home-certs__icon">{cert.icon}</span>
                                <div>
                                    <strong className="home-certs__label">{cert.label}</strong>
                                    <p className="home-certs__desc">{cert.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TRUST METRICS ── */}
            <section className="section home-trust">
                <div className="container">
                    <div className="home-trust__grid">
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

            {/* ── FEATURED PRODUCTS (Premium Cards) ── */}
            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__label">Our Products</span>
                        <h2 className="section-heading__title">Export-Grade Product Range</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Premium Indian agricultural commodities — sorted, tested, packed, and ready for global markets.
                        </p>
                    </div>
                    <div className="home-products grid-3">
                        {featuredProducts.map(product => (
                            <div className="home-product-card" key={product.id}>
                                <div className="home-product-card__img-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="home-product-card__img"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="#E8F5E9" width="400" height="300"/><text fill="#2E7D32" font-size="18" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">' + product.name + '</text></svg>')}`;
                                        }}
                                    />
                                    <span className="home-product-card__badge">{product.category}</span>
                                </div>
                                <div className="home-product-card__body">
                                    <h3 className="home-product-card__name">{product.name}</h3>
                                    <div className="home-product-card__meta">
                                        {product.moq && <span className="home-product-card__tag">MOQ: {product.moq}</span>}
                                        {product.variety && <span className="home-product-card__tag">{product.variety.split(',')[0]}</span>}
                                    </div>
                                    <p className="home-product-card__desc">{product.description}</p>
                                    <a href="#bulk-quotation" className="btn btn--primary btn--sm home-product-card__cta">
                                        Request Quote →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="home-products__cta">
                        <Link to="/products" className="btn btn--outline">View Full Product Catalog →</Link>
                    </div>
                </div>
            </section>

            {/* ── OUR STORY ── */}
            <section className="section section--cream">
                <div className="container">
                    <div className="home-story">
                        <div className="home-story__content">
                            <span className="section-heading__label">Our Story</span>
                            <h2 className="home-story__title">From Indian Farms to Global Markets</h2>
                            <div className="section-heading__bar" style={{ margin: '0 0 20px' }} />
                            <p className="home-story__text">
                                Panjara Agro Farmers Producer Company was founded with a clear mission: to bring
                                India's finest agricultural products to the world while ensuring fair value for
                                our farming communities.
                            </p>
                            <p className="home-story__text">
                                We work directly with <strong>5,000+ farmer partners</strong> across Maharashtra,
                                Telangana, and Tamil Nadu — cutting out middlemen to deliver fresher, purer,
                                and more affordable products. Every batch is lab-tested, sorted by grade,
                                and packed to international export standards.
                            </p>
                            <p className="home-story__text">
                                Whether you need 1 MT or 500 MT, we handle it — from procurement to packaging
                                to port delivery. That's the Panjara promise.
                            </p>
                            <Link to="/about" className="btn btn--outline" style={{ marginTop: '16px' }}>
                                Learn More About Us →
                            </Link>
                        </div>
                        <div className="home-story__stats">
                            <div className="home-story__stat">
                                <span className="home-story__stat-number">2018</span>
                                <span className="home-story__stat-label">Established</span>
                            </div>
                            <div className="home-story__stat">
                                <span className="home-story__stat-number">5,000+</span>
                                <span className="home-story__stat-label">Farmer Partners</span>
                            </div>
                            <div className="home-story__stat">
                                <span className="home-story__stat-number">15+</span>
                                <span className="home-story__stat-label">Countries Served</span>
                            </div>
                            <div className="home-story__stat">
                                <span className="home-story__stat-number">100%</span>
                                <span className="home-story__stat-label">Quality Commitment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUALITY PROMISE ── */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__label">Quality Promise</span>
                        <h2 className="section-heading__title">From Farm to Port — Every Step Controlled</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="home-quality grid-4">
                        {qualitySteps.map((step, i) => (
                            <div className="home-quality__step" key={step.title}>
                                <div className="home-quality__step-num">{String(i + 1).padStart(2, '0')}</div>
                                <span className="home-quality__step-icon">{step.icon}</span>
                                <h3 className="home-quality__step-title">{step.title}</h3>
                                <p className="home-quality__step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPORT CAPABILITY ── */}
            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__label">Global Reach</span>
                        <h2 className="section-heading__title">Exporting to 15+ Countries Worldwide</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Trusted by importers across the Middle East, Europe, Asia Pacific, and the Americas.
                        </p>
                    </div>
                    <div className="home-export__flags">
                        {exportCountries.map(c => (
                            <div className="home-export__flag" key={c.name}>
                                <img
                                    src={`https://flagcdn.com/w80/${c.code}.png`}
                                    srcSet={`https://flagcdn.com/w160/${c.code}.png 2x`}
                                    alt={`${c.name} flag`}
                                    className="home-export__flag-img"
                                    loading="lazy"
                                    width="48"
                                    height="36"
                                />
                                <span className="home-export__flag-name">{c.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="home-export__cta">
                        <a href="#bulk-quotation" className="btn btn--gold">Request Export Quote →</a>
                        <Link to="/export-services" className="btn btn--outline">View Export Services</Link>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__label">Why Choose Us</span>
                        <h2 className="section-heading__title">Your Competitive Edge in Global Trade</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="home-why grid-4">
                        <div className="home-why__card">
                            <div className="home-why__icon">🔬</div>
                            <h3 className="home-why__title">Strict Quality Control</h3>
                            <p className="home-why__desc">Every batch is lab-tested for moisture, purity, aflatoxin, and pesticide residue before shipping.</p>
                        </div>
                        <div className="home-why__card">
                            <div className="home-why__icon">📦</div>
                            <h3 className="home-why__title">Bulk Supply Capability</h3>
                            <p className="home-why__desc">10,000+ MT monthly capacity with consistent supply chain across seasons.</p>
                        </div>
                        <div className="home-why__card">
                            <div className="home-why__icon">🚀</div>
                            <h3 className="home-why__title">Fast Logistics</h3>
                            <p className="home-why__desc">Port-ready packaging with sea & air freight. Full documentation — COO, Phyto, BOL, LC compliant.</p>
                        </div>
                        <div className="home-why__card">
                            <div className="home-why__icon">💰</div>
                            <h3 className="home-why__title">Competitive Pricing</h3>
                            <p className="home-why__desc">Direct farm sourcing eliminates middlemen. Fair price for you, fair value for farmers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__label">What Buyers Say</span>
                        <h2 className="section-heading__title">Trusted by Importers Worldwide</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="home-testimonials grid-3">
                        <div className="home-testimonial">
                            <div className="home-testimonial__stars">★★★★★</div>
                            <p className="home-testimonial__text">
                                "Panjara Agro delivers consistent quality turmeric powder. Their documentation
                                is always perfect and shipments arrive on schedule. Highly recommend for GCC importers."
                            </p>
                            <div className="home-testimonial__author">
                                <div className="home-testimonial__avatar">AK</div>
                                <div>
                                    <strong className="home-testimonial__name">Ahmed K.</strong>
                                    <span className="home-testimonial__company">Al-Rashid Trading, UAE 🇦🇪</span>
                                </div>
                            </div>
                        </div>
                        <div className="home-testimonial">
                            <div className="home-testimonial__stars">★★★★★</div>
                            <p className="home-testimonial__text">
                                "We've been importing cumin and coriander from Panjara for over 2 years.
                                Excellent communication, fair pricing, and quality that meets European standards."
                            </p>
                            <div className="home-testimonial__author">
                                <div className="home-testimonial__avatar">ML</div>
                                <div>
                                    <strong className="home-testimonial__name">Maria L.</strong>
                                    <span className="home-testimonial__company">EuroSpice GmbH, Germany 🇩🇪</span>
                                </div>
                            </div>
                        </div>
                        <div className="home-testimonial">
                            <div className="home-testimonial__stars">★★★★★</div>
                            <p className="home-testimonial__text">
                                "Reliable bulk supplier for red chilli powder. Their team responds within 24 hours
                                and handles LC payments smoothly. A true export professional."
                            </p>
                            <div className="home-testimonial__author">
                                <div className="home-testimonial__avatar">RS</div>
                                <div>
                                    <strong className="home-testimonial__name">Rajesh S.</strong>
                                    <span className="home-testimonial__company">SingFoods Pte Ltd, Singapore 🇸🇬</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STRONG CTA STRIP ── */}
            <section className="section section--green home-cta-strip">
                <div className="container">
                    <div className="home-cta-strip__inner">
                        <div className="home-cta-strip__text">
                            <h2 className="home-cta-strip__title">Looking for a Reliable Indian Supplier?</h2>
                            <p className="home-cta-strip__subtitle">
                                Get competitive pricing, consistent quality, and hassle-free export documentation.
                                Our trade team responds within 24 hours.
                            </p>
                        </div>
                        <div className="home-cta-strip__actions">
                            <a href="#bulk-quotation" className="btn btn--gold">Get Quote Now</a>
                            <a
                                href="https://wa.me/917758866318?text=Hello%20Panjara%20Agro%2C%20I%20am%20interested%20in%20your%20products."
                                className="btn btn--whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
