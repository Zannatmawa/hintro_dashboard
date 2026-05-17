import React, { useEffect, useState } from 'react'
import { getCallStats } from '../api/callApi'

const RecentCalls = () => {
    const [status, setStatus] = useState('m ')
    const [callSessions, setCallSessions] = useState([]);
    const [pagination, setPagination] = useState({});
    useEffect(() => {
        fetch("https://mock-backend-hintro.vercel.app/api/call-sessions?limit=10", {
            headers: {
                "x-user-id": "u2",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCallSessions(data.callSessions);
                setPagination(data.pagination);
            });
    }, []);
    // console.log(callSessions)
    return (
        <>
            {status === ' ' ?

                <div className='flex flex-col m-auto justify-center items-center'>
                    <h2 className='text-center  mb-5 lg:text-[16px] text-[12px]  font-bold'>Recent Calls</h2>
                    <div className='lg:w-200 w-80 flex flex-col justify-center items-center  h-50 border border-gray-200 rounded'>
                        <h2 className='lg:text-[14px] text-[9px] '>No Recent Calls</h2>
                        <p className='lg:text-[10px] text-[8px] text-gray-500 '>Connect your Google Calendar to see upcoming meetings, <br />get reminders, and join calls directly from Hintro.</p>
                        <button className='mt-5  border rounded px-2 py-1 text-[8px] lg:text-[10px]'>Start a Call</button>
                    </div>
                </div> : <div>
                    {callSessions.map((session) => (
                        <div className='flex justify-between m-10' key={session._id}>
                            <div>
                                <h3>{session.client}</h3>
                                {/*  <p>{session.description}</p> */}
                            </div>
                            <div>
                                <p>11.00pm</p>
                                {/* <p>{session.status}</p> */}
                                {/* <p>{session.total_duration_seconds}</p> */}
                            </div>
                        </div>

                    ))}
                </div>}
        </>
    )
}

export default RecentCalls