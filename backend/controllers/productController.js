const supabase = require('../config/supabase');
const { validationResult } = require('express-validator');

// @desc    Get all active products
// @route   GET /api/products
exports.getProducts = async (req, res) => {
    try {
        // First try with the is_active filter
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('is_active', true)
            .order('category', { ascending: true })
            .order('name', { ascending: true });

        if (error) {
            // If the error is specifically about the missing column, fallback to fetching all
            if (error.code === '42703') {
                console.warn('is_active column missing, falling back to all products');
                const fallback = await supabase
                    .from('products')
                    .select('*')
                    .order('category', { ascending: true })
                    .order('name', { ascending: true });
                
                if (fallback.error) throw fallback.error;
                return res.status(200).json({ success: true, data: fallback.data, note: 'Schema migration required' });
            }
            throw error;
        }

        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, error: 'Server error while fetching products' });
    }
};

// @desc    Get all products (including inactive - Admin)
// @route   GET /api/products/admin
exports.getAdminProducts = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, error: 'Server error while fetching products' });
    }
};

// @desc    Create a new product (Admin)
// @route   POST /api/products
exports.createProduct = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const {
            name, category, origin, quality_standards,
            packaging, export_capacity, description, image_url, is_active
        } = req.body;

        const { data, error } = await supabase
            .from('products')
            .insert([{
                name,
                category,
                origin,
                quality_standards,
                packaging,
                export_capacity,
                description,
                image_url,
                is_active: is_active !== undefined ? is_active : true
            }])
            .select();

        if (error) throw error;

        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, error: 'Server error while creating product' });
    }
};

// @desc    Update a product (Admin)
// @route   PUT /api/products/:id
exports.updateProduct = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const updates = req.body;

        const { data, error } = await supabase
            .from('products')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;

        if (data.length === 0) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, error: 'Server error while updating product' });
    }
};

// @desc    Delete a product (Admin)
// @route   DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('products')
            .delete()
            .eq('id', id)
            .select();

        if (error) throw error;

        if (data.length === 0) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, error: 'Server error while deleting product' });
    }
};
