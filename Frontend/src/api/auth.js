import axios from './axios';


export const registerRequest = async(user) => await axios.post('/register', user);

export const loginRequest = async(user) => await axios.post('/login', user);

export const profile = () =>  axios.get('/profile');

export const logout = () =>  axios.post('/logout');