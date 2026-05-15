import React from 'react'
import StateCards from './StateCards'

const Stats = [
    "Total Sessions", "Average Duration", "AI used", "Last Session"
]

const StateSection = () => {
    return (
        <div className='flex justify-between items-center mx-8 mb-10'>
            {Stats.map((stat =>
                <StateCards stat={stat} />
            ))}
        </div>
    )
}

export default StateSection