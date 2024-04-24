import axios from "axios";

export const URL_API = import.meta.env.VITE_URL_API || 'http://localhost:4000/api';

const instance = axios.create({
    baseURL: URL_API,
    withCredentials: true
});

export default instance;