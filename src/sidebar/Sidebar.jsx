import React, { useState } from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';
import logo from '/vannityhmo-modified.png'
import './Sidebar.css';
import control from '/control.png'
import { DiCodeigniter } from 'react-icons/di';

function Sidebar({ handleChange }) {
    const [open, setOpen] = useState(true);
    return <>
        <section className="flex absolute z-1 w-[17%] flex-col items-center rounded color-black">
            <img src={logo} className='object-cover h-[150px] w-[150px] mb-5' alt="vannityHMO" />
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Color handleChange={handleChange} />
        </section>

    </>
}

export default Sidebar