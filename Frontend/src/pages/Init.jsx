import { Navbar, Sidebar } from '../components/Navbar'
import { useState } from 'react';
import { Outlet } from "react-router-dom";

function Init() {
    const [openSidebar, setOpenSidebar] = useState(false);
    

    return (
        <div className={`min-h-screen dark:bg-slate-900`}>
            <Navbar setOpen={setOpenSidebar} />
            <div className=''>
                <Sidebar open={openSidebar} />
                <main className="z-10 overflow-auto min-h-full w-full sm:px-10" >
                    <Outlet></Outlet>
                </main>

            </div>
        </div>
    )
}

export default Init
