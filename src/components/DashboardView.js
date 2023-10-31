import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import profile from "../assets/fp.jpeg"

const DashboardView = () => {
    return (
        <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
            <div className='flex items-center rounded-[5px]'>
                <input type="text" className='bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search ...' />
                <div className='bg-[#4e73df] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px]'>
                    <FaSearch color='white' />
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                    <FaRegBell />
                    <FaEnvelope />
                </div>
                <div className='flex items-center gap-[15px] relative'>
                    <p>Luthfi Alv</p>
                    <div className='h-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative'>
                        <img src={profile} alt="foto profil" className='w-12 h-12 rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardView