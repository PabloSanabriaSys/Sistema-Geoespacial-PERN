import React, { useState, useEffect } from 'react';
import { FilterMatchMode  } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { getClients } from '../../api/client';
import { URL_API } from '../../api/axios';
import { Avatar } from 'primereact/avatar';
import Title from '../../components/ui/Title';
export default function ListClient() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [selectedCustomer, setSelectedCustomer] = useState(null);
 

    useEffect(() => {
        async function peticion() {
            try {
                const response = await getClients()
                setCustomers(response.data)
                //console.log(response)
            } catch (error) {
                console.log('Error al obtener clientes', error)
            }
        }
        peticion()
    }, []);

   
    const onGlobalFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
    };

    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Busqueda Global" />
            </span>
        );
    };

    const usernameBodyTemplate = (rowData) => {
        const representative = rowData.nombre_usuario;
        const perfil = rowData.foto_perfil;
        return (
            <div className="flex items-center gap-2">
                <Avatar image={URL_API+'/image/'+perfil} shape="circle" />
                <span>{representative}</span>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className=' py-10'>
            <Title title="LISTA DE" subtitle="CLIENTES" titleSize="sm:text-6xl text-4xl" subtitleSize="sm:text-6xl text-4xl" />
            <div className="card rounded-xl p-4  border dark:bg-slate-800 dark:border-slate-500">
                <DataTable value={customers} paginator rows={5} header={header} filters={filters} onFilter={(e) => setFilters(e.filters) }
                    selection={selectedCustomer} onSelectionChange={(e) => setSelectedCustomer(e.value)} selectionMode="single" dataKey="id"
                    stateStorage="session" stateKey="dt-state-demo-local" emptyMessage="Clientes no encontrados" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="nombre_usuario" header="Nombre Usuario" sortable body={usernameBodyTemplate}  ></Column>
                    <Column field="nombres" header="Nombres" sortable ></Column>
                    <Column field="apellido_paterno" header="Apellido Paterno" sortable ></Column>
                    <Column field="apellido_materno" header="Apellido Materno" sortable ></Column>
                    <Column field="carnet_identificacion" header="Carnet" sortable ></Column>
                    <Column field="telefono" header="Celular" sortable ></Column>
                    <Column field="correo" header="Correo" sortable ></Column>
                    <Column field="latitud" header="Latitud" sortable></Column>
                    <Column field="longitud" header="Longitud" sortable ></Column>
                </DataTable>
            </div>
        </div>
    );

}
