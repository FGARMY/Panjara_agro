import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import { fpoStats } from '../data/companyData';
const heroBg = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';
import './ProductionCapacity.css';

export default function ProductionCapacity() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Production Capacity — Farmer Network & Crop Clusters"
                description="Data-driven production capability: 5000+ registered farmers, 25,000+ acres, 20+ collection centers. Monthly supply estimates for grains, pulses, spices & oilseeds."
                path="/production-capacity"
                keywords="agricultural production capacity India, farmer producer company capacity, crop cluster India, monthly supply capability, agro aggregation"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="production-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Our Farmer Network & Production Capacity</h1>
                    <p className="hero__subtitle">Data-driven production capability backed by thousands of registered farmers across India.</p>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">At a Glance</span>
                        <h2 className="section-heading__title">Production Capacity Overview</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="capacity-stats fade-in">
                        <div className="capacity-stat">
                            <div className="capacity-stat__value">
                                <AnimatedCounter end={fpoStats.registeredFarmers} />+
                            </div>
                            <div className="capacity-stat__label">Registered Farmers</div>
                        </div>
                        <div className="capacity-stat">
                            <div className="capacity-stat__value">
                                <AnimatedCounter end={fpoStats.totalAcreage} />+
                            </div>
                            <div className="capacity-stat__label">Acres Under Cultivation</div>
                        </div>
                        <div className="capacity-stat">
                            <div className="capacity-stat__value">
                                <AnimatedCounter end={fpoStats.collectionCenters} />
                            </div>
                            <div className="capacity-stat__label">Collection Centers</div>
                        </div>
                        <div className="capacity-stat">
                            <div className="capacity-stat__value">
                                <AnimatedCounter end={fpoStats.processingUnits} />
                            </div>
                            <div className="capacity-stat__label">Processing Units</div>
                        </div>
                        <div className="capacity-stat">
                            <div className="capacity-stat__value">{fpoStats.warehouseCapacity}</div>
                            <div className="capacity-stat__label">Warehouse Capacity</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crop Clusters */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Regional Strength</span>
                        <h2 className="section-heading__title">Crop Clusters by Region</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Our farmer network spans across major agricultural regions of India,
                            each specializing in specific crop categories.
                        </p>
                    </div>

                    <div className="clusters-grid fade-in">
                        {fpoStats.cropClusters.map((cluster, i) => (
                            <div className="cluster-card" key={i}>
                                <div className="cluster-card__region">
                                    <span className="cluster-card__region-icon">📍</span>
                                    {cluster.region}
                                </div>
                                <div className="cluster-card__crops">{cluster.crops}</div>
                                <div className="cluster-card__stats">
                                    <div className="cluster-card__stat">
                                        <span className="cluster-card__stat-value">{cluster.farmers.toLocaleString()}</span>
                                        <span className="cluster-card__stat-label">Farmers</span>
                                    </div>
                                    <div className="cluster-card__stat">
                                        <span className="cluster-card__stat-value">{cluster.acreage.toLocaleString()}</span>
                                        <span className="cluster-card__stat-label">Acres</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monthly Production Estimates */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Supply Capability</span>
                        <h2 className="section-heading__title">Monthly Production Estimates</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="production-table-wrap fade-in">
                        <table className="production-table">
                            <thead>
                                <tr>
                                    <th>Product Category</th>
                                    <th>Estimated Monthly Supply</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fpoStats.monthlyEstimates.map((item, i) => (
                                    <tr key={i}>
                                        <td className="production-table__product">{item.product}</td>
                                        <td className="production-table__qty">{item.quantity}</td>
                                        <td><span className="production-table__status">Available</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Aggregation Process */}
            <section className="section section--brown">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">How We Work</span>
                        <h2 className="section-heading__title">Aggregation Process</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            From farmer registration to export dispatch — a transparent, systematic aggregation model.
                        </p>
                    </div>

                    <div className="agg-steps fade-in">
                        {fpoStats.aggregationSteps.map((step) => (
                            <div className="agg-step" key={step.step}>
                                <div className="agg-step__number">{step.step}</div>
                                <div className="agg-step__content">
                                    <h4 className="agg-step__title">{step.title}</h4>
                                    <p className="agg-step__desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="readiness-cta fade-in" style={{ textAlign: 'center', marginTop: 40 }}>
                        <Link to="/contact" className="btn btn--gold">
                            Explore Partnership Opportunities →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
