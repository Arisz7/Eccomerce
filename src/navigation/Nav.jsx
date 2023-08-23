import { FiShoppingCart } from "react-icons/fi";
import React, { useState } from "react";
import "./Nav.css";
import Modal from "../components/Modal";


const Nav = ({ handleInputChange, query }) => {
    const [openModal, setIsOpen] = useState(false);


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
                    <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px]
                        rounded-full grid place-items-center text-white">0</span>
                </div>
                <Modal title="Shopping cart" isOpen={openModal} onClose={() => setIsOpen(false)}>
                    
                </Modal>
            </button>
        </nav>

    );
};

export default Nav;