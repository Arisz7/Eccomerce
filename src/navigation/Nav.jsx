import { FiShoppingCart } from "react-icons/fi";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CartItem } from "../products/CartItem";
import "./Nav.css";
import '../products/CartItem.css'
import Modal from "../components/Modal";
import CartContext from "../context/cart/CartContext";

const Nav = ({ handleInputChange, query }) => {
    const { cartItems } = useContext(CartContext)
    const [openModal, setIsOpen] = useState(false);


    let opts = { format: '%s%v', symbol: "$" }

    let total = cartItems.reduce(
        ((acc, item) => acc + item.quantity * item.newPrice), 0, opts);

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
                <Modal title="Carrito" isOpen={openModal} onClose={() => setIsOpen(false)}>
                    <div className="cart">
                        <div className="cartItems">
                            {cartItems.map((p) => (
                                <CartItem data={p} />
                            ))}
                            <div className="cart-total">
                                Cart Total: {total}
                            </div>
                        </div>
                    </div>
                </Modal>
            </button>
        </nav >
    );
};

export default Nav;