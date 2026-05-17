import React, { useEffect, useState } from 'react'
import { getProfile } from '../../api/profileApi';

const HeroSection = () => {
    const [userData, setUserData] = useState('')
    useEffect(() => {
        getProfile().then(data => {
            setUserData(data)
        });
    }, []);
    // console.log(userData)
    const name = userData.firstName
    return (
        <div className=' flex justify-between lg:items-center lg:mx-8 lg:mb-10  lg:flex-row flex-col'>
            <div>
                <h1 className='lg:text-[20px] font-bold text-[16px]'>Hi,{name} Welcome to Hintro</h1>
                <span className='lg:text-[12px] text-[8px]'>Ready to make your next call smarter ?</span>
            </div>
            <div className='lg:mt-0 mt-5'>
                <button className='rounded lg:text-[14px] text-[8px] p-2 lg: bg-black text-white'>Start New Call</button>
            </div>
        </div>
    )
}

export default HeroSection