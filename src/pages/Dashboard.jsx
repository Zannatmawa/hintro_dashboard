import { getDashboard } from "../api/api";
import { getProfile } from "../api/profileApi";
import HeroSection from "../components/dashboard/HeroSection";
import DashboardLayout from "../layouts/DashboardLayout";
import RecentCalls from "./RecentCalls";
import StateSection from "./StateSection";
import { useEffect, useState } from 'react'


const Dashboard = () => {
    // const [dashboard, setDashboard] = useState()
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getDashboard("u2");
    //         setDashboard(data);
    //     };
    //     console.log(dashboard)
    //     fetchData();
    // }, []);
    const [user, setUser] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile("u2");
            setUser(data);
        };
        fetchData();
    }, []);
    console.log(user)
    return (
        <>
            {
                user &&
                <DashboardLayout>
                    <HeroSection />
                    <StateSection />
                    <RecentCalls />
                </DashboardLayout>
            }
        </>

    );
};

export default Dashboard;