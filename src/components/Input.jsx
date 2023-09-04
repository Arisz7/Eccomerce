import React from 'react'

function Input({ handleChange, value, title, collapsed }) {
  return (
    <button className={`flex items-center p-2 btn shadow-[0_3px_0_rgb(0,0,0)] text-black hover:text-white hover:bg-black focus:text-white focus:bg-black rounded-lg w-full mt-2 pl-5 ${collapsed && 'opacity-0 translate-x-28'}`} onClick={handleChange} value={value}>
      {title}
    </button>
  );
}

export default Input