const express = require('express');
const router = express.Router();
const { getProducts, getAdminProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { productSchema } = require('../models/schemas');

// Public routes
router.get('/', getProducts);

// Admin routes (Protect with auth middleware in production)
router.get('/admin', getAdminProducts);
router.post('/', productSchema, createProduct);
router.put('/:id', productSchema, updateProduct); // Could add schema validation here too for updates
router.delete('/:id', deleteProduct);

module.exports = router;
