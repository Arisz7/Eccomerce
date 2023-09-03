import React from 'react'
import { VscColorMode } from 'react-icons/vsc'
import Input from '../../components/Input';
import './Colors.css';

function Colors({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="flex justify-start pl-5 pt-7 pb-5"><VscColorMode class='mr-2 mt-0.5' /> Colors</h2>
        <button className="flex hover:bg-white/100 pl-5 rounded-md w-full" onClick={handleChange}>All</button>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <button
          className='flex text-sm font-medium hover:bg-gray-100 rounded-md w-full mb-3 pt-2 mt-2 pl-5'
          onClick={handleChange}
          type='button'
          value="white"
          name='test1'
        >
          White
        </button>
      </div>
    </>
  );
}

export default Colors