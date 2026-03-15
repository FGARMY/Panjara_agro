import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
const farmerBg = 'https://images.unsplash.com/photo-1592982537447-6f2c6e6eb12d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';
import './FarmerNetwork.css';

export default function FarmerNetwork() {
    useScrollAnimation();

    return (
        <>
            <SEO
                title="Farmer Network — 5000+ Farmers Across 8 States"
                description="Panjara Agro's farmer network spans 5000+ farmers across 8 Indian states. Direct sourcing from farmer clusters ensures quality, traceability & fair pricing."
                path="/farmer-network"
                keywords="farmer network India, farmer producer company, direct farm sourcing, smallholder farmers, agricultural cooperative"
            />
            <section className="hero hero--inner" style={{ backgroundImage: `url(${farmerBg})` }} id="farmer-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Our Farmer Network</h1>
                    <p className="hero__subtitle">The backbone of Panjara Agro — thousands of farmers producing quality commodities for the world.</p>
                </div>
            </section>

            {/* Impact Numbers */}
            <section className="section farmer-impact">
                <div className="container">
                    <div className="farmer-impact__grid fade-in">
                        <div className="farmer-impact__item">
                            <div className="farmer-impact__number"><AnimatedCounter end={5000} suffix="+" /></div>
                            <p className="farmer-impact__label">Farmers Connected</p>
                        </div>
                        <div className="farmer-impact__item">
                            <div className="farmer-impact__number"><AnimatedCounter end={8} suffix="" /></div>
                            <p className="farmer-impact__label">States Covered</p>
                        </div>
                        <div className="farmer-impact__item">
                            <div className="farmer-impact__number"><AnimatedCounter end={50} suffix="+" /></div>
                            <p className="farmer-impact__label">Farmer Groups</p>
                        </div>
                        <div className="farmer-impact__item">
                            <div className="farmer-impact__number"><AnimatedCounter end={25000} suffix="" /></div>
                            <p className="farmer-impact__label">Acres Under Cultivation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Our Story</span>
                        <h2 className="section-heading__title">When You Buy From Us, You Buy From Farmers</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="farmer-story fade-in">
                        <p>
                            Every product in our catalog begins its journey in the hands of an Indian farmer. These are
                            families who have cultivated the land for generations — working with the seasons, nurturing
                            the soil, and producing the grains, pulses, spices, and oilseeds that sustain millions.
                        </p>
                        <p>
                            But for too long, these farmers have been cut off from the markets that value their produce.
                            Middlemen, inefficient supply chains, and lack of market access meant that the people who
                            grow the food earn the least from it.
                        </p>
                        <p>
                            <strong>Panjara Agro exists to change this.</strong> By organizing farmers into a Producer Company,
                            we give them collective bargaining power, direct market access, and the infrastructure to compete
                            in global trade. When a buyer overseas purchases our rice, spices, or pulses — they're not just
                            buying a commodity. They're investing in the livelihood of an Indian farming family.
                        </p>
                        <div className="farmer-story__quote">
                            "We don't just export commodities. We export the hard work, tradition, and pride of
                            Indian farmers."
                        </div>
                    </div>
                </div>
            </section>

            {/* Regions */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Geographic Reach</span>
                        <h2 className="section-heading__title">Regions We Serve</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="grid-4 fade-in">
                        {[
                            { state: 'Maharashtra', crops: 'Soybean, Onion, Tur Dal, Turmeric', farmers: '1500+' },
                            { state: 'Madhya Pradesh', crops: 'Wheat, Chana, Soybean, Mustard', farmers: '1200+' },
                            { state: 'Rajasthan', crops: 'Cumin, Coriander, Millets, Groundnut', farmers: '800+' },
                            { state: 'Karnataka', crops: 'Maize, Chilli, Rice, Ragi', farmers: '500+' },
                            { state: 'Gujarat', crops: 'Groundnut, Cumin, Castor, Cotton', farmers: '400+' },
                            { state: 'Andhra Pradesh', crops: 'Chilli, Rice, Moong, Groundnut', farmers: '300+' },
                            { state: 'Telangana', crops: 'Turmeric, Rice, Cotton', farmers: '200+' },
                            { state: 'Chhattisgarh', crops: 'Rice, Maize, Minor Millets', farmers: '150+' },
                        ].map((r, i) => (
                            <div className="region-card" key={i}>
                                <h4 className="region-card__state">{r.state}</h4>
                                <p className="region-card__crops">{r.crops}</p>
                                <span className="region-card__farmers">{r.farmers} farmers</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Farmer Programs</span>
                        <h2 className="section-heading__title">Sustainable Agriculture & Empowerment</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="grid-3 fade-in">
                        {[
                            {
                                icon: '🎓',
                                title: 'Training & Capacity Building',
                                text: 'Regular training programs on best agricultural practices, soil health management, water conservation, and organic farming techniques.'
                            },
                            {
                                icon: '🧪',
                                title: 'Soil & Water Testing',
                                text: 'Free soil testing and water quality analysis programs to help farmers optimize inputs and improve yields sustainably.'
                            },
                            {
                                icon: '📱',
                                title: 'Market Information',
                                text: 'Real-time market price information and agri-advisory services through mobile platforms, empowering farmers with data.'
                            },
                            {
                                icon: '🌿',
                                title: 'Organic Transition Support',
                                text: 'Assisting farmers in transitioning to organic and low-chemical farming with certification support and premium market linkage.'
                            },
                            {
                                icon: '💰',
                                title: 'Fair Price Assurance',
                                text: 'Guaranteed minimum support prices and transparent weighing/grading at collection centers — no middleman deductions.'
                            },
                            {
                                icon: '🏦',
                                title: 'Financial Inclusion',
                                text: 'Linking farmers with banking, insurance, and credit facilities through our institutional partnerships.'
                            },
                        ].map((prog, i) => (
                            <div className="farmer-program-card" key={i}>
                                <span className="farmer-program-card__icon">{prog.icon}</span>
                                <h4 className="farmer-program-card__title">{prog.title}</h4>
                                <p className="farmer-program-card__text">{prog.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
