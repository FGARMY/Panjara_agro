import { Link } from 'react-router-dom';
import logoIcon from '../assets/Panajara_Logo-removebg-preview.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="site-footer">
            <div className="container-wide">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src={logoIcon} alt="Panjara Agro" className="footer__logo-icon" />
                            <div>
                                <span className="footer__logo-name">PANJARA AGRO</span>
                                <span className="footer__logo-tagline">Farmers Producer Company Ltd.</span>
                            </div>
                        </Link>
                        <p className="footer__desc">
                            Connecting India's farming communities to global markets through quality,
                            transparency, and trusted trade relationships.
                        </p>
                    </div>

                    {/* Company */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">Company</h4>
                        <ul className="footer__col-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/production-capacity">Production Capacity</Link></li>
                            <li><Link to="/compliance">Compliance & Registration</Link></li>
                            <li><Link to="/farmer-network">Farmer Network</Link></li>
                            <li><Link to="/infrastructure">Infrastructure</Link></li>
                        </ul>
                    </div>

                    {/* Trade */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">Trade & Products</h4>
                        <ul className="footer__col-links">
                            <li><Link to="/products">Product Catalog</Link></li>
                            <li><Link to="/export-services">Export Services</Link></li>
                            <li><Link to="/import-services">Import Services</Link></li>
                            <li><Link to="/export-docs">Export Documentation</Link></li>
                            <li><Link to="/packaging-logistics">Packaging & Logistics</Link></li>
                            <li><Link to="/quality">Quality Assurance</Link></li>
                        </ul>
                    </div>

                    {/* Connect & Legal */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">Connect & Legal</h4>
                        <ul className="footer__col-links">
                            <li><Link to="/trade-platforms">Trade Platforms</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                        <div className="footer__contact-info">
                            <p>📧 panjaraagro@gmail.com</p>
                            <p>📞 +91 7758866318</p>
                            <p>📍 Maharashtra, India</p>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} Panjara Agro Farmers Producer Company Limited. All rights reserved.
                    </p>
                    <p className="footer__legal">
                        IEC Registered | APEDA Member | FSSAI Licensed | GST Registered
                    </p>
                </div>
            </div>
        </footer>
    );
}
