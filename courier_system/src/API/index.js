import axios from 'axios';

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
            const response = await API.get('/couriers/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return API.request(originalRequest);
        } catch (e) {
            console.log(e);
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
            window.location.reload();
        }
    }
    return Promise.reject(error);
    //throw error;
})

export const signIn = (formData) => API.post('/couriers/login', formData)
export const logout = () => API.post('/couriers/logout', {withCredentials: true});

export const getOrders = (page, status) => API.get(`/orders/couriers/me?page=${page}&orderStatus=${status}`)
export const getOrderById = (id) => API.get(`/orders/${id}/couriers/me`)
export const updateOrderById = (updatedOrder, id) => API.patch(`/orders/${id}/couriers/me`, updatedOrder)