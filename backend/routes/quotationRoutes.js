const express = require('express');
const router = express.Router();
const { createQuotation, getQuotations } = require('../controllers/quotationController');
const { quotationSchema } = require('../models/schemas');

router.post('/', quotationSchema, createQuotation);
router.get('/', getQuotations); // Protect this route with auth middleware in production

module.exports = router;
