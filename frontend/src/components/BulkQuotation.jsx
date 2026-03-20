import { useState } from 'react';
import products from '../data/products.json';
import { submitQuotation } from '../services/api';
import './BulkQuotation.css';

export default function BulkQuotation() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        productName: '',
        quantity: '',
        message: ''
    });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // In a real scenario, we would use FormData for file upload
            // For now, we follow the existing API pattern
            const payload = {
                ...formData,
                attachedFileName: file ? file.name : null
            };

            await submitQuotation(payload);

            setStatus({
                type: 'success',
                message: 'Your quotation request has been submitted. We will contact you shortly.'
            });
            setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phoneNumber: '',
                productName: '',
                quantity: '',
                message: ''
            });
            setFile(null);
            
            // Clear success message after some time
            setTimeout(() => setStatus({ type: '', message: '' }), 8000);
        } catch (err) {
            console.error('Submission error:', err);
            setStatus({
                type: 'error',
                message: err.error || 'Failed to submit quotation request. Please check your connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bulk-quotation" id="bulk-quotation">
            <div className="container">
                <div className="bulk-quotation__card">
                    <div className="bulk-quotation__header">
                        <h2 className="bulk-quotation__title">Request Bulk Quotation</h2>
                        <p className="bulk-quotation__subtitle">
                            Get the best prices for your bulk orders directly from us.
                        </p>
                    </div>

                    <form className="bulk-quotation__form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyName">Company Name *</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">🏢</span>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your company name"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">📧</span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your work email"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number *</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">📞</span>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        placeholder="Include country code"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="productName">Product Name *</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">📦</span>
                                    <select
                                        id="productName"
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a product</option>
                                        {products.map(p => (
                                            <option key={p.id} value={p.name}>{p.name}</option>
                                        ))}
                                        <option value="Custom Requirement">Custom Requirement / Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantity">Quantity Required *</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">⚖️</span>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. 500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message / Requirements</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Details about quality, packaging, or shipping terms..."
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">Upload File (Optional)</label>
                            <div className="file-upload">
                                <input
                                    type="file"
                                    id="file"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
                                />
                                <div className="file-upload__label">
                                    <span className="file-upload__icon">📁</span>
                                    {file ? (
                                        <span className="file-upload__name">{file.name}</span>
                                    ) : (
                                        <span>Click to upload specs or documents</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {status.message && (
                            <div className={`form-status form-status--${status.type}`}>
                                {status.type === 'success' ? '✅ ' : '❌ '}
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`btn btn--gold btn--full btn--loading-${loading}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loader-dots">Submitting<span>.</span><span>.</span><span>.</span></span>
                            ) : (
                                'Submit Quotation Request'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
