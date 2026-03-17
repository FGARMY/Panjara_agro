require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const inquiryRoutes = require('./routes/inquiryRoutes');
const quotationRoutes = require('./routes/quotationRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://panjara-agro.vercel.app']
}));
app.use(express.json());

// Basic Rate Limiting to prevent spam
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	message: 'Too many requests from this IP, please try again after 15 minutes',
	standardHeaders: true,
	legacyHeaders: false,
});
app.use('/api/', apiLimiter);


// Routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/quotations', quotationRoutes);
app.use('/api/products', productRoutes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
