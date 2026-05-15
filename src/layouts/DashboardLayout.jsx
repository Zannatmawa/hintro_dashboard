import HeroSection from '../components/dashboard/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen'>
            <Sidebar />
            {/* <div className='w-65.5'>
            </div> w-295 */}
            <div className='flex-1'>
                <Navbar />
                <main className='p-6'>
                    {/* <Outlet>
                    </Outlet> */}
                    {children}
                </main>
            </div>

        </div>
    )
}

export default DashboardLayout