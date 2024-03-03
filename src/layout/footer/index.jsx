import React from "react";
import logo from '../../assets/logo.svg';
import insta from '../../assets/icon/insta.svg';
import facebook from '../../assets/icon/facebook.svg';
import twitter from '../../assets/icon/twitter.svg';
import pinsart from '../../assets/icon/pinsart.svg';
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import formBg from '../../assets/fromBg.png';





export const Footer = () => {

    return (
        <>
            <div className=" flex flex-col  items-center justify-center">
            <div className="w-full  mb-[117px] h-[323px] relative flex justify-center">
                    <img src={formBg} alt="img" className="w-full h-[323px] -z-10 absolute" />
                    <div className="flex items-center gap-[326px] pt-[100px] pl-[71px]">
                        <h2 className="text-white text-5xl w-[357px] text-left font-extrabold">Subscribe to
                            our Newsletter
                        </h2>
                        <form className="flex items-center gap-[6px]">
                            <Input placeholder="Your Email Address" variant="secondary" />
                            <Button variant="secondary">
                                Subscribe
                            </Button>
                        </form>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                <div className="flex flex-col text-right">
                    <h2 className="text-kok font-extrabold text-3xl mb-[32px] ">Contact Us</h2>
                    <div className="flex flex-col text-right">
                        <h3 className="font-normal text-gray-500 mb-[8px] text-lg">Email</h3>
                        <p className="text-black/50 text-base">needhelp@Organia.com</p>
                    </div>
                    <div className="flex flex-col text-right">
                        <h3 className="font-normal text-gray-500 mb-[8px] text-lg">Phone</h3>
                        <p className="text-black/50 text-base">666 888 888</p>
                    </div>
                    <div className="flex flex-col text-right">
                        <h3 className="font-normal text-gray-500 mb-[8px] text-lg">Address</h3>
                        <p className="text-black/50 text-base">88 road, borklyn street, USA</p>
                    </div>
                </div>
                <div className="w-[1px] h-[336px] bg-kulrang ml-[50px] mr-[41px]"></div>
                <div className="flex flex-col items-center">
                    <img src={logo} alt="img" className="mb-[26px] w-[198px] h-[53px] " />
                    <p className="text-black/50 text-lg w-[543px] text-center mb-[49px]">Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing </p>
                    <div className="flex items-center gap-[15px] justify-center">
                        <div className="w-[60px] h-[60px] bg-kulrang rounded-[50px] flex justify-center items-center">
                            <img src={insta} alt="img" className="w-[19px] h-[18px]" />
                        </div>
                        <div className="w-[60px] h-[60px] bg-kulrang rounded-[50px] flex justify-center items-center">
                            <img src={facebook} alt="img" className="w-[19px] h-[18px]" />
                        </div>
                        <div className="w-[60px] h-[60px] bg-kulrang rounded-[50px] flex justify-center items-center">
                            <img src={twitter} alt="img" className="w-[19px] h-[18px]" />
                        </div>
                        <div className="w-[60px] h-[60px] bg-kulrang rounded-[50px] flex justify-center items-center">
                            <img src={pinsart} alt="img" className="w-[19px] h-[18px]" />
                        </div>
                    </div>
                </div>
                <div className="w-[1px] h-[336px] bg-kulrang ml-[50px] mr-[41px]"></div>
                <div className="flex flex-col text-left">
                    <h2 className="text-kok text-3xl font-bold mb-[24px]">Utility Pages</h2>
                    <ul className="flex flex-col gap-[10px]">
                        <li className="text-base text-black/50 font-normal">Style Guide</li>
                        <li className="text-base text-black/50 font-normal">404 Not Found</li>
                        <li className="text-base text-black/50 font-normal">Password Protected</li>
                        <li className="text-base text-black/50 font-normal">Licences</li>
                        <li className="text-base text-black/50 font-normal">Changelog</li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
};



