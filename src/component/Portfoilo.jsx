import React from 'react';

const Portfoilo = ({image, title, subtitle, textColor, bgColor, imageClassName, overlayClassName}) => {
    return (

        <div className="relative ">
            <img src={image} className={`md:w-[670px] md:h-[416px] ${imageClassName}`} alt={title} />
            <div className={`absolute w-[84px] h-[38px] md:bottom-[6rem] bottom-[6rem] ml-[2rem] rounded-[20px] bg-[${bgColor}] ${overlayClassName}`}>
                <p className={`text-center  text-[16px] mt-[6px] font-[400] text-[${textColor}]`}>{subtitle}</p>
                <h2 className="font-[800] w-[300px] md:w-[300px] text-[40px] mt-[10px] text-[#FFFFFF]">{title}</h2>
            </div>
        </div>
    );
}

export default Portfoilo;
