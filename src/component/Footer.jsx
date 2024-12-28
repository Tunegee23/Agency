import React from 'react'

const Footer =({title , items})=> {
  return (
    <div>
        <div className='mt-[3rem] text-center'>
            <h3 className='text-center font-[400] text-[16px] text-[#EF6D58] tracking-[3px] leading-[2rem]'>{title}</h3>
            {items.maps ((item, index) => {
                <p key={index} className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'>{item}</p>
            })}
        </div>
    </div>
  )
}

export default Footer