import React from 'react'
import check from "../Image/check.png"

const Text = ({text}) => {
  return (
    <div className='flex gap-[1rem] mb-[1rem] '>
         <img src={check} alt=''></img>
        <p className='mt-[5px]  font-[400] text-[16px] '>{text}</p>
    </div>
  )
}

export default Text