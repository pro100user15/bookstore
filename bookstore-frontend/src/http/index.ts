import axios from 'axios';

export const BASE_URL=`http://localhost:8080`;

const token = localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : '';

const $api =  axios.create({
   baseURL: BASE_URL,
   timeout: 5000,
   headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
   }
});

export default $api;