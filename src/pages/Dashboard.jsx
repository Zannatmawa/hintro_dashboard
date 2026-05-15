import HeroSection from "../components/dashboard/HeroSection";
import DashboardLayout from "../layouts/DashboardLayout";
import RecentCalls from "./RecentCalls";
import StateSection from "./StateSection";


const Dashboard = () => {
    return (
        <DashboardLayout>
            <HeroSection />
            <StateSection />
            <RecentCalls />
        </DashboardLayout>
    );
};

export default Dashboard;