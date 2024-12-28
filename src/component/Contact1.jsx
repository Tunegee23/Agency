import React from 'react';

const Contact1 = ({imgSrc, title, subTitle}) => {
    return (
        <div className=''>
            <div className='flex '>
                <div className='w-[100px] h-[100px] mt-[1.5rem]  relative  rounded-[4rem] bg-[#EF6C57]'>
                    <img src={imgSrc} className='ml-[1.5rem] relative top-[1.5rem]' alt=''/>
                </div>
                <div className='mt-[1.5rem] ml-[3rem]'>
                    <h1 className='font-[800] text-[#391400] text-[40px] leading-[3rem]'>{title}</h1>
                    <p className='font-[400] text-[#391400] w-[100px] md:w-[200px] text-[20px] leading-[1.5rem]'> {subTitle}</p>
                </div>
            </div>
            
        </div>
            
    );
}

export default Contact1;
