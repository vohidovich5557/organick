import React from "react";



export const ChooseCard = ({img, title, text}) => {
    return (
        <>
         <div className="w-[257px] h-[335px] flex flex-col items-center bg-white rounded-[30px] pt-[50px]  pb-[19px] ">
            <img src={img} alt="img" className="w-[46px] h-[46px] mb-[35px]" />
            <h3 className="text-2xl text-kok font-extrabold mb-[12px]">{title}</h3>
            <p className="w-[184px] h-[115px] text-center text-black/50">{text}</p>
         </div>
        </>
    )
}