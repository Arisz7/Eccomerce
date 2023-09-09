import React, { useState } from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';
import logo from '/vannityhmo-modified.png'
import './Sidebar.css';
import { FcLike } from 'react-icons/fc';
import useWindowDimensions from '../hooks/useWindowDimension';


function Sidebar({ handleChange }) {
  const [shown, setIsShown] = useState(false)
  const { width, height } = useWindowDimensions()

  console.log(width, height)

  const handleOnChange = () => {
    setIsShown(shown => !shown)
  }

  return <>
    <div
      style={{ width: !shown && width >= 360 && width < 1920 ? '0px' : "300px" }}
      className={`flex fixed rounded-lg h-full lg:h-screen px-4 py-8 overflow-y-auto bg-white/50 duration-500`}
    >
      <div style={{ display: !shown && height >= 236 && height < 342 ? "hidden" : "visible" }} className='flex flex-col gap-1 pt-10 ml-10 font-medium'>
        <img src={logo} className='mb-16 h-[170px] w-[170px] rounded-[46%] bg-black' alt="vannityHMO" />
        <Category handleChange={handleChange} shown={shown} />
        <Price handleChange={handleChange} shown={shown} />
        <Color handleChange={handleChange} shown={shown} />
      </div>
    </div>
    <button className={`fixed lg:hidden bg-white/50 z-90 justify-center items-center bottom-10 right-10 w-10 h-10 rounded-full drop-shadow-lg flex duration-500`} onClick={handleOnChange}>
      <FcLike size={26} className='cursor-pointer' />
    </button>
  </>
}

export default Sidebar