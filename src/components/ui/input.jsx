import React from "react";
import clsx from "clsx";





export const Input = React.forwardRef(
    (
        {
            name,
            placeholder,
            value,
            onChange,
            id,
            type,
            label,
            error,
            helperText,
            variant,
            clasname,
            ...resTprop
        },
        ref,
    ) => {
        return (
            <div className="flex flex-col  text-left ml-auto mr-auto">
                {label && <label htmlFor={id}>{label}</label>}
                <input 
                {...resTprop}
                 className={clsx(" outline-none pl-[20px] text-md", {
                    "w-[376px] h-[66px] rounded-[36px] bg-oq":variant == "primary",
                    " w-[349px] h-[80px] bg-white rounded-[16px]":variant == "secondary",
                 }, clasname)}
                 ref={ref}
                 value={value}
                 onChange={onChange}
                 name={name}
                 id={id}
                 placeholder={placeholder}
                 type={type}
                 
                />
                {helperText && <p className=" text-red-700 text-xs text-left mt-[-15px]">{helperText}</p>}
            </div>
        )
    }
)