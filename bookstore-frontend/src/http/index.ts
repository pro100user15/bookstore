import axios from 'axios';

export const BASE_URL = `http://localhost:8080`;

const $api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

$api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        config.headers!['Authorization'] = 'Bearer ' + token;
        return config;
    }
);

/*$api.interceptors.response.use(

);*/

export default $api;