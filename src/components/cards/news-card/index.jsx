import React from "react";
import { Admin } from '../../../assets/icon/admin';
import { Button } from "../../ui/button";
import { Arrow } from "../../../assets/icon/arrow";




export const NewsCard = ({name, title, text2, img}) => {
    return (
        <>
            <div className="w-[677px] h-[524px] relative">
                <img src={img} alt="img" className=" absolute w-full -z-10" />
                <div className="w-[82px] h-[82px] bg-white rounded-[20px] mt-[43px] ml-[32px] flex items-center justify-center mb-[187px]">
                    <p className="text-kok text-xl font-extrabold">25</p>
                    <p className="text-kok text-xl font-extrabold">Nov</p>
                </div>
                <div className="w-[613px]  rounded-[34px] pt-[46px]  pl-[57px] pb-[60px] pr-[57px] bg-white ml-[32px] shadow-lg">
                    <div className="flex items-center gap-[8px] mb-[15px]" data-aos="fade-left">
                        <Admin />
                        <p className="text-kok text-lg font-normal">{name}</p>
                    </div>
                    <h3 className="text-kok text-2xl font-extrabold mb-[2px]" >{title}</h3>
                    <p className="w-[444px] text-left text-black/50 mb-[15px]"  data-aos="fade-left" data-aos-delay="200">{text2}</p>
                    <Button variant="primary" icon={<Arrow />}>
                        Read More
                    </Button>
                </div>

            </div>
        </>
    )
}