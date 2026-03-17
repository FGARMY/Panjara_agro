import { useState, useEffect, useRef } from 'react';
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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
        window.scrollTo(0, 0);
    }, [location]);

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

    const isActive = (group) => {
        if (group.to) return location.pathname === group.to;
        if (group.children) return group.children.some(c => location.pathname === c.to);
        return false;
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
            <div className="navbar__inner container-wide">
                <Link to="/" className="navbar__logo">
                    <img src={logoIcon} alt="Panjara Agro" className="navbar__logo-icon" />
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

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} id="nav-links" ref={dropdownRef}>
                    {navGroups.map((group) => (
                        <li key={group.label} className={group.children ? 'navbar__dropdown' : ''}>
                            {group.children ? (
                                <>
                                    <button
                                        className={`navbar__link navbar__link--dropdown ${isActive(group) ? 'navbar__link--active' : ''}`}
                                        onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                                        aria-expanded={openDropdown === group.label}
                                    >
                                        {group.label}
                                        <span className={`navbar__dropdown-arrow ${openDropdown === group.label ? 'navbar__dropdown-arrow--open' : ''}`}>▾</span>
                                    </button>
                                    <ul className={`navbar__dropdown-menu ${openDropdown === group.label ? 'navbar__dropdown-menu--open' : ''}`}>
                                        {group.children.map((child) => (
                                            <li key={child.to}>
                                                <Link
                                                    to={child.to}
                                                    className={`navbar__dropdown-link ${location.pathname === child.to ? 'navbar__dropdown-link--active' : ''}`}
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
                                >
                                    {group.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
