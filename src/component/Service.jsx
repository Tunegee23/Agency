import React from 'react';

const Service = ({ title, description, imgSrc, subtitle, iconSrc }) => {
    return (
        
        <div className='flex items-center justify-center'>
            <div className='md:h-[352px] sm:w-[450px] grid w-[320px]   md:w-[550px] lg:w-[500px] xl:w-[586px]    h-[400px] border-solid border-[1px] rounded-[10px] border-[#f3d1bf] bg-[none]'>
                <div className='flex'>
                    <div className='w-[80px] h-[80px] mt-[3rem] rounded-[3rem] ml-[2rem] bg-[#EF6C57]' >
                        <img src={imgSrc} className='relative left-[1.7rem] top-[1.7rem]' alt=''/>
                    </div>
                    <h2 className='ml-[1rem] mt-[4rem] sm:text-[35px] font-[700] text-[20px]'>{title}</h2>
                </div>
                <p className='font-[400] text-[14px] xl:text-[18px] xl:leading-[2rem] sm:text-[23px] w-[full] text-center mt-[2rem] leading-[2rem] text-[#391400A3]'>{description}.</p>
                <div className='flex mt-[1rem]'>
                    <img src={iconSrc} className='ml-[1.5rem] w-[48px] mt-[5px] h-[48px]' alt=''></img>
                    <p className=' mt-[1rem] ml-[1rem] font-[400] text-[16px] text-[#391400]'>{subtitle}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Service;
