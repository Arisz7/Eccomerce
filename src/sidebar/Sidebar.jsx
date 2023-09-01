import React, { useState } from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';
import logo from '/vannityhmo-modified.png'
import './Sidebar.css';
import { AiOutlineLeft } from 'react-icons/ai';

function Sidebar({ handleChange }) {
    const [collapsed, setSidebarCollapsed] = useState(false);
    return <>
        {/* SIDEBAR */}
        <section className="flex fixed z-1 w-[17%] flex-col items-center rounded backdrop-blur-xl bg-white/50 py-4">
            <i className='absolute right-5'>
                <AiOutlineLeft className='w-5 h-5' />
            </i>
            <img src={logo} className='object-cover h-[150px] w-[150px] mb-5 rounded-[46%] bg-black' alt="vannityHMO" />
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Color handleChange={handleChange} />
        </section>
    </>
}

export default Sidebar