import { FiShoppingCart } from "react-icons/fi";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CartItem } from "../products/CartItem";
import "./Nav.css";
import Modal from "../components/Modal";
import CartContext from "../context/cart/CartContext";

const Nav = ({ handleInputChange, query }) => {
    const { cartItems } = useContext(CartContext)
    const [openModal, setIsOpen] = useState(false);

    let total = cartItems.reduce(
        ((acc, item) => acc + item.quantity * item.newPrice), 0);


    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Buscar"
                />
                <button className="search-btn" href="#">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </i>
                </button>
            </div>

            <button onClick={() => setIsOpen(!openModal)} className="container-icon">
                <div className='nav-icons'>
                    <FiShoppingCart size={25} />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px]
                        rounded-full grid place-items-center text-white">{cartItems.length}</span>
                    )}
                </div>

                <Modal title="Shopping Cart" isOpen={openModal} onClose={() => setIsOpen(false)}>
                    {cartItems.map((p) => (
                        <CartItem data={p} key={p.id} />
                    ))}
                    {/*Sub total*/}

                    <div class="h-50 rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <hr class="my-4" />
                        {total.length !== 0 ?
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">${total}MX</p>
                                </div>
                            </div>
                            : ''}
                        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </Modal>

            </button>
        </nav >
    );
};

export default Nav;