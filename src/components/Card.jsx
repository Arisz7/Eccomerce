import React, { useContext, useEffect } from "react";
import '../products/Products.css'
import CartContext from "../context/cart/CartContext";

const Card = ({ item }) => {
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
    }, [addToCart])


    return (

        <>
            <div class="flex lg:flex-row flex-row-reverse lg:pr-2 pr-40">
                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-white/50 rounded-lg max-w-lg shadow-lg">
                    <div class="relative pt-10 px-10 flex items-center justify-center">
                        <div class="block absolute bottom-0 left-0 -mb-24 ml-3">
                        </div>
                        <img class="relative h-[250px] w-[210px]" src={item.img} alt="" />
                    </div>
                    <div class="relative text-black text-xl px-6 pb-6 mt-6">
                        <span class="block font-semibold mb-4">{item.title}</span>
                        <div class="flex justify-between">
                            <span class="flex justify-center -mb-1">{item.star} {item.star} {item.star} {item.star}</span>
                            <span class=" bg-black/50 rounded-full text-black text-1xl font-bold px-3 py-2 leading-none flex items-center">${item.newPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Card;