import axios from "axios";

const API = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5001'
});

API.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

API.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            console.log(window.location.href);
            const response = await API.get('/customers/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return API.request(originalRequest);
        } catch (e) {
            console.log(e);
        }
    }
    return Promise.reject(error);
    //throw error;
});

export const signUp = (formData) => API.post('/customers', formData);
export const signIn = (formData) => API.post('/customers/login', formData);
export const logout = () => API.post('/customers/logout', {withCredentials: true});
export const refresh = () => API.get('/customers/refresh', {withCredentials: true});

export const getItemById = (itemType, id) => API.get(`/${itemType}/${id}`);

export const sendOrder = (orderData) => API.post('/orders', orderData);

export const getDataForHomePage = () => API.get('/getinfo/homepage')