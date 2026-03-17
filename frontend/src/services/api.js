import axios from 'axios';

// Update baseURL for production deployment later (e.g. your Railway/Render backend URL)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const submitInquiry = async (inquiryData) => {
    try {
        const response = await api.post('/inquiries', inquiryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, error: 'Network Error' };
    }
};

export const submitQuotation = async (quotationData) => {
    try {
        const response = await api.post('/quotations', quotationData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, error: 'Network Error' };
    }
};

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, error: 'Network Error' };
    }
};

export default api;
