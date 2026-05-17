
import StateCards from './StateCards'
import React, { useEffect, useState } from 'react'
import { getCallStats } from '../api/callApi'
import { FaChartPie } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
import { BsCalendarEvent } from "react-icons/bs";

const icons = [
    {
        icon: <FaChartPie />,
    },
    {
        icon: <MdAccessTime />,
    },
    {
        icon: <HiSparkles />,
    },
    {
        icon: <BsCalendarEvent />,
    },
];
const m = icons.map(i => i.icon);
// console.log(m)


const stats = [
    { title: "Total Sessions", key: "totalSessions", icon: FaChartPie },
    { title: "Average Duration", key: "averageDuration", icon: MdAccessTime },
    { title: "AI used", key: "totalAIInteractions", icon: HiSparkles },
    { title: "Last Session", key: "lastSession", icon: BsCalendarEvent },
];
const StateSection = () => {
    const [callData, setCallData] = useState({});

    useEffect(() => {
        getCallStats().then(data => {
            setCallData(data);
        });
    }, []);

    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-0 md:mx-4 mb-10'>
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <StateCards
                        key={index}
                        title={stat.title}
                        value={callData[stat.key]}
                        icon={<Icon />}
                    />
                );
            })}
        </div>
    );
};
export default StateSection