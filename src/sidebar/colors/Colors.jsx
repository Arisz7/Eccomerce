import React, { useState } from 'react'
import { VscColorMode } from 'react-icons/vsc'
import Input from '../../components/Input';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import './Colors.css';

function Colors({ handleChange, collapsed }) {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className={`flex justify-start mt-4 mb-2 text-2xl lg:text-lg`}><VscColorMode class='mr-2 mt-0.5' />
          <button className="flex right" onClick={() => setIsOpen((prev) => !prev)}>
            Colors
            {!IsOpen ? (<AiOutlineCaretDown className='flex h-8 ml-2 pb-2' />
            ) : (
              <AiOutlineCaretUp className='h-8  ml-2 pb-2' />
            )}
          </button>
        </div>
      
      {IsOpen && (
        <button className={`flex hover:bg-white/100 pl-5 p-2 rounded-md w-full ${collapsed && 'opacity-0 translate-x-28'}`} onClick={handleChange}>All</button>
      )}

      {IsOpen && (
        <Input
          collapsed={collapsed}
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
      )}
      {IsOpen && (
        <Input
          collapsed={collapsed}
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
      )}
      {IsOpen && (
        <Input
          collapsed={collapsed}
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
      )}
      {IsOpen && (
        <Input
          collapsed={collapsed}
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
      )}
      {IsOpen && (
        <button
          className={`flex text-sm font-medium hover:bg-gray-100 rounded-md w-full mb-3 p-2 mt-2 pl-5  ${collapsed && 'opacity-0 translate-x-28'}`}
          onClick={handleChange}
          type='button'
          value="white"
          name='test1'
        >
          White
        </button>
      )}
    </>
  );
}

export default Colors