import { PanelsTopLeft, MessageSquareText, Gift, CircleAlert } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    Phone,
    FileText,
    MessageSquare,
    Globe,
} from "lucide-react";

const sideBarDatas = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Call Insights",
        path: "/insights",
        icon: Phone,
    },
    {
        name: "Knowledge Base",
        path: "/knowledge",
        icon: FileText,
    },
    {
        name: "Prompts",
        path: "/prompts",
        icon: MessageSquare,
    },
    {
        name: "Boxy Controls",
        path: "/controls",
        icon: Globe,
    },
];
const Sidebar = () => {
    return (
        <div className="navbar lg:block hidden bg-base-100 flex flex-col shadow-sm">
            <div className="navbar-center  flex-col hidden lg:flex">
                <ul className='text-[14px]'>
                    {
                        sideBarDatas.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-base-200"
                                >
                                    <item.icon size={18} />
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className='mt-30 flex items-center w-66  flex-col border h-75 border-gray-300 border-r-0 border-l-0 border-t-1 border-b-0'>
                    <ul className='m-5 flex flex-col justify-center items-center'>
                        <li className='w-50 flex gap-2 p-2 mb-3 text-[14px]'><FileText />Feedback History</li>
                        <li className='w-50 flex gap-2 p-2 mb-3 text-[14px]'>< Gift />Feedback</li>
                    </ul>
                    <button className='w-45 h-9  text-white rounded-xl bg-gray-500'>Upgrade</button>
                </div>
            </div>

        </div>

    )
}

export default Sidebar
