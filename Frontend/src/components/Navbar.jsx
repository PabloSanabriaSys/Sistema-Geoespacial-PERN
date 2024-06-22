import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { PanelMenu } from 'primereact/panelmenu';
import { Badge } from 'primereact/badge';
import ChangeStyle from './ChangeStyle';
import { useNavigate } from "react-router-dom";
import { Avatar } from 'primereact/avatar';
import { TieredMenu } from 'primereact/tieredmenu';
import { useAuth } from '../contexts/Auth/AuthProvider';
import { URL_API } from '../api/axios';
// Componente de la barra de navegación


export function Navbar(props) {
  const menu = useRef(null);
  const nav = useNavigate()
  const {logout} = useAuth()
  const { user } = useAuth()
  
  const items = [
    {
      label: 'Configuraciones',
      icon: 'pi pi-cog',
      command: () => { nav('/configuraciones') },
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
  return (
    <nav className="sticky top-0 z-50 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button"
              onClick={() => props.setOpen((value) => !value)}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className='w-7 h-7 text-blue-700 dark:text-gray-300 ' />
            </button>
            <Link to="/" className="flex ms-2 md:me-24">
              <img src="/imagenes/logo.png" className="h-10 me-3" alt="logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">FarmaYaPa</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3 relative">

              <ChangeStyle />
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              <Avatar className="ml-4" image={ URL_API+'/image/'+user.foto_perfil} shape="circle" onClick={(e) => menu.current.toggle(e)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Componente de la barra lateral
export function Sidebar(props) {
  const nav = useNavigate()

  const itemRenderer = (item, options) => (
    <a className="flex items-center  px-3 py-2 cursor-pointer" onClick={options.onClick}>
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${item.items && 'font-semibold'}`}>{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
    </a>
  );

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      template: itemRenderer,
      command: () => { nav("/"); },

    },
    {
      label: 'Clientes',
      icon: 'pi pi-user',
      template: itemRenderer,
      items: [
        {
          label: 'Lista',
          icon: 'pi pi-file-edit',
          template: itemRenderer,
          command: () => { nav("/clientes"); },
        },
        {
          label: 'Mapa',
          icon: 'pi pi-map',
          template: itemRenderer,
          command: () => { nav("/clientes/mapa"); },
        },
        {
          label: 'Mapa Departamentos',
          icon: 'pi pi-map',
          template: itemRenderer,
          command: () => { nav("/clientes/mapa/OTBs"); },
        },
        {
          label: 'Mapa Municipios',
          icon: 'pi pi-map',
          template: itemRenderer,
          command: () => { nav("/clientes/mapa/municipios"); },
        },
        {
          label: 'Mapa Cantones',
          icon: 'pi pi-map',
          template: itemRenderer,
          command: () => { nav("/clientes/mapa/cantones"); },
        },
        
        {
          label: 'Mapa Manzanos',
          icon: 'pi pi-map',
          template: itemRenderer,
          command: () => { nav("/clientes/mapa/manzanos"); },
        },

      ]
    },
    {
      label: 'Reportes',
      icon: 'pi pi-chart-bar',
      template: itemRenderer,
      items: [
        {
          label: 'Ventas Mensuales',
          icon: 'pi pi-chart-line',
          badge: 3,
          template: itemRenderer
        },
        {
          label: 'Productos',
          icon: 'pi pi-list',
          badge: 6,
          template: itemRenderer
        }
      ]
    },
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      shortcut: '⌘+W',
      template: itemRenderer,
      items: [
        {
          label: 'Configuracion',
          icon: 'pi pi-cog',
          template: itemRenderer,
          command: () => { nav("/configuraciones"); },
        },
        {
          label: 'Privacidad',
          icon: 'pi pi-shield',
          template: itemRenderer
        }
      ]
    }
  ];

  return (
    <aside
      id="logo-sidebar"
      className={`fixed  top-0 left-0 z-40 pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out ${props.open ? 'translate-x-0' : '-translate-x-full'}`}
      aria-label="Sidebar"
    >
      <div className="h-screen px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <PanelMenu model={items} className="w-44 " />

      </div>
    </aside>
  );
}
