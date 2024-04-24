import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SuccessModal from '../components/SuccessModal';
import ErrorModal from '../components/ErrorModal';
import { useAuth } from '../contexts/Auth/AuthProvider';
import {
    UserIcon, PencilIcon, IdentificationIcon, ArrowUpTrayIcon,
    EnvelopeIcon, PhoneIcon, LockClosedIcon
} from '@heroicons/react/24/outline';
import {
    requirementApm, requirementApp, requirementCi, requirementContra,
    requirementEmail, requirementNombreUser, requirementTel, requirementUser
} from '../hooks/RegisterHook';
import ErrorLabel from '../components/ErrorLabel';
import MapModal from '../components/modales/MapModal';

function RegisterUser() {
    const { register, handleSubmit, setError, clearErrors,
        formState: { errors },
        watch
    } = useForm();
    const [mensaje, setMensaje] = useState('');

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [position, setPosition] = useState(null)

    const { signup } = useAuth();
    const navegate = useNavigate();


    const onSubmit = handleSubmit(async (data) => {

        data['direccion'] = position;

        // Crear un objeto FormData para enviar los datos, incluyendo la imagen
        const formData = new FormData();
        formData.append("image", data.foto_imagen[0]);
        formData.append("nombre_usuario", data.nombre_usuario);
        formData.append("nombres", data.nombres);
        formData.append("apellido_paterno", data.apellido_paterno);
        formData.append("apellido_materno", data.apellido_materno);
        formData.append("carnet_identificacion", data.carnet_identificacion);
        formData.append("email", data.email);
        formData.append("telefono", data.telefono);
        formData.append("contrasena", data.contrasena);
        formData.append("confirmar_contra", data.confirmar_contra);
        formData.append("lat", data.direccion.lat);
        formData.append("log", data.direccion.lng);

        //console.log(formData)
        try {
            const response = await signup(formData)
            setMensaje(response.data.mensaje);
            setShowSuccessModal(true);
            if (response.data.user.rol === 'ADMINISTRADOR') navegate('/');
            else navegate('/Vistacliente');

        } catch (error) {
            console.log(error)
            setMensaje(error.response.data.mensaje);
            setShowErrorModal(true);
        }
    });

    useEffect(() => {
        if (!position) {
            setError("direccion", {
                type: "required",
                message: "La posición en el mapa es requerida"
            });
        } else {
            clearErrors("direccion");
        }
    }, [position, setError, clearErrors])


    return (

        <div className="bg-gradient-to-b from-blue-950 to-slate-500 min-h-screen  flex items-center justify-center">
            <Link to="/" relative="path">
                <button
                    className="absolute top-2 right-2 px-4 py-2 rounded-lg bg-white text-blue-950 font-bold hover:bg-blue-800 hover:text-white">
                    VOLVER
                </button>
            </Link>
            <div className=' py-16'>
                <div className="rounded-xl bg-blue-950 bg-opacity-50 px-16 py-4 shadow-lg backdrop-blur-md max-sm:px-8 border-2 border-white">

                    <div className="bg-blue-100 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#172554" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                    <form className="p-12 md:p-24 space-y-4" onSubmit={onSubmit}>
                        <p className="mb-3 text-2xl text-center font-bold text-white">Registrate</p>
                        <div className=" grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                            <div className="space-y-4">
                                <div className="w-full rounded-lg  bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400 flex items-center ">
                                    <UserIcon className='w-6 h-6  text-gray-500' />

                                    <input type="text" placeholder="Nombre de usuario" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" autoComplete="username"
                                        {...register('nombre_usuario', requirementUser)} />
                                </div>
                                <ErrorLabel error={errors.nombre_usuario}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400 flex items-center">
                                    <PencilIcon className='w-6 h-6  text-gray-500' />

                                    <input type="text" placeholder="Nombres" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                        {...register('nombres', requirementNombreUser)} />
                                </div>
                                <ErrorLabel error={errors.nombres}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400 flex items-center">
                                    <PencilIcon className='w-6 h-6  text-gray-500' />
                                    <input type="text" placeholder="Apellido Paterno" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                        {...register('apellido_paterno', requirementApp)} />
                                </div>
                                <ErrorLabel error={errors.apellido_paterno}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400 flex items-center">
                                    <PencilIcon className='w-6 h-6  text-gray-500' />
                                    <input type="text" placeholder="Apellido Materno" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                        {...register('apellido_materno', requirementApm)} />
                                </div>
                                <ErrorLabel error={errors.apellido_materno}></ErrorLabel>

                                <label forhtml="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer">
                                    <ArrowUpTrayIcon className='w-6 h-6  text-gray-500' />
                                    <h2 className="mx-3 text-gray-400 truncate max-w-32">{watch("foto_imagen") && watch("foto_imagen")[0] && watch("foto_imagen")[0].name ? watch("foto_imagen")[0].name : 'Foto de perfil'}</h2>
                                    <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg, image/jpg" onChange={console.log()}
                                        {...register('foto_imagen', { required: true })} />
                                </label>
                                {errors.foto_imagen && <span className=' text-red-300 text-sm italic'>Foto de perfil es requerido</span>}
                            </div>
                            <div className="space-y-4">
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400  flex items-center ">
                                    <IdentificationIcon className='w-6 h-6  text-gray-500' />
                                    <input type="number" placeholder="Carnet de identificación" className=" my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                        {...register('carnet_identificacion', requirementCi)} />
                                </div>
                                <ErrorLabel error={errors.carnet_identificacion}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400  flex items-center">
                                    <EnvelopeIcon className='w-6 h-6  text-gray-500' />
                                    <input type="email" id="email" placeholder="Correo" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                        {...register('email', requirementEmail)} />
                                </div>
                                <ErrorLabel error={errors.email}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400  flex items-center">
                                    <PhoneIcon className='w-6 h-6  text-gray-500' />

                                    <input type="number" placeholder="Teléfono" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                        {...register('telefono', requirementTel)} />
                                </div>
                                <ErrorLabel error={errors.telefono}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400  flex items-center">
                                    <LockClosedIcon className='w-6 h-6  text-gray-500' />

                                    <input type="password" placeholder="Contraseña" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none " autoComplete="new-password"
                                        {...register('contrasena', requirementContra)} />
                                </div>
                                <ErrorLabel error={errors.contrasena}></ErrorLabel>
                                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400  flex items-center">
                                    <LockClosedIcon className='w-6 h-6  text-gray-500' />
                                    <input type="password" placeholder="Confirmar contraseña" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" autoComplete='password'
                                        {...register('confirmar_contra', {
                                            required: {
                                                value: true, message: "Confirmar la contraseña es requerida"
                                            },
                                            validate: (value) => value == watch
                                                ("contrasena") || "Las contraseñas no coinciden"
                                        })} />
                                </div>
                                <ErrorLabel error={errors.confirmar_contra}></ErrorLabel>
                            </div>
                        </div>

                        <div className=' min-w-full items-center border-2 border-white rounded-lg text-center' >
                            <h1 className=' text-white '>Haga click en el mapa para capturar su ubicación o mueva el pin a su ubicacion deseada:</h1>
                            <MapModal position={position} setPosition={setPosition} />
                            <ErrorLabel error={errors.direccion}></ErrorLabel>
                        </div>
                        <button className="rounded-lg bg-blue-950  p-2 md:p-4  uppercase w-full font-bold text-white hover:bg-white hover:text-blue-950 hover:font-bold" type='submit'>
                            CREAR CUENTA
                        </button>
                        {/**<pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                    </form>
                </div>
            </div>


            {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)} mensaje={mensaje} />}
            {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} mensaje={mensaje} />}


        </div>
    );
}

export default RegisterUser;
