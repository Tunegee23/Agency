import React from 'react';

const Testimonial = ({imgSrc, title, text, description, picSrc}) => {
    return (
        <div className='mt-[3rem]'>
                <div className=''>
                    <img src={imgSrc} className='ml-[2rem] mt-[2rem]' alt=''></img>
                    <h3 className='mt-[2rem] w-[275px] md:w-[450px] lg:w-[300px] ml-[2rem] font-[400] text-[16px] text-[#391400A3] leading-[2.5rem]'>{description}</h3>
                    <div className='ml-[2rem] flex gap-[1.5rem]'>
                        <img src={picSrc} className='mt-[2rem]' alt=''></img>
                        <h2 className='font-[700] text-[24px] md:w-[300px] text-[#391400] w-[100px] leading-[2rem] mt-[2rem]'>{title}</h2>
                    </div>
                    <p className='ml-[8.5rem] relative md:bottom-[2rem] mt-[-0.7rem] font-[400] text-[#391400] text-[16px]'>{text}</p>
                </div>
            </div>
    );
}

export default Testimonial;

