import { getDashboard } from "../api/api";
import HeroSection from "../components/dashboard/HeroSection";
import DashboardLayout from "../layouts/DashboardLayout";
import RecentCalls from "./RecentCalls";
import StateSection from "./StateSection";
import { useEffect, useState } from 'react'


const Dashboard = () => {
    const [dashboard, setDashboard] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDashboard("u2");
            setDashboard(data);
        };

        fetchData();
    }, []);
    // console.log(dashboard)
    return (
        <DashboardLayout>
            <HeroSection />
            <StateSection dashboard={dashboard} />
            <RecentCalls />
        </DashboardLayout>
    );
};

export default Dashboard;