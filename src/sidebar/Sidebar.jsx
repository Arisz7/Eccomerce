import React, { useState } from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';
import logo from '/vannityhmo-modified.png'
import './Sidebar.css';
import { FcLike } from 'react-icons/fc';

function Sidebar({ handleChange }) {
    const [collapsed, setSidebarCollapsed] = useState(false);

    const sidebarStyles = {
        filter: 'drop-shadow(10px 0 10px #00000030)'
    };

    return  <>
    <div
          x-transition:enter="transform transition-transform duration-300"
          x-transition:enter-start="-translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave="transform transition-transform duration-300"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="-translate-x-full"
          class="fixed inset-y-0 z-20 flex w-80"
        >
          <svg
            class={`flex flex-col text-white/50 h-full backdrop-blur-xl  ${!collapsed ? 'w-80' : 'w-0'} duration-500`}
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
         
         <div className='lg:w-72 h-screen absolute duration-500 w-48'>
         <div className='fixed lg:hidden bg-white/50 z-90 justify-center items-center bottom-10 right-10 w-10 h-10 rounded-full drop-shadow-lg flex duration-300'>
                <FcLike size={26} className='cursor-pointer' onClick={() => setSidebarCollapsed(!collapsed)} />
            </div>
                <img src={logo} className={`h-[150px] w-[150px] mb-5 rounded-[46%] bg-black ${collapsed && 'opacity-0 translate-x-28'}`} alt="vannityHMO" />
                <Category handleChange={handleChange} collapsed={collapsed} />
                <Price handleChange={handleChange} collapsed={collapsed} />
                <Color handleChange={handleChange} collapsed={collapsed} />
            </div>
            </div>
     </>
}

export default Sidebar