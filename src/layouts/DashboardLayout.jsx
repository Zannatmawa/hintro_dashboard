import { useEffect, useState } from 'react'
import HeroSection from '../components/dashboard/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import { getDashboard } from '../api/api'

const DashboardLayout = ({ children }) => {
    const [dashboard, setDashboard] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDashboard("u2");
            setDashboard(data);
        };

        fetchData();
    }, []);
    console.log(dashboard)
    return (
        <>
            <Navbar />
            <div className='flex min-h-screen'>
                <div className='lg:w-65.5 w-0'>
                    <Sidebar />
                </div>

                <main className='p-6  w-295'>
                    {children}
                </main>

            </div>
        </>

    )
}

export default DashboardLayout