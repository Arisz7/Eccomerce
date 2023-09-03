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
        <section className="flex">
            <div className='flex absolute flex-col px-4 rounded backdrop-blur-xl bg-white/50 min-h-screen w-60'>
                <div className='py-3 flex justify-end'>
                    <AiOutlineLeft size={26} className='cursor-pointer' />
                </div>
                <img src={logo} className='flex mx-7 h-[150px] w-[150px] mb-5 rounded-[46%] bg-black' alt="vannityHMO" />
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Color handleChange={handleChange} />
            </div>
        </section>
    </>
}

export default Sidebar