import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.3.152.14:3333'
});

export default api;