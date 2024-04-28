import axios from './axios';

export const getClients = async () => await axios.get('/clients/directions');

export const getMunicipios = async () => await axios.get('/direction/municipio');
export const getMunicipioUsers = async (municipioName) => axios.get(`/direction/municipio/${municipioName}`);

export const getCantones = async () => await axios.get('/direction/canton');
export const getCantonUsers = async (cantonName) => axios.get(`/direction/canton/${cantonName}`);

export const getOTBs = async () => await axios.get('/direction/OTB');
export const getOTB = async (OTBName) => axios.get(`/direction/OTB/${OTBName}`);


export const getManzanos = async () => await axios.get('/direction/manzano');
export const getManznoUser = async (manzanoName) => axios.get(`/direction/manzano/${manzanoName}`);