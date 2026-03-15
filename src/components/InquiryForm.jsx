import { useState } from 'react';
import './InquiryForm.css';

export default function InquiryForm({ preSelectedProduct = '' }) {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        productRequired: preSelectedProduct,
        quantity: '',
        certifications: '',
        message: '',
        gdprConsent: false
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Inquiry submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
            companyName: '', contactName: '', email: '', phone: '',
            country: '', productRequired: '', quantity: '', certifications: '', message: '', gdprConsent: false
        });
    };

    return (
        <form className="inquiry-form" onSubmit={handleSubmit} id="inquiry-form">
            {submitted && (
                <div className="inquiry-form__success">
                    ✅ Thank you! Your inquiry has been received. Our trade team will contact you within 24 hours.
                </div>
            )}
            <div className="inquiry-form__grid">
                <div className="form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Your company name" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactName">Contact Person *</label>
                    <input type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required placeholder="Full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Business Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required placeholder="Your country" />
                </div>
                <div className="form-group">
                    <label htmlFor="productRequired">Product Required *</label>
                    <select id="productRequired" name="productRequired" value={formData.productRequired} onChange={handleChange} required>
                        <option value="">Select product category</option>
                        <option value="Food Grains">Food Grains (Rice, Wheat, Maize, Millets)</option>
                        <option value="Pulses">Pulses (Tur, Chana, Moong, Urad)</option>
                        <option value="Spices">Spices (Turmeric, Chilli, Coriander, Cumin)</option>
                        <option value="Oilseeds">Oilseeds (Soybean, Groundnut, Mustard)</option>
                        <option value="Fresh Produce">Fresh Produce (Onion, Fruits, Vegetables)</option>
                        <option value="Multiple">Multiple Commodities</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 100 MT per month" />
                </div>
                <div className="form-group">
                    <label htmlFor="certifications">Certification Requirements</label>
                    <input type="text" id="certifications" name="certifications" value={formData.certifications} onChange={handleChange} placeholder="e.g., FSSAI, ISO, Organic" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any specific requirements, preferred packaging, delivery terms..." />
            </div>

            <div className="form-group form-group--checkbox" style={{ gridColumn: '1 / -1' }}>
                <label className="checkbox-label" style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.85rem' }}>
                    <input
                        type="checkbox"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '4px' }}
                    />
                    <span>
                        I agree to the <a href="/privacy-policy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a> and consent to having my data collected to process this inquiry. *
                    </span>
                </label>
            </div>

            <button type="submit" className="btn btn--primary inquiry-form__submit">
                Submit Trade Inquiry →
            </button>
        </form>
    );
}
