import useScrollAnimation from '../hooks/useScrollAnimation';
import InquiryForm from '../components/InquiryForm';
import heroBg from '../assets/hero-banner.png';
import './Contact.css';

export default function Contact() {
    useScrollAnimation();

    return (
        <>
            <section className="hero hero--inner" style={{ backgroundImage: `url(${heroBg})` }} id="contact-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Get in Touch</h1>
                    <p className="hero__subtitle">Ready to source quality Indian agricultural commodities? Our trade team is here to help you every step of the way.</p>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">How Can We Help?</span>
                        <h2 className="section-heading__title">Choose Your Inquiry Type</h2>
                        <div className="section-heading__bar" />
                    </div>
                    <div className="contact-actions fade-in">
                        <a href="#inquiry-form" className="contact-action">
                            <div className="contact-action__icon">📦</div>
                            <div className="contact-action__title">Request Bulk Quote</div>
                            <div className="contact-action__desc">Get pricing for specific commodities and volumes</div>
                        </a>
                        <a href="#inquiry-form" className="contact-action">
                            <div className="contact-action__icon">🤝</div>
                            <div className="contact-action__title">Become a Trade Partner</div>
                            <div className="contact-action__desc">Start a long-term sourcing relationship</div>
                        </a>
                        <a href="#inquiry-form" className="contact-action">
                            <div className="contact-action__icon">📋</div>
                            <div className="contact-action__title">Custom Sourcing</div>
                            <div className="contact-action__desc">Need something specific? Tell us about it</div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Form + Contact Info */}
            <section className="section section--alt">
                <div className="container">
                    <div className="contact-layout fade-in">
                        {/* Form */}
                        <div>
                            <h2 className="contact-form-title">Trade Inquiry Form</h2>
                            <p className="contact-form-subtitle">
                                Fill in your requirements below and our trade team will get back to you within 24 business hours
                                with a customized proposal.
                            </p>
                            <InquiryForm />
                        </div>

                        {/* Sidebar */}
                        <aside className="contact-sidebar">
                            <div className="contact-info">
                                <h3 className="contact-info__title">Contact Information</h3>
                                <div className="contact-info__items">
                                    <div className="contact-info__item">
                                        <span className="contact-info__icon">📧</span>
                                        <div>
                                            <div className="contact-info__label">Email</div>
                                            <div className="contact-info__value">
                                                <a href="mailto:info@panjaraagro.com">info@panjaraagro.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-info__item">
                                        <span className="contact-info__icon">📞</span>
                                        <div>
                                            <div className="contact-info__label">Phone</div>
                                            <div className="contact-info__value">
                                                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-info__item">
                                        <span className="contact-info__icon">📍</span>
                                        <div>
                                            <div className="contact-info__label">Registered Office</div>
                                            <div className="contact-info__value">
                                                Panjara Agro Farmers Producer<br />
                                                Company Limited<br />
                                                Maharashtra, India
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-info__item">
                                        <span className="contact-info__icon">🌐</span>
                                        <div>
                                            <div className="contact-info__label">Website</div>
                                            <div className="contact-info__value">www.panjaraagro.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/91XXXXXXXXXX?text=Hi%21%20I%E2%80%99m%20interested%20in%20sourcing%20agricultural%20commodities%20from%20Panjara%20Agro."
                                className="contact-whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                💬 Chat on WhatsApp
                            </a>

                            <div className="contact-map">
                                <iframe
                                    className="contact-map__embed"
                                    title="Panjara Agro Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.208!2d73.856!3d18.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzAuMCJOIDczwrA1MScyMi4wIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="contact-hours">
                                <h4 className="contact-hours__title">Business Hours (IST)</h4>
                                <div className="contact-hours__row">
                                    <span className="contact-hours__day">Monday – Friday</span>
                                    <span>9:00 AM – 6:00 PM</span>
                                </div>
                                <div className="contact-hours__row">
                                    <span className="contact-hours__day">Saturday</span>
                                    <span>10:00 AM – 2:00 PM</span>
                                </div>
                                <div className="contact-hours__row">
                                    <span className="contact-hours__day">Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
