const supabase = require('../config/supabase');
const { validationResult } = require('express-validator');

// @desc    Submit a new quotation request (RFQ)
// @route   POST /api/quotations
exports.createQuotation = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const {
            buyerName, company, country, product, quantity,
            packagingPreference, deliveryTimeline, destinationPort, message
        } = req.body;

        const { data, error } = await supabase
            .from('quotations')
            .insert([{
                buyer_name: buyerName,
                company,
                country,
                product,
                quantity,
                packaging_preference: packagingPreference,
                delivery_timeline: deliveryTimeline,
                destination_port: destinationPort,
                message
            }])
            .select();

        if (error) throw error;

        res.status(201).json({
            success: true,
            message: 'Quotation request submitted successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error creating quotation:', error);
        res.status(500).json({ success: false, error: 'Server error while submitting quotation' });
    }
};

// @desc    Get all quotation requests (Admin)
// @route   GET /api/quotations
exports.getQuotations = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('quotations')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching quotations:', error);
        res.status(500).json({ success: false, error: 'Server error while fetching quotations' });
    }
};
