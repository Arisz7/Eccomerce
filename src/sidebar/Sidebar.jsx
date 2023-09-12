import React, { useState } from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';
import logo from '/vannityhmo-modified.png'
import './Sidebar.css';
import { FcLike } from 'react-icons/fc';
import useWindowDimensions from '../hooks/useWindowDimension';
import { NavItem } from 'react-bootstrap';


function Sidebar({ handleChange }) {
  const [shown, setIsShown] = useState(false)
  const { width, height } = useWindowDimensions()

  const handleOnChange = () => {
    setIsShown(shown => !shown)
  }

  return (
    <div>
      
    </div>
  )
}

export default Sidebar