import React, { useContext } from "react";
import '../sidebar/Sidebar.css'
import CartContext from "../context/cart/CartContext";

const Card = ({ item }) => {
    const { addToCart } = useContext(CartContext)

    return (
        <>
            <section
                class="w-fit mx-auto grid grid-cols-3 lg:grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-y-20 lg:p-2 gap-x-14 mt-10 mb-5">
                <div class="w-72 -z-20 card shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
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
            </section>
        </>
    );
};

export default Card;