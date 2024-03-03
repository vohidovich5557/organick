import React from "react";




export const Us2card  = ({img, title}) => {
    return (
        <>
        <div className="334px h-[367px] flex flex-col items-center">
            <div className="w-[334px] h-[316px] bg-white rounded-[40px] mb-[9px]">
            <img src={img} alt="img" className="mb-[24px] rounded-[40px]" />
            </div>
            <p className="text-white text-2xl font-semibold pl-[136px] pr-[137px]">{title}</p>
        </div>
        </>
    )
}