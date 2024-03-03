import React from "react";




export const OrganicCard = ({img, title}) => {
    return (
        <>
         <div className="relative">
            <img src={img} alt="img" className=" absolute w-full" />
            <div className="px-[83px] py-[33px] relative flex items-center justify-center bg-white rounded-[20px] mt-[244px] mb-[243px] mr-[146px] ml-[146px]">
                <p className="text-2xl text-kok whitespace-nowrap ">{title}</p>
            </div>
         </div>
        </>
    )
}