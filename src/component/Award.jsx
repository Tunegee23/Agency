import React from 'react'

const Award =({imgSrc, title, date, description, iconSrc }) => {
  return (
          <div className=' md:flex justify-items-center md:justify-evenly '>
            <div className='md:flex '>
              <img src={imgSrc } className=' mt-[2rem]' alt=''></img>
              <h1 className='text-center font-[400]  ml-[16px] md:mt-[3.5rem]  leading-[2rem] text-[20px] text-[#391400]  mt-[1.5rem]'>{title}</h1>
            </div>

            <div className=''>
              <p className='text-center   font-[400]   md:mt-[3.5rem] text-[16px] text-[#391400A3] mt-[8px]'>{date}</p> 
            </div>

            <div className='md:flex justify-items-center'>
              <p className='font-[400] text-[16px] md:w-[150px] md:text-center text-[#391400] md:mt-[3.5rem] text-center mt-[8px]'>{description}</p>
              <img src={iconSrc} className=' md:w-[50px] md:h-[50px] md:mt-[2.5rem] mt-[8px]' alt=''></img>
            </div>
          </div>
  )
}

export default Award