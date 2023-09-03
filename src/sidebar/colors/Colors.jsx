import React from 'react'
import { VscColorMode } from 'react-icons/vsc'
import Input from '../../components/Input';
import './Colors.css';

function Colors({ handleChange, collapsed }) {
  return (
    <>
        {!collapsed ?
          <h2 className={`flex justify-start  mt-2 mb-2 ${collapsed && 'opacity-0 translate-x-28'}`}><VscColorMode class='mr-2 mt-0.5' /> Colors</h2>
          : <i className=''><VscColorMode class="mr-2 mt-0.5" size={25}/></i>}
      <button className={`flex hover:bg-white/100 pl-5 p-2 rounded-md w-full ${collapsed && 'opacity-0 translate-x-28'}`} onClick={handleChange}>All</button>
      <Input
        collapsed={collapsed}
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        collapsed={collapsed}
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        collapsed={collapsed}
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        collapsed={collapsed}
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <button
        className={`flex text-sm font-medium hover:bg-gray-100 rounded-md w-full mb-3 p-2 mt-2 pl-5  ${collapsed && 'opacity-0 translate-x-28'}`}
        onClick={handleChange}
        type='button'
        value="white"
        name='test1'
      >
        White
      </button>
    </>
  );
}

export default Colors