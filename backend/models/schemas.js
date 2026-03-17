const { body } = require('express-validator');

const inquirySchema = [
    body('companyName').trim().notEmpty().withMessage('Company Name is required'),
    body('contactName').trim().notEmpty().withMessage('Contact Name is required'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('country').trim().notEmpty().withMessage('Country is required'),
    body('productRequired').trim().notEmpty().withMessage('Product is required'),
    body('gdprConsent').isBoolean().equals('true').withMessage('Privacy policy consent is required')
];

const quotationSchema = [
    body('buyerName').trim().notEmpty().withMessage('Buyer Name is required'),
    body('company').trim().notEmpty().withMessage('Company is required'),
    body('country').trim().notEmpty().withMessage('Country is required'),
    body('product').trim().notEmpty().withMessage('Product is required'),
    body('quantity').trim().notEmpty().withMessage('Quantity is required'),
    body('gdprConsent').isBoolean().equals('true').withMessage('Privacy policy consent is required')
];

const productSchema = [
    body('name').trim().notEmpty().withMessage('Product Name is required'),
    body('category').trim().notEmpty().withMessage('Category is required')
];

module.exports = {
    inquirySchema,
    quotationSchema,
    productSchema
};
