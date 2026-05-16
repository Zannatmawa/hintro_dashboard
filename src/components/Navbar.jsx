import React from 'react'
import { Play } from 'lucide-react'
import {
    LayoutDashboard,
    Phone,
    FileText,
    MessageSquare,
    Globe,
} from "lucide-react";
import { NavLink } from 'react-router';

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
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown mx-0">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                </div>
                {/* <div className='border border-gray-300 border-t-0 border-r border-b-0 border-l-0 w-66'>
                </div> */}
                <a className="btn my-2 mx-20 btn-ghost  text-xl hidden lg:block">Hintro</a>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Dashboard</a>
                </div>
                <div className="flex gap-2 ">
                    {/* <button className='flex  lg:block justify-between border-2 mr-10 border-black p-2 rounded w-40'><Play className='font-black' />Watch Tutorial</button> */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="mr-10 btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar