import React from "react";
import clsx from "clsx";



export const Button = ({variant, children, icon: Icon}) => {
    return (
        <button className={clsx("flex items-center gap-[10px] justify-center", {
            "w-[220px] h-[79px] bg-sariq rounded-[16px] text-center flex flex-row-reverse text-xl text-kok font-bold":variant == "primary",
            "w-[220px] h-[79px] bg-kok  rounded-[16px] text-center flex flex-row-reverse text-xl text-oq font-bold":variant == "secondary",
            "w-[220px] h-[79px] bg-white border border-kok text-center rounded-[16px] flex flex-row-reverse":variant == "third",
            "w-[363px] h-[80px] bg-kok rounded-[16px] text-center text-white text-xl font-bold": variant == "fifth",
            "w-[309px] h-[80px] bg-ochyashil rounded-[16px] text-center text-kok font-bold ": variant == "whitebtn"
        })}>
            {Icon ? Icon : ""}
            <span>
                {children}
            </span>
        </button>
    )
}