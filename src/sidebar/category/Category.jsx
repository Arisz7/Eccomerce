import React from 'react'
import { BiSolidCategoryAlt } from 'react-icons/bi';
import Input from '../../components/Input';
import './Category.css';

function Category({ handleChange }) {
    return (
        <div>
            <h2 className="flex justify-start pl-5 pt-7 pb-5"><BiSolidCategoryAlt class="mr-2 mt-0.5" /> Category</h2>
            <button
                className="flex hover:bg-white/100 pl-5 rounded-md w-full"
                onClick={handleChange}
            >
                All
            </button>
            <Input
                handleChange={handleChange}
                value="underwear"
                title="Underwear"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
        </div>
    )
}

export default Category