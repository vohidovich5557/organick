import React from "react";


export const HeroCard = ({title, text, img, aos}) => {
    return (
        <>
        <div className="w-[682px] h-[367px]  relative" data-aos={aos} data-aos-duration="3000">
            <img src={img} alt="img" className=" absolute -z-10 w-full" />
            <div className="pl-[54px] pt-[109px]">
            <p className="text-3xl font-normal text-white mb-[5px]">{title}</p>
            <h2 className="w-[277px] text-left text-white font-extrabold text-4xl">{text}</h2>
            </div>
        </div>
        </>
    )
}