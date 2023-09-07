import React, { useEffect, useState } from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';
import logo from '/vannityhmo-modified.png'
import './Sidebar.css';
import { FcLike } from 'react-icons/fc';
import useWindowDimensions from '../hooks/useWindowDimension';


function Sidebar({ handleChange }) {
  const [shown, setIsShown] = useState(false)

  const handleOnChange = () => {
    setIsShown(prev => !prev)
  }

  const { width, height } = useWindowDimensions()

  const sidebarStyles = {
    filter: 'drop-shadow(10px 0 10px #00000030)'
  };

  return <>
    <div
      style={{ width: !shown && width == "498" ? "0px" : "300px"}}
      class="fixed inset-y-0 flex duration-500"
      handleOnChange={handleOnChange}
    >
      <svg
        class='flex flex-col text-white/50 h-full backdrop-blur-xl'
        style={sidebarStyles}
        preserveAspectRatio="none"
        viewBox="0 0 309 800"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"

        />
      </svg>
      <div style={{ visibility: !shown && height == "311" ? "hidden" : "visible"}} className='absolute items-center font-medium'>
        <img src={logo} className='h-[150px] w-[150px] mb-5 rounded-[46%] bg-black' alt="vannityHMO" />
        <Category handleChange={handleChange} shown={shown} />
        <Price handleChange={handleChange} shown={shown} />
        <Color handleChange={handleChange} shown={shown} />
      </div>
    </div >
    <button className={`fixed lg:hidden bg-white/50 z-90 justify-center items-center bottom-10 right-10 w-10 h-10 rounded-full drop-shadow-lg flex duration-500`} onClick={handleOnChange}>
      <FcLike size={26} className='cursor-pointer' />
    </button>
  </>
}

export default Sidebar