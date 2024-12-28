import React from 'react';

const Contact2 = ({title, iconSrc}) => {
    return (
        <div className='ml-[2rem] gap-[2rem] flex'>
            <div className='w-[64px] relative h-[64px]  mt-[2rem] rounded-[2rem] bg-[#EF6D58]'>
                <img src={iconSrc} className=' relative  left-[1.2rem] top-[1.3rem]' alt=''></img>
            </div>
            <p className='font-[400] w-[250px] text-[16px] tracking-[3px] mt-[3rem] leading-[2rem] text-[#EF6D58]'>{title}</p>
        </div>
    );
}

export default Contact2;
