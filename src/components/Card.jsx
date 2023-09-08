import React, { useContext } from "react";
import '../sidebar/Sidebar.css'
import CartContext from "../context/cart/CartContext";

const Card = ({ item }) => {
    const { addToCart } = useContext(CartContext)

    return (
        <>
            <section className="card p-5 m-5 min-w-[400px] lg:items-center lg:min-w-[200px] lg:p-5 lg:m-5 rounded-lg">
                <img src={item.img} alt={item.title} className="card-img min-w-[340px] lg:min-w-[200px] "/>
                <div className="card-details">
                    <h3 className="card-title">{item.title}</h3>
                    <section className="card-reviews">
                        {item.star} {item.star} {item.star} {item.star}
                        <span className="total-reviews">{item.reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{item.prevPrice}</del> {item.newPrice}
                        </div>
                        <button onClick={() => addToCart(item)} className="check-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Card;