import React from "react";




export const ProductCard = ({type, img, star, title, oldPrice, newPrice, aos}) => {
    return (
        <>
        <div className=" bg-oq rounded-[36px] pb-[19px] pt-[29px] hover:shadow-lg hover:transition-all hover:duration-500" data-aos={aos} data-aos-duration="3000">
            <p className="w-[101px] h-[31px] bg-kok text-white pt-[6px] pb-[5px] rounded-[8px] justify-center text-base text-center font-semibold mb-[13px] ml-[30px]">{type}</p>
            <img src={img} alt="img" className="w-[335px] h-[324px] mb-[2px] ml-auto mr-auto" />
            <h2 className="text-kok font-semibold text-base mb-[13px] text-left pl-[30px]">{title}</h2>
            <div className="w-[274px] h-[1px] bg-kulrang ml-auto mr-auto mb-[6px]"></div>
            <div className="flex items-center justify-between ml-[14px] mr-[20px]">
                <div className="flex items-center gap-[8px]">
                    <p className="text-black/50 line-through text-base">{oldPrice}</p>
                    <p className="text-kok font-bold text-lg">{newPrice}</p>
                </div>
                <div className="flex items-center gap-[2px]">
                    <img src={star} alt="star_img" className="w-[19px] h-[18px]" />
                    <img src={star} alt="star_img" className="w-[19px] h-[18px]" />
                    <img src={star} alt="star_img" className="w-[19px] h-[18px]" />
                    <img src={star} alt="star_img" className="w-[19px] h-[18px]" />
                    <img src={star} alt="star_img" className="w-[19px] h-[18px]" />
                </div>
            </div>
        </div>
        </>
    )
};