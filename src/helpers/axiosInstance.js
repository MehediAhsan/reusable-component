// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // replace with your API base URL
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here, such as adding headers
    // For example, you can add an authorization header:
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // Handle errors during the request
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // Handle errors during the response
    return Promise.reject(error);
  }
);

export default api;
