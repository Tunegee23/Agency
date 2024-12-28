import React from 'react'

const Contact =({imgSrc, title, phoneNo}) => {
  return (
    <div className='w-[329px] h-[192px] border-[1px] rounded-[10px] border-[#F3D1BF] border-solid  mt-[-2rem]'>
        <div className='flex gap-[1.3rem]'>
            <div className='w-[64px] relative h-[64px] ml-[2rem] mt-[2rem] rounded-[2rem] bg-[#EF6D58]'>
                <img src={imgSrc} className=' relative  left-[1.2rem] top-[1.3rem]' alt=''></img>
            </div>
            <p className='font-[400] text-[16px] tracking-[3px] mt-[3rem] leading-[2rem] text-[#EF6D58]'>{title}</p>
        </div> 
        <p className='mt-[2rem] ml-[2rem] font-[400] text-[20px] leading-[2rem]'>{phoneNo}</p>
    </div>
  )
}

export default Contact