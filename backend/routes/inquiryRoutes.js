const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries } = require('../controllers/inquiryController');
const { inquirySchema } = require('../models/schemas');

router.post('/', inquirySchema, createInquiry);
router.get('/', getInquiries); // Protect this route with auth middleware in production

module.exports = router;
