import React from "react";




export const TestimonalCard = ({precent, text}) => {
    return (
        <>
         <div className=" flex flex-col items-center justify-center bg-oq w-[211px] h-[211px] rounded-[110px] border-2 border-yashil pt-[53px] pb-[54px] pl-[32px] pr-[33px]">
            <h2 className="text-kok font-extrabold text-5xl mb-[3px]">{precent}</h2>
            <p className="text-kok font-semibold text-lg ">{text}</p>
         </div>
        </>
    )
}