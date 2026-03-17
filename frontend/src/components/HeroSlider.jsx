import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/spiceImages';
import './HeroSlider.css';

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const len = heroSlides.length;

    const next = useCallback(() => setCurrent(i => (i + 1) % len), [len]);
    const prev = useCallback(() => setCurrent(i => (i - 1 + len) % len), [len]);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [paused, next]);

    return (
        <section
            className="hero-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            id="hero"
        >
            {heroSlides.map((slide, i) => (
                <div
                    key={i}
                    className={`hero-slider__slide ${i === current ? 'hero-slider__slide--active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                    role="img"
                    aria-label={slide.title}
                >
                    <div className="hero-slider__overlay" />
                </div>
            ))}

            <div className="hero-slider__content container">
                <h1 className="hero-slider__title" key={`t-${current}`}>
                    {heroSlides[current].title}
                </h1>
                <p className="hero-slider__subtitle" key={`s-${current}`}>
                    {heroSlides[current].subtitle}
                </p>
                <div className="hero-slider__actions">
                    <Link to="/products" className="btn btn--gold">Explore Spices</Link>
                    <Link to="/contact" className="btn btn--secondary">Request Quotation</Link>
                </div>
            </div>

            {/* Arrows */}
            <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={prev} aria-label="Previous slide">
                ‹
            </button>
            <button className="hero-slider__arrow hero-slider__arrow--next" onClick={next} aria-label="Next slide">
                ›
            </button>

            {/* Dots */}
            <div className="hero-slider__dots">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        className={`hero-slider__dot ${i === current ? 'hero-slider__dot--active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            <div className="hero-slider__scroll-hint">
                <span>↓</span>
            </div>
        </section>
    );
}
