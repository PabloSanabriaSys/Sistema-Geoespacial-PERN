import UserModel from '../models/user.model.js';
import path from 'path'
export const getAllUsers = async (req, res) => {
    try {
        const usuario = await UserModel.getUsersAll();
        if (!usuario) return res.status(401).json({ mensaje: 'Usuario no encontrado' });

        res.json(usuario)
    } catch (error) {
        console.error('Error al entrar al perfil:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}


export const getAllUsersDirections = async (req, res) => {
    try {
        const usuario = await UserModel.getUsersAll(true);
        if (!usuario) return res.status(401).json({ mensaje: 'Usuario no encontrado' });

        res.json(usuario)
    } catch (error) {
        console.error('Error al entrar al perfil:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}

// Endpoint para acceder a las imágenes subidas
export const getImage = (req, res) => {
    try {
        const imageName = req.params.imageName;
        res.sendFile(path.join(process.cwd(), 'public', imageName));
    } catch (error) {
        console.error('Error en la imagen:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }

};