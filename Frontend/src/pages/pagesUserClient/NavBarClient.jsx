import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import ChangeStyle from '../../components/ChangeStyle';
import { Avatar } from 'primereact/avatar';
import { TieredMenu } from 'primereact/tieredmenu';
import { useAuth } from '../../contexts/Auth/AuthProvider';
import { Badge } from 'primereact/badge';

export function NavBarClient(props) {
  const menu = useRef(null);
  const {logout} = useAuth()
  

  const items = [
    {
      label: 'Configuraciones',
      icon: 'pi pi-cog'
    },
    {
      separator: true
    },
    {
      label: 'Cerrar Sesion',
      icon: 'pi pi-face-smile',
      command: () => { logout() },

    }
  ];
  const navItems = [
    { 
        label: 'Inicio', 
        path: '' 
    },
    { 
        label: 'Productos', 
        path: '/VistaCliente/productos',
        
    },
    { 
        label: 'Contactanos', 
        path: '/VistaCliente/contacto',
       
    },
    { 
        label: 'Acerca de', 
        path: '/VistaCliente/acerca-de',
        
    },
    
  ];
  
  return (
    <nav className="sticky top-0 z-50 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button"
              onClick={() => props.setOpen((value) => !value)}
              className=" lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className='w-7 h-7 text-blue-700 dark:text-gray-300 ' />
            </button>
            <Link to="" className="flex ms-2 md:me-24">
              <img src="/imagenes/logo.png" className="h-10 me-3" alt="logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">FarmaYaPa</span>
            </Link>
          </div>
            <div className="hidden lg:flex items-center"> {/* Mostrar en pantallas grandes */}
                <ul className="flex space-x-16  justify-between w-full">
                    {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path} className="text-gray-600 text-xl hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                        {item.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
          <div className="flex items-center space-x-10">
            <div className='hidden sm:flex '>
              <i className="pi pi-shopping-cart p-overlay-badge   " style={{ fontSize: '1.5rem' }}>
                  <Badge value="5"></Badge>
              </i>
            </div>
            
           
            <div className="flex items-center ms-3 relative">
                   
              <ChangeStyle />
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              <Avatar className="ml-4" icon="pi pi-user" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" onClick={(e) => menu.current.toggle(e)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

