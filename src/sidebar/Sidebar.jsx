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

  console.log(height)

  return (
    <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-black/50 border-t'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto'>
        <button type="button" className='inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 group'>
          <span><Category handleChange={handleChange} shown={shown} /></span>
        </button>
        <button type="button">
          <span>Wallet</span>
        </button>
        <button type="button">
          <span>Settings</span>
        </button>
        <button type="button">
          <span>Profile</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar