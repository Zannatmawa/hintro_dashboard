import React from 'react'

const StateCards = ({ stat }) => {
    console.log(stat)
    return (
        <div className='w-58 h-15 border flex justify-between border-gray-400 rounded'>
            <div className='mt-4 ml-4'>img</div>
            <div className='mr-10 my-2'>
                <h3 className='text-gray-800 font-semibold text-[16px]'>{stat}</h3>
                <h5 className='font-bold text-gray-900' >0</h5>
            </div>
        </div>
    )
}

export default StateCards