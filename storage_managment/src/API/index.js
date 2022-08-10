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
            const response = await API.get('/storekeepers/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return API.request(originalRequest);
        } catch (e) {
            console.log(e);
        }
    }
    return Promise.reject(error);
    //throw error;
})

export const signIn = (formData) => API.post('/storekeepers/login', formData)
export const logout = () => API.post('/storekeepers/logout', {withCredentials: true});

export const getOrders = (page, status) => API.get(`/orders?page=${page}&orderStatus=${status}`);
export const getOrderById = (id) => API.get(`/orders/${id}/storekeeper`);
export const updateOrderById = (updatedOrder, id) => API.patch(`/orders/${id}/storekeeper`, updatedOrder);