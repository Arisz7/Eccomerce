import React, { useState } from 'react'
import { BiSolidCategoryAlt } from 'react-icons/bi';
import Input from '../../components/Input';
import './Category.css';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';




function Category({ handleChange }) {
    const [IsOpen, setIsOpen] = useState(false);

    const [selected, selectedCategory] = useState(null)


    return <>


        <div className={`flex justify-start mt-2 mb-2 text-2xl lg:text-lg`}><BiSolidCategoryAlt className="mr-2 mt-0.5" />
            <button className="flex right" onClick={() => setIsOpen((prev) => !prev)}>
                Category
                {!IsOpen ? (<AiOutlineCaretDown className='flex h-8 ml-2 pb-2' />
                ) : (
                    <AiOutlineCaretUp className='h-8  ml-2 pb-2' />
                )}
            </button>


        </div>

        {IsOpen && (
            <Input
                className="font-semibold"
                IsOpen={IsOpen}
                handleChange={handleChange}
                value="lenceria"
                title="Lenceria"
                name="test"
            />
        )}
        {IsOpen && (
            <Input
                handleChange={handleChange}
                value="bikini"
                title="Bikini"
                name="test"
            />
        )}
        {IsOpen && (
            <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />
        )}
        {IsOpen && (
            <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
        )}
    </>
}

export default Category