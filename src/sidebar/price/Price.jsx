import React from 'react'
import { ImPriceTags } from 'react-icons/im'
import './Price.css';
import Input from '../../components/Input';

function Price({ handleChange }) {
    return (
        <div className=''>
            <h2 className="flex justify-start pl-5 pt-7 pb-5"><ImPriceTags class='mr-2 mt-0.5' /> Price</h2>
            <button className="flex hover:bg-white/100 pl-5 rounded-md w-full" onClick={handleChange}>All</button>
            <Input
                handleChange={handleChange}
                value={50}
                title="$0 - 50"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={100}
                title="$50 - 100"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={150}
                title="$100 - 150"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={200}
                title="Over $150"
                name="test2"
            />
        </div>
    )
}

export default Price