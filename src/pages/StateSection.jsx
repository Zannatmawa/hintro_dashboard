import React from 'react'
import StateCards from './StateCards'

const Stats = [
    "Total Sessions", "Average Duration", "AI used", "Last Session"
]

const StateSection = ({ dashboard }) => {
    console.log(dashboard)
    return (
        <div className='lg:mt-0 mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-0 md:mx-4 mb-10'>
            {Stats.map((stat, index) =>
                <StateCards dashboard={dashboard} key={index} stat={stat} />
            )}
        </div>
    )
}

export default StateSection