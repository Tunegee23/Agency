import React from 'react'

const Blog = ({imgSrc, title, date, description, className})=> {
  return (
    <div className=' mt-[3rem] justify-items-center text-center'>
        <img src={imgSrc} className={className}  alt=''></img>
        <p className='font-[400] mt-[8px] text-[20px] leading-[2rem] text-[#391400] '>{title}</p>
        <h2 className='font-[700] md:w-[400px]  mt-[8px] text-[30px] leading-[2rem] text-[#391400]'> {description}</h2>
        <p className='font-[400] mt-[8px] text-[16px] leading-[2rem] text-[#391400A3]'>{date}</p>
    </div>
  )
}

export default Blog