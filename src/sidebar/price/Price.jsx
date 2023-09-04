import React, { useState } from 'react'
import { ImPriceTags } from 'react-icons/im'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import './Price.css';
import Input from '../../components/Input';

function Price({ handleChange, collapsed }) {
    const [IsOpen, setIsOpen] = useState(false);
    return (
        <div className=''>
            {!collapsed ?
                <div className={`flex justify-start mt-4 mb-2 ${collapsed && 'opacity-0 translate-x-28'}`}><ImPriceTags class='mr-2 mt-0.5' />
                    <button className="flex right" onClick={() => setIsOpen((prev) => !prev)}>
                        Price
                        {!IsOpen ? (<AiOutlineCaretDown className='flex h-8 ml-2 pb-2' />
                        ) : (
                            <AiOutlineCaretUp className='h-8  ml-2 pb-2' />
                        )}
                    </button>
                </div>
                : <ImPriceTags class='' size={25} />}
            {IsOpen && (
                <button className={`flex hover:bg-white/100 pl-5 p-2 rounded-md w-full ${collapsed && 'opacity-0 translate-x-28'}`} onClick={handleChange}>All</button>
            )}
            {IsOpen && (
                <Input
                    collapsed={collapsed}
                    handleChange={handleChange}
                    value={50}
                    title="$0 - 50"
                    name="test2"
                />
            )}
            {IsOpen && (
                <Input
                    collapsed={collapsed}
                    handleChange={handleChange}
                    value={100}
                    title="$50 - 100"
                    name="test2"
                />
            )}
            {IsOpen && (
                <Input
                    collapsed={collapsed}
                    handleChange={handleChange}
                    value={150}
                    title="$100 - 150"
                    name="test2"
                />
            )}
            {IsOpen && (
                <Input
                    collapsed={collapsed}
                    handleChange={handleChange}
                    value={200}
                    title="Over $150"
                    name="test2"
                />
            )}
        </div>
    )
}

export default Price