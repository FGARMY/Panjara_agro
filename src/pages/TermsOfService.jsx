import SEO from '../components/SEO';

export default function TermsOfService() {
    return (
        <>
            <SEO
                title="Terms of Service"
                description="Terms of Service and Conditions of use for Panjara Agro Farmers Producer Company Limited."
                path="/terms-of-service"
            />
            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '800px', marginTop: '60px' }}>
                    <div className="section-heading">
                        <span className="section-heading__label">Legal</span>
                        <h1 className="section-heading__title">Terms of Service</h1>
                        <div className="section-heading__bar" style={{ margin: '0 0 40px 0' }} />
                    </div>

                    <div className="prose fade-in">
                        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

                        <p>Welcome to Panjara Agro Farmers Producer Company Limited. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>By accessing this website, you agree to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                        <h3>2. Use License</h3>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Panjara Agro's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul>
                            <li>Modify or copy the materials.</li>
                            <li>Use the materials for any commercial purpose, or for any public display.</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>

                        <h3>3. B2B Trade & Quotations</h3>
                        <p>The product descriptions, Minimum Order Quantities (MOQs), and pricing details listed on this website are indicative and intended for B2B trade purposes. Actual trade agreements, final pricing, shipping terms (FOB, CIF, etc.), and quality parameters will be formalized via official Proforma Invoices and trade contracts signed by both parties.</p>

                        <h3>4. Disclaimer</h3>
                        <p>The materials on Panjara Agro's website are provided "as is". Panjara Agro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                        <h3>5. Limitations</h3>
                        <p>In no event shall Panjara Agro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Panjara Agro's website, even if Panjara Agro or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

                        <h3>6. Accuracy of Materials</h3>
                        <p>The materials appearing on Panjara Agro's website could include technical, typographical, or photographic errors. Panjara Agro does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.</p>

                        <h3>7. Governing Law</h3>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of India, specifically within the jurisdiction of Maharashtra, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                        
                        <h3>8. Contact Us</h3>
                        <p>If you have any questions regarding these Terms of Service, please contact us at panjaraagro@gmail.com.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
