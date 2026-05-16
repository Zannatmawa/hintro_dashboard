
import HeroSection from '../components/dashboard/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className='flex min-h-screen'>
                <div className='lg:w-65.5 w-0'>
                    <Sidebar />
                </div>

                <main className='lg:p-6 p-3  w-295'>
                    {children}
                </main>

            </div>
        </>

    )
}

export default DashboardLayout