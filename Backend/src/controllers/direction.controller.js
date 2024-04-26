import direccionModel from '../models/direccion.model.js';

export const getMunicipios = async (req, res) => {
    try {
        const municipio = await direccionModel.getMunicipios();

        res.json(municipio)
    } catch (error) {
        console.error('Error al entrar al perfil:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}