import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import heroBg from '../assets/hero-banner.png';
import './Services.css';

export default function ExportServices() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Export Services — Farm to Port Agricultural Commodity Exports"
                description="End-to-end agricultural commodity export solutions from India — bulk aggregation, sorting, grading, custom packaging, export documentation & international logistics."
                path="/export-services"
                keywords="agro export services India, agricultural commodity export, bulk grain exporter, spices export company, export documentation India"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="export-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Export Services</h1>
                    <p className="hero__subtitle">End-to-end agricultural commodity export solutions — from farm aggregation to port delivery.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">What We Offer</span>
                        <h2 className="section-heading__title">Comprehensive Export Capabilities</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Panjara Agro handles every aspect of agricultural commodity export, allowing international
                            buyers to source directly from India's farming heartland with complete confidence.
                        </p>
                    </div>

                    <div className="services-timeline fade-in">
                        {[
                            {
                                step: '01',
                                icon: '🌾',
                                title: 'Bulk Aggregation from Farmer Clusters',
                                desc: 'We mobilize agricultural produce from our pan-India farmer network. Multiple collection centers ensure consistent supply across seasons. Our aggregation model pools produce from thousands of farmers, enabling large-volume fulfillment.',
                                highlights: ['Multi-state farmer network', 'Year-round supply continuity', 'Volume scalability from 10 MT to 1000+ MT']
                            },
                            {
                                step: '02',
                                icon: '🔍',
                                title: 'Sorting, Grading & Quality Control',
                                desc: 'Every batch undergoes standardized sorting and grading at our processing facilities. We test for moisture, impurities, aflatoxins, and grade-specific parameters to meet international quality benchmarks.',
                                highlights: ['FSSAI & ISO compliant processing', 'Lab-tested quality reports', 'Buyer-specific grading on request']
                            },
                            {
                                step: '03',
                                icon: '📦',
                                title: 'Custom Packaging & Labeling',
                                desc: 'Flexible packaging options tailored to destination market requirements. From bulk jute/PP bags to retail-ready packs with custom labeling, barcoding, and branding.',
                                highlights: ['PP bags, jute bags, bulk containers', 'Private labeling available', 'Export-grade packaging materials']
                            },
                            {
                                step: '04',
                                icon: '📋',
                                title: 'Export Documentation & Compliance',
                                desc: 'Full documentation support including certificates of origin, phytosanitary certificates, fumigation certificates, bill of lading, and customs clearance documents.',
                                highlights: ['Certificate of Origin (CoO)', 'Phytosanitary & Fumigation certificates', 'Letter of Credit (LC) handling']
                            },
                            {
                                step: '05',
                                icon: '🚢',
                                title: 'International Logistics & Shipping',
                                desc: 'We coordinate the entire logistics chain from warehouse to destination port. Containerized shipping (FCL/LCL), cold chain for perishables, and real-time shipment tracking.',
                                highlights: ['FCL & LCL shipping options', 'CIF / FOB / CNF terms available', 'Port-to-port coordination']
                            }
                        ].map((item, i) => (
                            <div className="service-step fade-in" key={i}>
                                <div className="service-step__number">{item.step}</div>
                                <div className="service-step__content">
                                    <div className="service-step__icon">{item.icon}</div>
                                    <h3 className="service-step__title">{item.title}</h3>
                                    <p className="service-step__desc">{item.desc}</p>
                                    <ul className="service-step__highlights">
                                        {item.highlights.map((h, j) => (
                                            <li key={j}>✓ {h}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--cream">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in">
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '16px', color: 'var(--green-800)' }}>
                            Ready to Source from India?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 28px' }}>
                            Share your product requirements and our export team will prepare a customized trade proposal.
                        </p>
                        <a href="/contact" className="btn btn--primary">Start Export Inquiry →</a>
                    </div>
                </div>
            </section>
        </>
    );
}
