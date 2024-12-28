import React from 'react'

function Pricing({sectionTitle, mainTitle, description, features,  plusIcon, minusIcon }) {
  return (
        <div className='ml-[2rem]'>
            <p className='tracking-[3px] mt-[2rem] font-[400] text-[16px] text-[#EF6D58] leading-[2rem]'>{sectionTitle}</p>
            <h2 className='font-[800] mt-[1rem] text-[#391400] text-[40px] leading-[3rem]'>{mainTitle}</h2>
            <p className='font-[400] w-[220px] mt-[1rem] md:w-[270px] text-[16px] leading-[2rem]'>{description}</p>
            {features.map((feature, index) => (
                <div key={index} className='flex ml-[5px] md:ml-[1px] mt-[2rem] gap-[1rem]'>
                    <img src={feature.icon === 'plus' ? plusIcon : minusIcon} alt='' />
                    <p className='font-[400] text-[16px] text-[#391400]'>{feature.text}</p>
                </div>
            ))}
        </div>
  )
}

export default Pricing