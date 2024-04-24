import axios from './axios';

export const getClients = async() => await axios.get('/clients/directions');