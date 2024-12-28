import React from 'react'

function Event({date, year, icon, time, title, description, buttonText,}) {
  return (
    <div className='w-[329px] h-[448px] mt-[3rem] justify-items-center  border-solid border-[1px] border-[#3A3C56]'>
        <div className='  flex gap-[1.5rem]'>
            <h1 className='font-[800] ml-[2rem] mt-[1.5rem] text-[#FFFFFF] text-[72px] leading-[5rem]'>{date}</h1>
            <p className='mt-[2rem] w-[127px] font-[700] text-[24px] text-[#FFFFFF] leading-[2rem]'>{year}</p>
        </div>

        <div className='ml-[10px]  flex gap-[1rem]'>
            <img src={icon} className='mt-[1rem] w-[16px] h-[16px] ml-[2rem]' alt=''></img>
            <p className='w-[140px] font-[400] mt-[14px] text-[16px] text-[#FFFFFF]'>{time}</p>
        </div>

        <div className=' w-[260px] mt-[2rem] border-solid border-[1px] border-[#3A3C56] justify-items-center '></div>

        <div className='  mt-[3rem]'>
            <h2 className='font-[700] ml-[2rem] mt-[1.5rem] text-[#FFFFFF] leading-[2rem] text-[24px] ]'>{title}</h2>
            <p className='mt-[1rem] w-[273px]  font-[400] ml-[2rem] text-[16px] text-[#FFFFFFA3] leading-[2rem]'>{description}</p>
        </div>
        <div>
            <p className='w-[140px] font-[400] mt-[2rem] ml-[2rem] text-[16px] text-[#FFFFFF]'>{buttonText}</p>
        </div>
    </div>
  )
}

export default Event