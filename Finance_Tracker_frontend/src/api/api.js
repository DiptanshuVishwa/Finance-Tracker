import axios from 'axios';

const BASE_URL = "http://10.21.22.229:5000/api";


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
