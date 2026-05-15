import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-65.5'>
                <Sidebar />
            </div>
            <div className='w-295'>
                <Navbar />
            </div>
        </div>
    )
}

export default DashboardLayout