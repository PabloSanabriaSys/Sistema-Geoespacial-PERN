import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js';
import UserModel from '../models/user.model.js';
import DireccionModel from '../models/direccion.model.js';
import { DOMAIN } from '../config.js';

export const register = async (req, res) => {
  const { nombre_usuario, contrasena, lat, log } = req.body
  console.log(req.body)
  try {
    // Verificar si el usuario ya existe en la base de datos
    const usuarioExistente = await UserModel.getUserByUserName(nombre_usuario);
    if (usuarioExistente) return res.status(400).json({ mensaje: 'El nombre de usuario ya está en uso' });

    // Si el usuario no existe, encriptar la contraseña e insertar
    const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);
    req.body['contrasena'] = contrasenaEncriptada;
    const nuevoUsuario = await UserModel.createUser(req.body);
    await DireccionModel.createDireccion({ lat, log, userId: nuevoUsuario.id })

    // Creamos el Token
    const token = await createAccessToken({ id: nuevoUsuario.id });

    res.cookie('token', token, { maxAge: 60 * 60 * 24 * 1000, domain: DOMAIN }); // 1 dia
    return res.status(201).json({ mensaje: 'Usuario registrado correctamente', user: nuevoUsuario });

  } catch (error) {
    console.error('Error al intentar registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};


export const login = async (req, res) => {
  const { nombre_usuario, contrasena } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const usuario = await UserModel.getUserByUserName(nombre_usuario);
    if (!usuario) return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });

    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!contrasenaValida) return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });

    const token = await createAccessToken({ id: usuario.id });
    res.cookie('token', token, { maxAge: 60 * 60 * 24 * 1000, domain: DOMAIN }); // 1 dia
    res.status(200).json({ mensaje: 'Inicio de sesión exitoso', user: usuario });

  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};


export const logout = async (req, res) => {
  res.cookie('token', '', { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const { id } = req.user;

  try {
    const usuario = await UserModel.getUserById(id);
    if (!usuario) return res.status(401).json({ mensaje: 'Usuario no encontrado' });

    res.json(usuario)
  } catch (error) {
    console.error('Error al entrar al perfil:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
}


