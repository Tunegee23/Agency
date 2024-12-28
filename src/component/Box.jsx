import React from 'react'
import down from "../Image/down.png"

const Box = ({text}) => {
  return (
    <div className=' flex gap-[1.5rem] md:gap-[3rem]'>
        <h2 className='font-[700] ml-[2rem] md:mt-[2.5rem] md:w-[400px] w-[226px] mt-[3rem] text-[24px] leading-[2rem] '>{text}</h2>
        <img src={down} className='w-[32px] h-[32px] md:mt-[2.5rem] mt-[3rem]' alt=''></img>
    </div>
  )
}

export default Box