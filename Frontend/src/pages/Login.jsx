import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorModal from '../components/ErrorModal'; // Asegúrate de que la ruta sea correcta.
import SuccessModal from '../components/SuccessModal';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/Auth/AuthProvider';
import ErrorLabel from '../components/ErrorLabel';
export default function LoginForm() {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const [mensaje, setMensaje] = useState('');

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navegate = useNavigate()

  const { signin } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await signin(data);
      setMensaje(response.data.mensaje);
      setShowSuccessModal(true);
      if (response.data.user.rol === 'ADMINISTRADOR') navegate('/');
      else navegate('/Vistacliente');
    } catch (error) {
      setMensaje(error.response.data.mensaje);
      setShowErrorModal(true);
    }
  });

  const API_URL = import.meta.env.VITE_URL_API;

  console.log(`API URL: ${API_URL}`);


  return (
    <div className="bg-gradient-to-b from-blue-950 to-slate-500 h-screen overflow-hidden flex items-center justify-center">
      <div className="rounded-xl bg-blue-950 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md  max-sm:px-8">
        <div className="bg-blue-100 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#172554" className="h-16 w-16">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>
        </div>
        <form className="p-12 md:p-24 space-y-4" onSubmit={onSubmit}>
          <div className=" flex items-center text-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#172554" className="absolute ml-1 " width="40">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>

            <input type="text" id="username" name="username" className=" rounded-lg bg-gradient-to-r from-blue-100 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" autoComplete="username"
              {...register('nombre_usuario', {
                required: {
                  value: true, message: 'El usuario es requerido'
                }
              })} />

          </div>
          <ErrorLabel error={errors.nombre_usuario}></ErrorLabel>
          <div className="flex items-center text-lg ">
            <svg className="absolute ml-1" viewBox="0 0 24 24" width="35" fill="#172554">
              <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </svg>
            <input type="password" id="password" name='password' className="rounded-lg bg-gradient-to-r from-blue-100 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" autoComplete="current-password"
              {...register('contrasena', {
                required: {
                  value: true, message: 'La contraseña es requerida'
                }
              })} />
          </div>
          <ErrorLabel error={errors.contrasena}></ErrorLabel>
          <button type="submit" className=" rounded-lg bg-blue-950 font-medium p-2 md:p-4 text-white uppercase w-full hover:bg-white hover:text-blue-950 hover:font-bold">Iniciar Sesion</button>

          <div className="">
            <Link to="/register" relative="path">
              <button className="mt-2 text-white  rounded-lg font-medium  hover:text-blue-300">
                ¿No tienes una cuenta? Registrate
              </button>
            </Link>
          </div>
        </form>


      </div>

      {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)} mensaje={mensaje} />}
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} mensaje={mensaje} />}


    </div>
  );
}

