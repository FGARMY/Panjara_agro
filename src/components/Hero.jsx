import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({ title, subtitle, bg, children, overlay = true }) {
    return (
        <section className="hero" style={{ backgroundImage: `url(${bg})` }} id="hero">
            {overlay && <div className="hero__overlay" />}
            <div className="hero__content container">
                <h1 className="hero__title">{title}</h1>
                {subtitle && <p className="hero__subtitle">{subtitle}</p>}
                {children && <div className="hero__actions">{children}</div>}
            </div>
            <div className="hero__scroll-hint">
                <span>↓</span>
            </div>
        </section>
    );
}
