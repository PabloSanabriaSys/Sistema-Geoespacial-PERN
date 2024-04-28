
import React, { useRef, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import ListSm from './ListSm';

export default function ButtonLateral({customers}) {
    const toast = useRef(null);
    const [visibleRight, setVisibleRight] = useState(false);


    return (
        <div className="card" >
            <div style={{ position: '', height: '' }}>
                <Toast ref={toast} />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Left Sidebar</h2>
                <ListSm customers={customers}/>
            </Sidebar>
        </div>
    )
}
