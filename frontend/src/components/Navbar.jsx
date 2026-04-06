import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoIcon from '../assets/Panajara_Logo-removebg-preview.png';

const navGroups = [
    { label: 'Home', to: '/' },
    {
        label: 'Company',
        children: [
            { to: '/about', label: 'About Us' },
            { to: '/production-capacity', label: 'Production Capacity' },
            { to: '/compliance', label: 'Compliance & Registration' },
        ],
    },
    {
        label: 'Products',
        to: '/products',
    },
    {
        label: 'Trade',
        children: [
            { to: '/export-services', label: 'Export Services' },
            { to: '/import-services', label: 'Import Services' },
            { to: '/export-docs', label: 'Export Documentation' },
            { to: '/packaging-logistics', label: 'Packaging & Logistics' },
            { to: '/trade-platforms', label: 'Trade Platforms' },
        ],
    },
    {
        label: 'Trust',
        children: [
            { to: '/quality', label: 'Quality Assurance' },
            { to: '/farmer-network', label: 'Farmer Network' },
            { to: '/infrastructure', label: 'Infrastructure' },
        ],
    },
    { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
        window.scrollTo(0, 0);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Close mobile menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1100) {
                setMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, []);

    const isActive = (group) => {
        if (group.to) return location.pathname === group.to;
        if (group.children) return group.children.some(c => location.pathname === c.to);
        return false;
    };

    return (
        <>
            {/* Overlay backdrop for mobile menu */}
            <div
                className={`navbar__overlay ${menuOpen ? 'navbar__overlay--visible' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <nav
                className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
                id="main-nav"
                ref={navRef}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="navbar__inner container-wide">
                    <Link to="/" className="navbar__logo" onClick={closeMenu}>
                        <img src={logoIcon} alt="Panjara Agro" className="navbar__logo-icon" />
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-name">PANJARA AGRO</span>
                            <span className="navbar__logo-tagline">Farmers Producer Company</span>
                        </div>
                    </Link>

                    <button
                        className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="nav-links"
                        id="nav-hamburger"
                    >
                        <span></span><span></span><span></span>
                    </button>

                    <ul
                        className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
                        id="nav-links"
                        ref={dropdownRef}
                        role="menubar"
                    >
                        {navGroups.map((group) => (
                            <li key={group.label} className={group.children ? 'navbar__dropdown' : ''} role="none">
                                {group.children ? (
                                    <>
                                        <button
                                            className={`navbar__link navbar__link--dropdown ${isActive(group) ? 'navbar__link--active' : ''}`}
                                            onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                                            aria-expanded={openDropdown === group.label}
                                            aria-haspopup="true"
                                            role="menuitem"
                                        >
                                            {group.label}
                                            <span className={`navbar__dropdown-arrow ${openDropdown === group.label ? 'navbar__dropdown-arrow--open' : ''}`}>▾</span>
                                        </button>
                                        <ul
                                            className={`navbar__dropdown-menu ${openDropdown === group.label ? 'navbar__dropdown-menu--open' : ''}`}
                                            role="menu"
                                            aria-label={`${group.label} submenu`}
                                        >
                                            {group.children.map((child) => (
                                                <li key={child.to} role="none">
                                                    <Link
                                                        to={child.to}
                                                        className={`navbar__dropdown-link ${location.pathname === child.to ? 'navbar__dropdown-link--active' : ''}`}
                                                        role="menuitem"
                                                        onClick={closeMenu}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        to={group.to}
                                        className={`navbar__link ${location.pathname === group.to ? 'navbar__link--active' : ''}`}
                                        role="menuitem"
                                        onClick={closeMenu}
                                    >
                                        {group.label}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* CTA inside mobile menu */}
                        <li className="navbar__cta--mobile" role="none">
                            <a
                                href="#bulk-quotation"
                                className="navbar__cta btn btn--gold"
                                id="nav-get-quote-mobile"
                                onClick={closeMenu}
                            >
                                Get Quote
                            </a>
                        </li>
                    </ul>

                    {/* Desktop CTA (hidden on mobile) */}
                    <a
                        href="#bulk-quotation"
                        className="navbar__cta navbar__cta--desktop btn btn--gold"
                        id="nav-get-quote"
                    >
                        Get Quote
                    </a>
                </div>
            </nav>
        </>
    );
}
