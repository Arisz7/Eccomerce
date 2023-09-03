import React from 'react'
import { BiSolidCategoryAlt } from 'react-icons/bi';
import Input from '../../components/Input';
import './Category.css';

function Category({ handleChange, collapsed }) {
    return (
        <div>
            {!collapsed ?
                <h2 className={`flex justify-start mt-2 mb-2 ${collapsed && 'opacity-0 translate-x-28'}`}><BiSolidCategoryAlt class="mr-2 mt-0.5" /> Category</h2>
                : <BiSolidCategoryAlt size={25} />}
            <button
                className={`flex hover:bg-white/100 pl-5 rounded-md p-2 w-full ${collapsed && 'opacity-0 translate-x-28'}`}
                onClick={handleChange}
            >
                All
            </button>
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="underwear"
                title="Underwear"
                name="test"
            />
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
            />
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
        </div>
    )
}

export default Category