import React from 'react'

function Input({ handleChange, value, title, collapsed }) {
  return (
    <button className={`flex items-center text-sm font-medium p-2 hover:bg-white/100 rounded-md w-full mt-2 pl-5 ${collapsed && 'opacity-0 translate-x-28'}`} onClick={handleChange} value={value}>
      {title}
    </button>
  );
}

export default Input