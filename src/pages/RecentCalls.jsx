import React from 'react'

const RecentCalls = () => {
    return (
        <div className='flex flex-col m-auto justify-center items-center'>
            <h2 className='text-center  mb-5 text[16px] font-bold'>Recent Calls</h2>
            <div className='w-200 flex flex-col justify-center items-center  h-[200px] border border-gray-200 rounded'>
                <div></div>
                <h2>No Recent Calls</h2>
                <p className='text-[10px] text-gray-500 '>Connect your Google Calendar to see upcoming meetings, <br />get reminders, and join calls directly from Hintro.</p>
                <button className='mt-5  border rounded px-2 py-1 text-[10px]'>Start a Call</button>
            </div>
        </div>
    )
}

export default RecentCalls