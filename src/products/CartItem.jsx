import React, { useContext } from 'react'
import './CartItem.css'
import CartContext from '../context/cart/CartContext'

export const CartItem = (props) => {
    let { title, newPrice, img, quantity, id } = props.data
    const { removeItem, increment } = useContext(CartContext);


    return <>
        <div className='cartItem' id={id}>
            <img src={img} alt={title} />
            <div className="details">
                <p><b>{title}</b></p>
                <p>${newPrice}</p>
                <div className="countHandler">
                    <button className='cart-remove' onClick={() => removeItem(id)}> - </button>
                    <input value={quantity} disabled />
                    <button onClick={() => increment(id)}> + </button>
                </div>
            </div>
        </div>
    </>
}

