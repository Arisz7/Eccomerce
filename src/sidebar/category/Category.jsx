import React, { useState } from 'react'
import { BiSolidCategoryAlt } from 'react-icons/bi';
import Input from '../../components/Input';
import './Category.css';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

function Category({ handleChange, collapsed }) {
    const [IsOpen, setIsOpen] = useState(false);

    return <>


        <div className={`flex justify-start mt-2 mb-2 whitespace-pre text-2xl lg:text-lg`}><BiSolidCategoryAlt class="mr-2 mt-0.5" />
            <button className="flex right" onClick={() => setIsOpen((prev) => !prev)}>
                Category
                {!IsOpen ? (<AiOutlineCaretDown className='flex h-8 ml-2 pb-2' />
                ) : (
                    <AiOutlineCaretUp className='h-8  ml-2 pb-2' />
                )}
            </button>

        </div>

        {IsOpen && (
            <button
                className={`flex hover:bg-white/100 pl-5 rounded-md p-2 w-full ${collapsed && 'opacity-0 translate-x-28'}`}
                onClick={handleChange}
            >
                All
            </button>
        )}

        {IsOpen && (
            <Input
                className="font-semibold"
                IsOpen={IsOpen}
                collapsed={collapsed}
                handleChange={handleChange}
                value="lenceria"
                title="Lenceria"
                name="test"
            />
        )}
        {IsOpen && (
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="bikini"
                title="Bikini"
                name="test"
            />
        )}
        {IsOpen && (
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />
        )}
        {IsOpen && (
            <Input
                collapsed={collapsed}
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
        )}
    </>
}

export default Category