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

  const handleOnChange = () => {
    setIsShown(shown => !shown)
  }

  return (
    <div style={{
      width: !shown && width >= 360 && width < 1920 ? '0px' : "300px",
      display: !shown && width >= 360 && width < 1920 ? 'hidden' : "visible"
    }}
      className='fixed h-full w-72 pt-20 justify-center bg-black/50'>
      <img className='flex ml-6 w-[200px] h-[200px]' src={logo} alt="" />
        <Category handleChange={handleChange} shown={shown} />
        <Price handleChange={handleChange} shown={shown} />
        <Color handleChange={handleChange} shown={shown} />
      <button className={`fixed lg:hidden bg-white/50 z-90 justify-center items-center bottom-10 right-10 w-10 h-10 rounded-full drop-shadow-lg flex duration-500`} onClick={handleOnChange}>
        <FcLike size={26} className='cursor-pointer' />
      </button>
    </div>
  )
}

export default Sidebar