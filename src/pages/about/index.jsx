import React from "react";
import aboutBanner from '../../assets/bannerAbout.png';
import aboutUS from '../../assets/aboutUS.png';
import { UsIcon } from '../../assets/icon/us_icon';
import { UsIcon2 } from '../../assets/icon/us_icon2';
import { Button } from "../../components/ui/button";
import { Arrow } from "../../assets/icon/arrow";
import chooseImg from '../../assets/chooseImg.png';
import { chooseData, teamData, us2Data } from "../../data/about";
import { ChooseCard } from "../../components/cards/choose-card";
import { TeamCard } from "../../components/cards/team-card";
import { Us2card } from "../../components/cards/us2-card";





export const About = () => {
    return (
        <>
            <section className="banner">
                <div className=" relative h-[450px] flex flex-col items-center mt-[30px]  justify-center mb-[70px]">
                    <img src={aboutBanner} alt="img" className="w-full -z-10 absolute" />
                    <h2 className="text-kok text-5xl font-extrabold">About Us</h2>
                </div>
            </section>
            <section className="about_us">
                <div className=" flex items-center justify-between gap-[53px] pl-[20px] pr-[20px] mb-[70px]">
                    <img src={aboutUS} alt="img" className="" />
                    <div className="flex flex-col text-left">
                        <p className="text-yashil text-4xl font-normal mb-[8px]">About Us</p>
                        <h2 className="w-[674px] text-left text-kok text-5xl font-extrabold mb-[14px]">We do Creative
                            Things for Success</h2>
                        <p className="w-[671px] h-[210px] text-left text-black/50 ">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. <br />

                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div className="flex items-center gap-[30px] mb-[58px]">
                            <div className="flex items-center gap-[15px]">
                                <UsIcon />
                                <h3 className="text-kok text-2xl font-semibold w-[300px] h-[62px] text-left">Modern Agriculture Equipment</h3>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <UsIcon2 />
                                <h3 className="text-kok text-2xl font-semibold w-[300px] h-[62px] text-left">No growth hormones are used</h3>
                            </div>
                        </div>
                        <Button variant="secondary" icon={<Arrow />}>
                            Explore More
                        </Button>
                    </div>
                </div>
            </section>
            <section className="choose bg-oq">
                <div className=" bg-oq w-full pt-[20px] pl-[20xp] pr-[20px] pb-[189px]">
                   <div className="flex justify-center items-center gap-[51px] mb-[91px]">
                   <div className="flex flex-col text-left">
                        <p className="text-yashil text-4xl font-normal mb-[6px] ">Why Choose us?</p>
                        <h2 className="text-kok text-5xl font-extrabold w-[524px] text-left mb-[25px]">We do not buy from the
                            open market & traders.</h2>
                        <p className="w-[671px] text-left text-black/50 mb-[36px]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                        <div className="w-[391px] h-[81px] bg-kulrang pt-[29px] pb-[29px] pl-[27px] rounded-[49px] flex items-center gap-[7px] mb-[12px]">
                            <div className="w-[19px] h-[19px] border-4 border-yashil rounded-[50px]">
                            </div>
                            <p className="text-kok text-2xl font-semibold">100% Natural Product</p>
                        </div>
                        <p className="w-[444px] h-[60px] text-left text-black/50 pl-[60px] mb-[24px]">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        <div className="w-[391px] h-[81px] bg-kulrang pt-[29px] pb-[29px] pl-[27px] rounded-[49px] flex items-center gap-[7px] mb-[12px]">
                            <div className="w-[19px] h-[19px] border-4 border-yashil rounded-[50px]">
                            </div>
                            <p className="text-kok text-2xl font-semibold"> Increases resistance</p>
                        </div>
                        <p className="w-[444px] h-[60px] text-left text-black/50 pl-[60px] mb-[24px]">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                    </div>
                    <img src={chooseImg} alt="img" className=" rounded-[50px]" />
                   </div>
                   <div className=" grid grid-cols-4 justify-between items-center pl-[20px] gap-[30px]">
                    {chooseData.map((item) => (
                        <ChooseCard 
                         img={item.img}
                         title={item.title}
                         text={item.text}
                        />
                    ))}
                   </div>
                </div>
            </section>
            <section className="team">
                <div className="container flex flex-col items-center justify-center pt-[117px] mb-[202px]">
                  <p className="text-yashil text-4xl font-normal mb-[2px]">Team</p>
                  <h2 className="text-kok text-5xl font-extrabold mb-[16px]">Our Organic Experts</h2>
                  <p className="w-[852px] h-[60px] text-center text-black/50 text-lg mb-[42px]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                  <div className="flex items-center justify-center gap-[27px]">
                    {teamData.map((item) => (
                        <TeamCard 
                         img={item.img}
                         title={item.title}
                         text={item.text}
                        />
                    ))}
                  </div>
                </div>
            </section>
            <section className="usoffer bg-kok w-full h-[892px] mb-[110px]">
                <div className=" flex flex-col items-center justify-center pt-[188px]">
                    <p className="text-yashil text-4xl font-normal">About Us</p>
                    <h2 className="text-white text-5xl font-extrabold mb-[22px]">What We Offer for You</h2>
                    <div className="grid grid-cols-4 gap-[20px]">
                        {us2Data.map((item) => (
                            <Us2card 
                            img={item.img}
                            title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};