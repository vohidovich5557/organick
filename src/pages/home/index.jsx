import React from "react";
import bgImg from '../../assets/bgImg.png';
import { Button } from "../../components/ui/button";
import { Arrow } from '../../assets/icon/arrow';
import { cardInfo, circleData, newData, organicData, } from "../../data/home";
import { shopData } from "../../data/home";
import { HeroCard } from "../../components/cards/hero-card";
import aboutImg from '../../assets/aboutImg.png';
import { UsImg1 } from '../../assets/icon/usImg1';
import { UsImg2 } from '../../assets/icon/usImg2';
import { ProductCard } from "../../components/cards/product-card";
import girlImg from '../../assets/girlImg.png';
import star from '../../assets/icon/star.svg';
import testimonalBg from '../../assets/testimonalBg.png';
import { TestimonalCard } from "../../components/cards/testimonal-card";
import ecoBg from '../../assets/ecoBg.png';
import { OrganicCard } from "../../components/cards/organic-card";
import { NewsCard } from "../../components/cards/news-card";
import { Link } from "react-router-dom";



export const Home = () => {
    return (
        <>
            <section className="banner">
                <div className=" w-full relative pl-0 h-[898px] mb-[100px]">
                    <img src={bgImg} alt="imgbg" className=" absolute h-[898px] -z-10 w-full" />
                    <div className="flex flex-col pl-[100px] pt-[120px]">
                        <p className="text-4xl text-yashil mb-[8px]">100% Natural Food</p>
                        <h2 className="w-[550px] h-[246px] text-left text-7xl font-extrabold text-kok mb-[23px]">Choose the best
                            healthier way
                            of life</h2>
                        <Button variant="primary" icon={<Arrow />}>
                            Explore Now
                        </Button>
                    </div>
                </div>
            </section>
            <section className="card">
                <div className="container flex items-center gap-[36px] justify-center mb-[150px]">
                    {cardInfo.map((item) => (
                        <HeroCard
                            aos={item.aos}
                            title={item.title}
                            text={item.text}
                            id={item.id}
                            img={item.img}
                        />
                    ))}
                </div>
            </section>
            <section className="about bg-oq">
                <div className=" bg-oq pt-[104px] pb-[117px] w-full flex  items-center justify-between mb-[170px]">
                    <img src={aboutImg} alt="img" className="w-[700px] h-[784px]" />
                    <div className="flex flex-col justify-normal">
                        <p className="text-4xl font-normal text-yashil mb-[8px]" data-aos="fade-left">About Us</p>
                        <h2 className="w-[748px] h-[118px] text-left text-6xl text-kok mb-[14px]" data-aos="fade-left" data-aos-delay="300">We Believe in Working
                            Accredited Farmers</h2>
                        <p className="w-[690px] h-[90px] text-left text-black/50 mb-[48px]" data-aos="fade-left" data-aos-delay="400">Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div>
                            <div className="flex items-center gap-[19px] mb-[30px]" data-aos="fade-left" data-aos-delay="400">
                                <div className="w-[101px] h-[101px] bg-white rounded-[20px] flex items-center justify-center">
                                    <UsImg1 />
                                </div>
                                <div className="flex flex-col text-left">
                                    <h3 className="text-2xl text-kok font-extrabold mb-[7px]">Organic Foods Only</h3>
                                    <p className="w-[444px] text-left text-black/50 ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[19px] mb-[30px]" data-aos="fade-left" data-aos-delay="500">
                                <div className="w-[101px] h-[101px] bg-white rounded-[20px] flex items-center justify-center">
                                    <UsImg2 />
                                </div>
                                <div className="flex flex-col text-left">
                                    <h3 className="text-2xl text-kok font-extrabold mb-[7px]">Quality Standards</h3>
                                    <p className="w-[444px] text-left text-black/50 ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                            <Link to={`/shop`} data-aos="fade-left" data-aos-delay="600">
                                <Button variant="secondary" icon={<Arrow />}>Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products">
                <div className=" pl-[20px] pr-[20px] flex flex-col items-center justify-center mb-[200px]">
                    <p className="text-4xl font-normal text-yashil mb-[8px]">Categories </p>
                    <h2 className="text-5xl text-kok font-extrabold mb-[40px]">Our Products</h2>
                    <div className="w-full grid grid-cols-4 gap-[20px] mb-[122px]">
                        {shopData.productData.map((item) => (
                            <Link key={item.id} to={`/product/${item.id}/productData`}>
                                <ProductCard
                                    aos={item.aos}
                                    img={item.img}
                                    type={item.type}
                                    star={item.star}
                                    title={item.title}
                                    oldPrice={item.oldPrice}
                                    newPrice={item.newprice}
                                />
                            </Link>
                        ))}
                    </div>
                    <Button variant="secondary" icon={<Arrow />}>
                        Load More
                    </Button>
                </div>
            </section>
            <section className="testimonal">
                <div className=" relative w-full h-[1267px]">
                    <img src={testimonalBg} alt="img" className=" absolute -z-10 w-full" />
                    <div className="flex flex-col items-center pt-[164px]">
                        <p className="text-yashil font-normal text-4xl mb-[8px]">Testimonial</p>
                        <h2 className="text-kok font-extrabold text-5xl mb-[51px]">What Our Customer Saying?</h2>
                        <img src={girlImg} alt="img" className="w-[126px] h-[124px] rounded-[66px] mb-[20px]" />
                        <div className="flex items-center gap-[2px] mb-[25px]">
                            <img src={star} alt="star" className="w-[28px] h-[26px]" />
                            <img src={star} alt="star" className="w-[28px] h-[26px]" />
                            <img src={star} alt="star" className="w-[28px] h-[26px]" />
                            <img src={star} alt="star" className="w-[28px] h-[26px]" />
                            <img src={star} alt="star" className="w-[28px] h-[26px]" />
                        </div>
                        <p className="w-[636px] h-auto text-center text-black/50 mb-[20px]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <h2 className="text-center text-kok font-semibold text-3xl mb-[3px]">Sara Taylor</h2>
                        <p className="text-center text-black/50 mb-[19px]">Consumer</p>
                        <div className="flex items-center gap-[6px] justify-center mb-[20px]">
                            <span className="w-[8px] h-[8px] bg-kulrang rounded-[10px] active:bg-yashil"></span>
                            <span className="w-[8px] h-[8px] bg-kulrang rounded-[10px] active:bg-yashil"></span>
                            <span className="w-[8px] h-[8px] bg-kulrang rounded-[10px] active:bg-yashil"></span>
                        </div>
                        <div></div>
                        <div className="flex items-center gap-[62px]">
                            {circleData.map((item) => (
                                <TestimonalCard
                                    precent={item.precent}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="offer bg-kok">
                <div className=" flex flex-col bg-kok pl-[20px] pr-[20px] pb-[200px] ml-[auto] mr-[auto] pt-[200px] justify-center">
                    <p className="text-yashil font-normal text-4xl text-left mb-[8px]">Offer</p>
                    <div className="flex items-center gap-[200px] mb-[50px]">
                        <h2 className="text-white font-extrabold text-5xl">We Offer Organic For You</h2>
                        <Button variant="primary" icon={<Arrow />}>
                            View All Product
                        </Button>
                    </div>
                    <div className="grid grid-cols-4 gap-[30px] justify-center">
                        {shopData.offerData.map((item) => (
                            <Link key={item.id} to={`/product/${item.id}/offerData`}>
                                <ProductCard
                                    aos={item.aos}
                                    img={item.img}
                                    type={item.type}
                                    star={item.star}
                                    title={item.title}
                                    oldPrice={item.oldPrice}
                                    newPrice={item.newprice}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="eco">
                <div className="container relative flex items-center">
                    <img src={ecoBg} alt="img" />
                    <div className=" absolute w-[789px] h-[723px] bg-white rounded-[20px] translate-x-[400px] pl-[89px] pt-[78px]">
                        <p className="text-4xl text-yashil font-normal mb-[8px]" data-aos="fade-left">Eco Friendly</p>
                        <h2 className="w-[700px] text-left text-kok text-5xl font-extrabold mb-[36px]" data-aos="fade-left" data-aos-delay="200">Econis is a Friendly
                            Organic Store</h2>
                        <div className="w-[603px] h-[60px] flex flex-col justify-start mb-[35px]" data-aos="fade-left" data-aos-delay="300">
                            <h3 className="text-kok text-2xl font-medium mb-[7px] ">Start with Our Company First</h3>
                            <p className="w-[635px] text-left text-black/50">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                        </div>
                        <div className="w-[603px] h-[60px] flex flex-col justify-start mb-[35px]" data-aos="fade-left" data-aos-delay="400">
                            <h3 className="text-kok text-2xl font-medium mb-[7px] ">Learn How to Grow Yourself</h3>
                            <p className="w-[635px] text-left text-black/50">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                        </div>
                        <div className="w-[603px] h-[60px] flex flex-col justify-start mb-[35px]" data-aos="fade-left" data-aos-delay="500">
                            <h3 className="text-kok text-2xl font-medium mb-[7px] ">Farming Strategies of Today</h3>
                            <p className="w-[635px] text-left text-black/50">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="organic w-full bg-ochyashil">
                <div className="grid grid-cols-3 pl-[20px] pr-[20px] justify-between gap-[42px] pt-[87px] pb-[187px]">
                    {organicData.map((item) => (
                        <OrganicCard
                            img={item.img}
                            title={item.text}
                        />
                    ))}
                </div>
            </section>
            <section className="news">
                <div className=" flex flex-col pl-[20px] pr-[20px] items-left mb-[117px] justify-center">
                    <p className="text-yashil text-4xl font-normal mb-[8px]">News</p>
                    <div className="flex items-center gap-[478px] mb-[45px] justify-between">
                        <h2 className="text-kok text-5xl w-[702px] text-left font-extrabold">Discover weekly content about organic food, & more</h2>
                        <Button variant="third" icon={<Arrow />}>
                            More News
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-[46px]  mb-[185px]">
                        {newData.map((item) => (
                            <NewsCard
                                img={item.img}
                                name={item.name}
                                text2={item.text2}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
};