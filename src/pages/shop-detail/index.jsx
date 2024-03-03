import React from "react";
import { Link, useParams } from "react-router-dom";
import { shopData } from "../../data/home";
import { useScrollTop } from '../../hooks/scrollup/useScrollup';
import detailBg from '../../assets/detailBg.png';
import { Button } from "../../components/ui/button";
import { Arrow } from '../../assets/icon/arrow';
import { ProductCard } from "../../components/cards/product-card";


export const ShopDetails = () => {

    const [count, setCount] = React.useState(0);


    const increament = () => {
        setCount(count + 1);
    };

    const params = useParams();

    const result = shopData[params.slug].find((item) => item.id == params.id)

    console.log(params);

    console.log(result);

    useScrollTop();
    return (
        <>
            <div className="w-full h-[450px] relative flex items-center justify-center mb-[114px]">
                <img src={detailBg} alt="img" className=" absolute w-full -z-10" />
                <h2 className=" text-kok text-5xl font-extrabold">Shop Single</h2>
            </div>
            <div className="flex relative items-center justify-center gap-[20px] mb-[90px]">
                <div className="w-[408px]">
                    <img src={result.img} alt="img" />
                    <p className=" absolute top-0 text-white w-[73px] h-[31px] bg-kok text-center rounded-[8px] pt-[3px]">{result.type}</p>
                </div>
                <div className="flex flex-col text-left">
                    <h2 className="text-kok text-4xl font-semibold mb-[9px]">{result.title}</h2>
                    <div className="flex items-center gap-[2px] mb-[13px]">
                        <img src={result.star} alt="img" />
                        <img src={result.star} alt="img" />
                        <img src={result.star} alt="img" />
                        <img src={result.star} alt="img" />
                        <img src={result.star} alt="img" />
                    </div>
                    <div className="flex items-center gap-[9px] mb-[30px]">
                        <p className="text-black/50 line-through text-base">{result.oldPrice}</p>
                        <p className="text-kok font-bold text-lg">{result.newprice}</p>
                    </div>
                    <p className="w-[658px] text-left text-black/50 mb-[35px]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[22px]">
                            <h3 className="text-2xl text-kok font-semibold">Quantity :</h3>
                            <div className="w-[134px] flex items-center justify-center h-[60px] border-2 border-kok rounded-[16px]">
                                <button onClick={increament} className="w-[134px] h-[60px]">
                                    <p className="text-2xl text-kok font-extrabold">{count}</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <Button variant="secondary" icon={<Arrow />}>
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-[20px] justify-center mb-[27px]">
                    <Button variant="fifth">
                        Product Description
                    </Button>
                    <Button variant="whitebtn">
                    Additional Info
                    </Button>
                </div>
                <p className="w-[1137px] text-center text-black/50 ml-auto mr-auto mb-[140px]">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-kok text-5xl font-extrabold mb-[40px]">Related Products</h2>
                <div className="grid grid-cols-4 gap-[20px]">
                    {shopData[params.slug].map((item) => (
                        <Link to={`/product/${item.id}/${params.slug}`}>
                        <ProductCard 
                         img={item.img}
                         type={item.type}
                         oldPrice={item.oldPrice}
                         newPrice={item.newprice}
                         title={item.title}
                         star={item.star}
                        />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
};