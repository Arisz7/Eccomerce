import React from 'react'

function Input({ handleChange, value, title }) {
  return (
    <button className="flex items-center text-sm font-medium p-2 hover:bg-white/100 rounded-md w-full mt-2 pl-5" onClick={handleChange} value={value}>
      {title}
    </button>
  );
}

export default Input