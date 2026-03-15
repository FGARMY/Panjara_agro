import SEO from '../components/SEO';

export default function PrivacyPolicy() {
    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Our Privacy Policy outlines how Panjara Agro Farmers Producer Company Limited collects, uses, and protects your data."
                path="/privacy-policy"
            />
            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '800px', marginTop: '60px' }}>
                    <div className="section-heading">
                        <span className="section-heading__label">Legal</span>
                        <h1 className="section-heading__title">Privacy Policy</h1>
                        <div className="section-heading__bar" style={{ margin: '0 0 40px 0' }} />
                    </div>

                    <div className="prose fade-in">
                        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

                        <p>Panjara Agro Farmers Producer Company Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Panjara Agro.</p>

                        <h3>1. Information We Collect</h3>
                        <p>We may collect personal information that you provide to us directly when you:</p>
                        <ul>
                            <li>Submit inquiries or Request for Quotations (RFQs) via our website.</li>
                            <li>Contact us via phone, email, or WhatsApp.</li>
                            <li>Subscribe to our newsletters or updates.</li>
                        </ul>
                        <p>The information we collect may include your name, company name, email address, phone number, import/export requirements, and any other details you choose to provide.</p>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use the collected information for the following purposes:</p>
                        <ul>
                            <li>To process and respond to your trade inquiries and RFQs.</li>
                            <li>To communicate with you regarding our products, services, and compliance documents.</li>
                            <li>To improve our website, customer service, and trade platforms.</li>
                            <li>To comply with aggregate reporting, legal, and regulatory requirements (e.g., APEDA, FSSAI).</li>
                        </ul>

                        <h3>3. Data Handling and Security</h3>
                        <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely and is only accessible by authorized personnel for the purpose of facilitating B2B agricultural trade. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>

                        <h3>4. GDPR Compliance & Your Rights</h3>
                        <p>If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you.</li>
                            <li>Request that we correct any inaccurate information.</li>
                            <li>Request the deletion of your personal data.</li>
                            <li>Withdraw your consent at any time where we relied on your consent to process your personal information.</li>
                        </ul>
                        <p>For any such requests, please contact us at panjaraagro@gmail.com.</p>

                        <h3>5. Cookies</h3>
                        <p>Our website uses "cookies" to enhance your experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent.</p>

                        <h3>6. Changes to This Privacy Policy</h3>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                        <h3>7. Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul>
                            <li>Email: panjaraagro@gmail.com</li>
                            <li>Phone: +91 7758866318</li>
                            <li>Address: Maharashtra, India</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
