import React from 'react'

const RecentCalls = () => {
    return (
        <div className='flex flex-col m-auto justify-center items-center'>
            <h2 className='text-center  mb-5 lg:text-[16px] text-[12px]  font-bold'>Recent Calls</h2>
            <div className='lg:w-200 w-80 flex flex-col justify-center items-center  h-50 border border-gray-200 rounded'>
                <div></div>
                <h2 className='lg:text-[14px] text-[9px] '>No Recent Calls</h2>
                <p className='lg:text-[10px] text-[8px] text-gray-500 '>Connect your Google Calendar to see upcoming meetings, <br />get reminders, and join calls directly from Hintro.</p>
                <button className='mt-5  border rounded px-2 py-1 text-[8px] lg:text-[10px]'>Start a Call</button>
            </div>
        </div>
    )
}

export default RecentCalls