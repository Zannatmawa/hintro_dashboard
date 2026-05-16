import React from 'react'

const StateCards = ({ stat }) => {
    console.log(stat)
    return (
        <div className='lg:w-58 h-15 border flex items-center justify-evenly border-gray-400 rounded'>
            <div className='mt-1 ml-2 p-5 '>img</div>
            <div className=' my-2 lg:w-35 w-35  lg:p-0 p-2'>
                <h3 className='text-gray-800 font-semibold lg:text-[16px] text-[10px]'>{stat}</h3>
                <h5 className='font-bold text-gray-900 lg:text-[20px] text-[12px]' >0</h5>
            </div>
        </div>
    )
}

export default StateCards