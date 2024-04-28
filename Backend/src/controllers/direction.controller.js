import direccionModel from '../models/direccion.model.js';
import UserModel from '../models/user.model.js';

export const getMunicipios = async (req, res) => {
    try {
        const municipio = await direccionModel.getMunicipios();
        res.json(municipio)
    } catch (error) {
        console.error('Error al entrar al perfil:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getUsersMunicipios = async (req, res) => {
    try {
        const municipioName = req.params.municipioName;
        const usuarios = await UserModel.getUsersByDirection('municipal','municipio',municipioName);
        const municipio = await direccionModel.getMunicipio(municipioName);

        res.json({municipio,usuarios})
    } catch (error) {
        console.error('Error en usuarios en municipio:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getCantones = async (req, res) => {
    try {
        const cantones = await direccionModel.getCantones();
        res.json(cantones)
    } catch (error) {
        console.error('Error en usuarios en canton:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getCantonUser = async (req, res) => {
    try {
        const cantonName = req.params.cantonName;
        const usuarios = await UserModel.getUsersByDirection('cantones_geo','canton',cantonName);
        const canton = await direccionModel.getCanton(cantonName);

        res.json({canton,usuarios})
    } catch (error) {
        console.error('Error en usuarios en canton:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}



export const getOTBs = async (req, res) => {
    try {
        const OTBs = await direccionModel.getOTBs();
        res.json(OTBs)
    } catch (error) {
        console.error('Error en usuarios en OTBs:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getOTB = async (req, res) => {
    try {
        const OTBName = req.params.OTBName;
        const usuarios = await UserModel.getUsersByDirection('manzanos2','gid',OTBName);
        const OTB = await direccionModel.getOTB(OTBName);

        res.json({OTB,usuarios})
    } catch (error) {
        console.error('Error en usuarios en OTB:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getManzanos = async (req, res) => {
    try {
        const manzanos = await direccionModel.getManzanos();
        res.json(manzanos)
    } catch (error) {
        console.error('Error en usuarios en manzanos:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getManzano = async (req, res) => {
    try {
        const manzanoName = req.params.manzanoName;
        const usuarios = await UserModel.getUsersByDirection('manzanos2','gid',manzanoName);
        const manzano = await direccionModel.getManzano(manzanoName);

        res.json({manzano,usuarios})
    } catch (error) {
        console.error('Error en usuarios en manzano:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}