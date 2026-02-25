import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/export-services', label: 'Export' },
    { to: '/import-services', label: 'Import' },
    { to: '/farmer-network', label: 'Farmers' },
    { to: '/quality', label: 'Quality' },
    { to: '/global-trade', label: 'Global Trade' },
    { to: '/infrastructure', label: 'Infrastructure' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
            <div className="navbar__inner container-wide">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">🌾</span>
                    <div className="navbar__logo-text">
                        <span className="navbar__logo-name">PANJARA AGRO</span>
                        <span className="navbar__logo-tagline">Farmers Producer Company</span>
                    </div>
                </Link>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    id="nav-hamburger"
                >
                    <span></span><span></span><span></span>
                </button>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} id="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
