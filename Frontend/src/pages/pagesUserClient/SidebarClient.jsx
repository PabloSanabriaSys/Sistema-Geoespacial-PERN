import React, { useRef, useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { Badge } from 'primereact/badge';
import { useNavigate } from "react-router-dom";
// Componente de la barra lateral
export function SidebarClient(props) {
    const nav = useNavigate()
  
    const itemRenderer = (item, options) => (
      <a className="flex items-center  px-3 py-2 cursor-pointer hover:text-blue-600" onClick={options.onClick}>
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
        command: () => { nav("/VistaCliente"); },
      },
      {
        label: 'Productos',
        icon: 'pi pi-user',
        template: itemRenderer,
        command: () => { nav("/VistaCliente/productos"); },
      },
      {
        label: 'Contactanos',
        icon: 'pi pi-chart-bar',
        template: itemRenderer,
        command: () => { nav("/VistaCliente/contacto"); },
        
      },
      {
        label: 'Quienes somos',
        icon: 'pi pi-user',
        template: itemRenderer,
        command: () => { nav("/VistaCliente/acerca-de"); },
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
  