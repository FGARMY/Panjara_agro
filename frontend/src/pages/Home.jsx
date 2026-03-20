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

export default function Home() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Farmer Producer Company | Indian Agro Exports"
                description="Panjara Agro Farmers Producer Company Limited — Premium Indian agricultural commodity exports. Direct farm sourcing of spices, food grains, pulses &amp; oilseeds for global buyers."
                path="/"
                keywords="agro export India, farmer producer company, indian spices exporter, food grains supplier, pulses exporter, bulk agricultural supply, APEDA registered"
            />
            {/* HERO SLIDER — spice-themed auto-sliding showcase */}
            <HeroSlider />

            {/* TRUST METRICS — immediate credibility */}
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

            {/* FEATURED SPICES — real product showcase */}
            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__label">Our Products</span>
                        <h2 className="section-heading__title">Featured Spices</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="home-products grid-3">
                        {featuredProducts.map(product => (
                            <Link to="/products" className="home-product-card" key={product.id}>
                                <div className="home-product-card__img-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="home-product-card__img"
                                        loading="lazy"
                                    />
                                    <span className="home-product-card__badge">{product.category}</span>
                                </div>
                                <div className="home-product-card__body">
                                    <h3 className="home-product-card__name">{product.name}</h3>
                                    <p className="home-product-card__desc">{product.description}</p>
                                    <div className="home-product-card__footer">
                                        <span className="home-product-card__price">
                                            ₹{product.price}<span className="home-product-card__unit">/kg</span>
                                        </span>
                                        <span className="home-product-card__arrow">View Details →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="home-products__cta">
                        <Link to="/products" className="btn btn--outline">Explore All Spices →</Link>
                    </div>
                </div>
            </section>

            {/* CTA — single clear action */}
            <section className="section home-cta">
                <div className="container home-cta__inner">
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
