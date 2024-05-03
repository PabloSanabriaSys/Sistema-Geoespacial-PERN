import { useAuth } from "../contexts/Auth/AuthProvider"
import PruebaToast from "../components/PruebaToast"
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { Avatar } from 'primereact/avatar';
import { URL_API } from '../api/axios';

export default function Setting() {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Puedes manejar el envío del formulario aquí
    };
    
    
    return (
        <div className=" bg-fixed bg-cover  bg-center h-screen   ">
           
            <div className='py-10'>
                <label > DATOS PERSONALES</label>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div>
                                <label className="block text-gray-700">Codigo</label>
                                <input {...register("id")} defaultValue={user.id} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" disabled />
                            </div>
                            <div>
                                <label className="block text-gray-700">Nombre de Usuario</label>
                                <input {...register("nombre_usuario")} defaultValue={user.nombre_usuario} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Nombres</label>
                                <input {...register("nombres")} defaultValue={user.nombres} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Apellido Paterno</label>
                                <input {...register("apellido_paterno")} defaultValue={user.apellido_paterno} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Apellido Materno</label>
                                <input {...register("apellido_materno")} defaultValue={user.apellido_materno} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="block text-gray-700">Numero de Carnet</label>
                                <input {...register("carnet_identificacion")} defaultValue={user.carnet_identificacion} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Correo Electronico</label>
                                <input {...register("correo")} defaultValue={user.correo} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Numero de Celular</label>
                                <input {...register("telefono")} defaultValue={user.telefono} className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Foto de Perfil</label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <Avatar image={URL_API+'/image/'+user.foto_perfil} shape="circle" />
                                    <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                    Change
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Repite esto para cada propiedad de user */}
                        <div className="col-span-2 ">
                            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        
        </div>
    )
}