import { Navbar, Sidebar } from '../components/Navbar'
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { ThemaContext } from '../contexts/ThemaContext';

function Init() {
    const [openSidebar, setOpenSidebar] = useState(false);


    return (
        <div className={`min-h-screen dark:bg-slate-900`}>
            <ThemaContext>
                <Navbar setOpen={setOpenSidebar} />
                <div className=''>
                    <Sidebar open={openSidebar} />
                    <main className="z-10 overflow-auto min-h-full w-full sm:px-10" >
                        <Outlet></Outlet>
                    </main>

                </div>
            </ThemaContext>

        </div>
    )
}

export default Init
