import { useState } from 'react';
import products from '../data/products.json';
import './RFQForm.css';

export default function RFQForm() {
    const [formData, setFormData] = useState({
        buyerName: '',
        company: '',
        country: '',
        product: '',
        quantity: '',
        packagingPreference: '',
        deliveryTimeline: '',
        destinationPort: '',
        message: '',
        gdprConsent: false
    });
    const [fileName, setFileName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            // Import api function dynamically or add it at the top
            const { submitQuotation } = await import('../services/api');
            // Mock file attachment URL for now since file upload requires storage bucket integration
            const payload = { ...formData, attachedFileUrl: fileName ? `https://dummy/url/${fileName}` : null };
            
            await submitQuotation(payload);
            
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 6000);
            setFormData({
                buyerName: '', company: '', country: '', product: '',
                quantity: '', packagingPreference: '', deliveryTimeline: '',
                destinationPort: '', message: '', gdprConsent: false
            });
            setFileName('');
        } catch (err) {
            console.error('Submission failed:', err);
            setErrorMsg(err.error || 'Failed to submit RFQ. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="rfq-form" onSubmit={handleSubmit} id="rfq-form">
            {submitted && (
                <div className="rfq-form__success">
                    ✅ Your Request for Quotation has been received! Our export team will respond within 24 business hours with a detailed proposal.
                </div>
            )}
            {errorMsg && (
                <div className="rfq-form__error" style={{ color: 'red', marginBottom: '1rem', padding: '1rem', background: '#ffebee', borderRadius: '4px' }}>
                    ❌ {errorMsg}
                </div>
            )}

            <div className="rfq-form__grid">
                <div className="form-group">
                    <label htmlFor="rfq-buyerName">Buyer Name *</label>
                    <input type="text" id="rfq-buyerName" name="buyerName" value={formData.buyerName} onChange={handleChange} required placeholder="Your full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-company">Company *</label>
                    <input type="text" id="rfq-company" name="company" value={formData.company} onChange={handleChange} required placeholder="Company name" />
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-country">Country *</label>
                    <input type="text" id="rfq-country" name="country" value={formData.country} onChange={handleChange} required placeholder="Country of destination" />
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-product">Product Interested In *</label>
                    <select id="rfq-product" name="product" value={formData.product} onChange={handleChange} required>
                        <option value="">Select a product</option>
                        {products.map(p => (
                            <option key={p.id} value={p.name}>{p.name} ({p.category})</option>
                        ))}
                        <option value="Multiple Products">Multiple Products</option>
                        <option value="Custom Requirement">Custom Requirement</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-quantity">Quantity Required *</label>
                    <input type="text" id="rfq-quantity" name="quantity" value={formData.quantity} onChange={handleChange} required placeholder="e.g., 200 MT per month" />
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-packagingPreference">Packaging Preference</label>
                    <select id="rfq-packagingPreference" name="packagingPreference" value={formData.packagingPreference} onChange={handleChange}>
                        <option value="">Select packaging</option>
                        <option value="25 kg PP Bag">25 kg PP Bag</option>
                        <option value="50 kg PP Bag">50 kg PP Bag</option>
                        <option value="Jumbo Bag (1 MT)">Jumbo Bag (1 MT)</option>
                        <option value="Custom Branding">Custom Branding / Private Label</option>
                        <option value="Retail Packing">Retail Ready Packing</option>
                        <option value="Other">Other (specify in message)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-deliveryTimeline">Delivery Timeline</label>
                    <select id="rfq-deliveryTimeline" name="deliveryTimeline" value={formData.deliveryTimeline} onChange={handleChange}>
                        <option value="">Select timeline</option>
                        <option value="Immediate (1-2 weeks)">Immediate (1–2 weeks)</option>
                        <option value="Short Term (2-4 weeks)">Short Term (2–4 weeks)</option>
                        <option value="1-2 Months">1–2 Months</option>
                        <option value="Quarterly Contract">Quarterly Contract</option>
                        <option value="Annual Contract">Annual Contract</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rfq-destinationPort">Destination Port</label>
                    <input type="text" id="rfq-destinationPort" name="destinationPort" value={formData.destinationPort} onChange={handleChange} placeholder="e.g., Jebel Ali, Dubai" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="rfq-message">Detailed Specifications / Message</label>
                <textarea id="rfq-message" name="message" value={formData.message} onChange={handleChange} placeholder="Quality parameters, certifications needed, shipping terms (FOB/CIF/CNF), special requirements..." rows={5} />
            </div>

            <div className="form-group rfq-form__upload">
                <label htmlFor="rfq-file">Upload Requirement Sheet (optional)</label>
                <div className="rfq-form__upload-area">
                    <input type="file" id="rfq-file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png" onChange={handleFileChange} />
                    <div className="rfq-form__upload-label">
                        <span className="rfq-form__upload-icon">📎</span>
                        {fileName ? (
                            <span className="rfq-form__upload-name">{fileName}</span>
                        ) : (
                            <span>Drop your file here or <strong>click to browse</strong><br /><small>PDF, DOC, XLS, JPG, PNG (max 10MB)</small></span>
                        )}
                    </div>
                </div>
            </div>

            <div className="form-group form-group--checkbox" style={{ marginTop: '20px' }}>
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

            <button type="submit" className="btn btn--primary rfq-form__submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Request for Quotation →'}
            </button>
        </form>
    );
}
