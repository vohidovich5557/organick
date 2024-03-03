import React from "react";
import facebook from '../../../assets/icon/facebook.svg';
import twitter from '../../../assets/icon/twitter.svg';




export const TeamCard = ({img, title, text}) => {
    return (
        <>
         <div className="w-[449px] h-[615px] bg-oq hover:bg-white hover:shadow-xl rounded-[20px]">
            <img src={img} alt="img" className="w-[449px] h-[486px] mb-[35px]" />
            <div className="flex items-end gap-[145px]">
                <div className="flex flex-col text-left pl-[28px]">
                <h3 className="text-kok text-2xl font-extrabold mb-[2px]">{title}</h3>
                <p className="text-yashil text-xl font-normal">{text}</p>
                </div>
                <div className="flex items-center gap-[17px]">
                    <img src={facebook} alt="img" className="w-[22px] h-[21px]" />
                    <img src={twitter} alt="img" className="w-[22px] h-[21px]"/>
                </div>
            </div>
         </div>
        </>
    )
}