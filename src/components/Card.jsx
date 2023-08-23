import React, { useState } from "react";
import '../sidebar/Sidebar.css'


const Card = ({ img, title, star, item, reviews, quantity, prevPrice, newPrice, onAddProduct }) => {
    quantity = 0

    return (
        <>
            <section className="card">
                <img src={img} alt={title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                        {star} {star} {star} {star}
                        <span className="total-reviews">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div onClick={() => onAddProduct(item)} className="check-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Card;