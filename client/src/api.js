import axios from 'axios';
const api = axios.create({
    baseURL: '',
    withCredentials: true, // Important for sessions
});

export default api;
