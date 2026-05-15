// import { PanelsTopLeft, Phone, FileText, MessageSquareText, Gift, CircleAlert } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    Phone,
    FileText,
    MessageSquare,
    Globe,
} from "lucide-react";

// const sideBarDatas = [
//     {
//         name: "Dashboard",
//         path: "/",
//         icon: LayoutDashboard,
//     },
//     {
//         name: "Call Insights",
//         path: "/insights",
//         icon: Phone,
//     },
//     {
//         name: "Knowledge Base",
//         path: "/knowledge",
//         icon: FileText,
//     },
//     {
//         name: "Prompts",
//         path: "/prompts",
//         icon: MessageSquare,
//     },
//     {
//         name: "Boxy Controls",
//         path: "/controls",
//         icon: Globe,
//     },
// ];
const Sidebar = () => {
    return (
        <div className='w-65.5 '>
            <div className="navbar bg-base-100 shadow-sm">
                <div>
                    <a className="btn btn-ghost text-xl">Hintro</a>
                </div>
                <hr />
            </div>

            <div className='pt-5  border h-90 border-gray-200 border-r-2 border-l-0 border-t-0 border-b-0'>

                {/* {
                    sideBarDatas.map((item) => (
                        <li key={item.title}>
                            <NavLink
                                to={item.path}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200"
                            >
                                <item.icon size={18} />
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))
                } */}
            </div>
            <div className='flex items-center flex-col border h-60 border-gray-200 border-r-2 border-l-0 border-t-2 border-b-0'>
                <ul className='m-5 flex flex-col justify-center items-center'>
                    <li className='w-50 flex gap-2 p-2 mb-3 text-[14px]'>Feedback History</li>
                    <li className='w-50 flex gap-2 p-2 mb-3 text-[14px]'><FileText />Feedback</li>
                </ul>
                <button className='w-45 h-9  text-white rounded-xl bg-gray-500'>Upgrade</button>
            </div>
        </div>

    )
}

export default Sidebar

//  {
//                     sideBarDatas.map((data) =>
//                         <ul className=' flex flex-col justify-center items-center'>
//                             {/* <data.icon size={18} /> */}
//                             <li className='text-[14px] m-1 w-50 p-2 ' key={data.title}>{data.title}</li>
//                         </ul>

//                     )
//                 }