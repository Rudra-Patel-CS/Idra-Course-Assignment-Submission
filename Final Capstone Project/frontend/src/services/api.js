import axios from 'axios';

// Base API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const getHealth = async () => {
  const response = await apiClient.get('/health');
  return response.data;
};

export const getModelInfo = async () => {
  const response = await apiClient.get('/model-info');
  return response.data;
};

export const predictPurchase = async (predictionData) => {
  const response = await apiClient.post('/predict', predictionData);
  return response.data;
};

export const getAnalyticsOverview = async () => {
  const response = await apiClient.get('/analytics/overview');
  return response.data;
};

export const getAnalyticsCharts = async () => {
  const response = await apiClient.get('/analytics/charts');
  return response.data;
};

export const getModelPerformance = async () => {
  const response = await apiClient.get('/analytics/model-performance');
  return response.data;
};

export default apiClient;
