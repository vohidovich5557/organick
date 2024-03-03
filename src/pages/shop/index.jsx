import React from "react";
import shopBg from '../../assets/shopBg.png';
import { shopData } from "../../data/home";
import { ProductCard } from '../../components/cards/product-card';
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/scrollup/useScrollup";


export const Shop = () => {

    useScrollTop();
    return (
        <>
            <section className="shop">
                <div className="relative h-[450px] flex justify-center items-center mb-[90px]">
                    <img src={shopBg} alt="img" className=" absolute w-full h-[450px] -z-10" />
                    <h2 className="text-kok text-5xl font-extrabold ">Shop</h2>
                </div>
            </section>
            <section className="shopCard">
                <div className="grid grid-cols-4 gap-[20px] mb-[140px]">
                    {shopData.productData.map((item) => (
                        <Link key={item.id} to={`/product/${item.id}/productData`}>
                            <ProductCard
                                img={item.img}
                                type={item.type}
                                star={item.star}
                                title={item.title}
                                oldPrice={item.oldPrice}
                                newPrice={item.newprice}
                            />
                        </Link>
                    ))}
                    {shopData.offerData.map((item) => (
                        <Link key={item.id} to={`/product/${item.id}/offerData`}>
                            <ProductCard
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
            </section>
        </>
    )
};