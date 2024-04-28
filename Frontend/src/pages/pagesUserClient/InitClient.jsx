
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { NavBarClient } from './NavBarClient';
import { SidebarClient } from './SidebarClient';
import { ThemaContext } from '../../contexts/ThemaContext';


function InitClient() {
    const [openSidebar, setOpenSidebar] = useState(false);


    return (
        <div className={`min-h-screen dark:bg-slate-900`}>
            <ThemaContext>
                <NavBarClient setOpen={setOpenSidebar} />
                <div className=''>
                    <SidebarClient open={openSidebar} />
                    <main className="z-10 overflow-auto min-h-full w-full sm:px-10" >
                        <Outlet></Outlet>
                    </main>

                </div>
            </ThemaContext>

        </div>
    )
}

export default InitClient;