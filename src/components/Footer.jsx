import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">🌾</span>
                            <div>
                                <h3 className="footer__logo-name">PANJARA AGRO</h3>
                                <p className="footer__logo-tagline">Farmers Producer Company Ltd.</p>
                            </div>
                        </div>
                        <p className="footer__desc">
                            Connecting Indian farmers to global markets through ethical aggregation,
                            quality processing, and reliable supply chain management.
                        </p>
                        <div className="footer__social">
                            <a href="#" aria-label="LinkedIn" className="footer__social-link">in</a>
                            <a href="#" aria-label="Twitter" className="footer__social-link">𝕏</a>
                            <a href="#" aria-label="Facebook" className="footer__social-link">f</a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Quick Links</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Our Products</Link></li>
                            <li><Link to="/export-services">Export Services</Link></li>
                            <li><Link to="/import-services">Import Services</Link></li>
                            <li><Link to="/farmer-network">Farmer Network</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Trade</h4>
                        <ul>
                            <li><Link to="/quality">Quality Assurance</Link></li>
                            <li><Link to="/global-trade">Global Presence</Link></li>
                            <li><Link to="/infrastructure">Infrastructure</Link></li>
                            <li><Link to="/contact">Trade Inquiry</Link></li>
                            <li><a href="/panjara-company-profile.pdf" download>Company Profile ↓</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Contact</h4>
                        <ul className="footer__contact">
                            <li>📧 info@panjaraagro.com</li>
                            <li>📞 +91 XXXXX XXXXX</li>
                            <li>📍 Maharashtra, India</li>
                            <li>
                                <a
                                    href="https://wa.me/91XXXXXXXXXX"
                                    className="btn btn--whatsapp footer__whatsapp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    💬 WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} Panjara Agro Farmers Producer Company Limited. All rights reserved.</p>
                    <p className="footer__bottom-sub">Farmer-owned · Ethically sourced · Globally trusted</p>
                </div>
            </div>
        </footer>
    );
}
