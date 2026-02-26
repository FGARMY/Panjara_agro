import useScrollAnimation from '../hooks/useScrollAnimation';
import { leadership, operationsTeam, infrastructure, logisticsPartners } from '../data/companyData';
import heroBg from '../assets/hero-banner.png';
import './Leadership.css';

export default function Leadership() {
    useScrollAnimation();

    return (
        <>
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="leadership-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Leadership & Team</h1>
                    <p className="hero__subtitle">Meet the people driving Panjara Agro's mission to connect Indian agriculture with global markets.</p>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="section">
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
            <section className="section section--alt">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Team</span>
                        <h2 className="section-heading__title">Operations Team</h2>
                        <div className="section-heading__bar" />
                        <p className="section-heading__subtitle">
                            Dedicated professionals managing day-to-day export operations,
                            quality control, and farmer coordination.
                        </p>
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

            {/* Infrastructure & Facilities */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Facilities</span>
                        <h2 className="section-heading__title">Infrastructure & Facilities</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="infra-grid fade-in">
                        {infrastructure.map((fac, i) => (
                            <div className="infra-card" key={i}>
                                <div className="infra-card__icon">{fac.icon}</div>
                                <h3 className="infra-card__name">{fac.name}</h3>
                                <div className="infra-card__type">{fac.type}</div>
                                <div className="infra-card__detail">
                                    <span className="infra-card__detail-label">Capacity</span>
                                    <span className="infra-card__detail-value">{fac.capacity}</span>
                                </div>
                                <p className="infra-card__features">{fac.features}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logistics Partnerships */}
            <section className="section section--green">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Partnerships</span>
                        <h2 className="section-heading__title">Warehouse & Logistics Partnerships</h2>
                        <div className="section-heading__bar" />
                    </div>

                    <div className="logistics-grid fade-in">
                        {logisticsPartners.map((partner, i) => (
                            <div className="logistics-card" key={i}>
                                <h4 className="logistics-card__name">{partner.name}</h4>
                                <span className="logistics-card__type">{partner.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
