import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex justify-between items-center mx-8 mb-10'>
            <div>
                <h1>Hi, Welcome to Hintro</h1>
                <span>Ready to make your next call smarter ?</span>
            </div>
            <div>
                <button className='rounded p-2 bg-black text-white'>Start New Call</button>
            </div>
        </div>
    )
}

export default HeroSection