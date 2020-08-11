import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.henriquelopes.tk:3333'
});

export default api;