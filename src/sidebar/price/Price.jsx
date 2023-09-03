import React from 'react'
import { ImPriceTags } from 'react-icons/im'
import './Price.css';
import Input from '../../components/Input';

function Price({ handleChange, collapsed }) {
    return (
        <div className=''>
            <h2 className={`flex justify-start  mt-2 mb-2 ${collapsed && 'opacity-0 translate-x-28'}`}><ImPriceTags class='mr-2 mt-0.5' /> Price</h2>
            <button className={`flex hover:bg-white/100 pl-5 p-2 rounded-md w-full ${collapsed && 'opacity-0 translate-x-28'}`} onClick={handleChange}>All</button>
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value={50}
                title="$0 - 50"
                name="test2"
            />
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value={100}
                title="$50 - 100"
                name="test2"
            />
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value={150}
                title="$100 - 150"
                name="test2"
            />
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value={200}
                title="Over $150"
                name="test2"
            />
        </div>
    )
}

export default Price