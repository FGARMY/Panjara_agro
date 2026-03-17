const supabase = require('../config/supabase');
const { validationResult } = require('express-validator');

// @desc    Submit a new inquiry
// @route   POST /api/inquiries
exports.createInquiry = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const {
            companyName, contactName, email, phone, country,
            productRequired, quantity, certifications, message
        } = req.body;

        const { data, error } = await supabase
            .from('inquiries')
            .insert([{
                company_name: companyName,
                contact_name: contactName,
                email,
                phone,
                country,
                product_required: productRequired,
                quantity,
                certifications,
                message
            }])
            .select();

        if (error) throw error;

        res.status(201).json({
            success: true,
            message: 'Inquiry submitted successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error creating inquiry:', error);
        res.status(500).json({ success: false, error: 'Server error while submitting inquiry' });
    }
};

// @desc    Get all inquiries (Admin)
// @route   GET /api/inquiries
exports.getInquiries = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        res.status(500).json({ success: false, error: 'Server error while fetching inquiries' });
    }
};
