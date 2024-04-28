import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { URL_API } from '../api/axios';
import { Avatar } from 'primereact/avatar';

export default function ListSm({customers = []}) {
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [selectedCustomer, setSelectedCustomer] = useState(null);


    const onGlobalFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
    };

    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left ">
                <i className="pi pi-search" />
                <InputText type="search" className='p-inputtext-sm w-full' value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="" />
            </span>
        );
    };

    const usernameBodyTemplate = (rowData) => {
        const representative = rowData.nombre_usuario;
        const perfil = rowData.foto_perfil;
        return (
            <div className="flex items-center gap-2">
                <Avatar image={URL_API + '/image/' + perfil} shape="circle" />
                <span>{representative}</span>
            </div>
        );
    };

    const nameBodyTemplate = (rowData) => {
        const representative = rowData.nombres + ' ' + rowData.apellido_paterno + ' ' + rowData.apellido_materno;
        return (
            <span>{representative}</span>
        );
    };

    const header = renderHeader();

    return (
        <div className=''>
            <div className="card rounded-xl p-2  border dark:bg-slate-800 dark:border-slate-500">
                <DataTable value={customers} paginator rows={10} header={header} filters={filters} onFilter={(e) => setFilters(e.filters)}
                    selection={selectedCustomer} onSelectionChange={(e) => setSelectedCustomer(e.value)} selectionMode="single" dataKey="id"
                    stateStorage="session" stateKey="dt-state-demo-local" emptyMessage="Clientes no encontrados" tableStyle={{ minWidth: '25rem' }}>
                    <Column field="nombre_usuario" header="Nombre Usuario" sortable body={usernameBodyTemplate}  ></Column>
                    <Column field="nombres" header="Nombres" sortable body={nameBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );

}
