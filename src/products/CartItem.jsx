import React, { useContext } from 'react'
import './CartItem.css'
import CartContext from '../context/cart/CartContext'

export const CartItem = (props) => {
    let { title, newPrice, img, quantity, id, star } = props.data
    const { removeItem, increment } = useContext(CartContext);

    return <>
        <div class="justify-between mb-6 rounded-lg md:w-2/3 bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={img} alt={title} class="w-full rounded-lg sm:w-40" />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">{title}</h2>
                    <p class="mt-1 text-xs sm:ml-1 sm:flex sm:w-full">{star} {star} {star} {star}</p>
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => removeItem(id)}> - </span>
                        <input class="h-8 w-8 border bg-white text-center font-semibold outline-none" type="number" value={quantity} />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => increment(id)}> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">${newPrice}.00</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        {/*Sub total*/}

    </>
}

