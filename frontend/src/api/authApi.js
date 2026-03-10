import axiosInstance from './axios.js';

export const signupApi = (data) => axiosInstance.post('/auth/signup', data);

export const loginApi = (data) => axiosInstance.post('/auth/login', data);

export const getMeApi = () => axiosInstance.get('/auth/me');
