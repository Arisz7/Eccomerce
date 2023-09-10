import React, { useContext, useEffect } from "react";
import '../products/Products.css'
import CartContext from "../context/cart/CartContext";

const Card = ({ item }) => {
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
    }, [addToCart])


    return (
        <>
            <div
                class="mx-auto mb-10">
                <div class="lg:flex-col flex hover:bg-black/50 bg-white/50 lg:w-65 -z-20 shadow-md rounded-xl duration-500 hover:scale-[1.2] hover:shadow-xl">
                    <img src={item.img}
                        alt={item.title} class="card-img w-72 rounded-lg p-6" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize">{item.title}</p>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">${item.newPrice}</p>
                            <del>
                                <p class="text-lg text-gray-600 cursor-auto ml-2">${item.prevPrice}</p>
                            </del>
                            <button onClick={() => addToCart(item)} className="check-out ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Card;