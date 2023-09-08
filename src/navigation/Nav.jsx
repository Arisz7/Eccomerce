import { FiShoppingCart } from "react-icons/fi";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { CartItem } from "../products/CartItem";
import "./Nav.css";
import Modal from "../components/Modal";
import CartContext from "../context/cart/CartContext";
import useWindowDimensions from "../hooks/useWindowDimension";

const Nav = ({ handleInputChange, query }) => {
    const { cartItems } = useContext(CartContext)
    const [openModal, setIsOpen] = useState(false);
    const { width, height } = useWindowDimensions()

    const checkout = async () => {
        await fetch(`http://localhost:8080/checkout`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cartItems })
        }).then((r) => {
            return r.json();
        }).then((r) => {
            if (r.url) {
                window.location.assign(r.url); // Forwarding user to stripe
            }
        })
    }

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
                <button className="search-btn hidden md:flex" href="#">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </i>
                </button>

            </div>


            <button onClick={() => setIsOpen(!openModal)} className="container-icon">
                <div className='nav-icons pt-2'>
                    <FiShoppingCart size={25} />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px]
                        rounded-full grid place-items-center text-white">{cartItems.length}</span>
                    )}
                </div>
                <Modal title="Accesorios" isOpen={openModal} onClose={() => setIsOpen(false)}>
                    {cartItems.map((p) => (
                        <CartItem data={p} key={p.id} />
                    ))}
                    {/*Sub total*/}

                    <div class="flex justify-between items-center mt-6 pt-6 border-t">
                        <div class="flex items-center">
                            <a href="/" class="flex text-lg pr-2 cursor-pointer">
                                <BsFillArrowLeftSquareFill color="black" size={30} />
                            </a>
                            <span class="text-lg  font-bold text-black">Continua comprando</span>
                        </div>

                        <div class="flex justify-center items-end">
                            <span class="text-m font-bold  mr-1">Total</span>
                            <span class="text-lg font-bold text-gray-800 "> ${total}.00 MX</span>
                        </div>
                    </div>
                    {
                        total ? <button type="button" onClick={() => checkout()} class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 w-full h-11 mt-10">
                            Comprar
                        </button>
                            : null}
                </Modal>
            </button>
        </nav >
    );
};

export default Nav;