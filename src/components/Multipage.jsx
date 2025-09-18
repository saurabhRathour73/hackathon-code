import React from 'react'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router-dom'

const Multipage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />

            </div>

        </div>
    )
}

export default Multipage
