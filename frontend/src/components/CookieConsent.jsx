import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('panjara_cookie_consent');
        if (!consent) {
            // Slight delay so it doesn't jarringly appear instantly on load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('panjara_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner fade-in">
            <div className="cookie-banner__content container">
                <div>
                    <strong>We value your privacy.</strong>
                    <p>Panjara Agro uses cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies as described in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                </div>
                <div className="cookie-banner__actions">
                    <button className="btn btn--primary" onClick={handleAccept}>Accept Cookies</button>
                    <button className="btn btn--outline" onClick={() => setIsVisible(false)}>Dismiss</button>
                </div>
            </div>
        </div>
    );
}
