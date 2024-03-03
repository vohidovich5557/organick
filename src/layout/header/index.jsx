import React from "react";
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom'
import { navData } from "../../data/home";
import { Input } from "../../components/ui/input";
import searchIcon from '../../assets/icon/searchicon.svg';
import cartIcon from '../../assets/icon/cartIcon.svg';





export const Header = () => {
    return (
        <>
            <div className=" pl-[20px] pr-[20px] flex items-center justify-between mt-[39px] mb-[69px]">
                <nav className="flex items-center gap-[150px]">
                    <img src={logo} alt="img" className="logo_img" />
                    <ul className="flex items-center gap-[30px]">
                        {navData.map((item) => (
                            <>
                                <Link to={item.path} key={item.id}>
                                    <li className=" list-none hover:text-yashil">{item.name}</li>
                                </Link>
                            </>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-[24px]">
                    <form className=" relative rounded-[36px]">
                        <Input variant="primary" />
                        <img src={searchIcon} alt="icon" className=" absolute translate-x-[312px] top-[4px]" />
                    </form>
                    <div className="w-[159px] h-[66px] rounded-[33px] border border-kulrang flex items-center gap-[20px]">
                        <img src={cartIcon} alt="img" className="w-[56px] h-[56px]  translate-x-2" />
                        <p className=" text-kok text-md font-normal">Cart (0)</p>
                    </div>
                </div>
            </div>
        </>
    )
};