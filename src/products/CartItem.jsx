import React, { useContext } from 'react'
import './CartItem.css'
import CartContext from '../context/cart/CartContext'
import formatCurrency from 'format-currency'

export const CartItem = (props) => {
    let { title, newPrice, img, id } = props.data
    const { cartItem, removeItem } = useContext(CartContext);

    let opts = { format: '%s%v', symbol: "$" }

    return <>
        <div className='cartItem' key={id}>
            <img src={img} alt={title} />
            <div className="details">
                <p><b>{title}</b></p>
                <p>${newPrice}</p>
                <div className="countHandler">
                    <button className='cart-remove' onClick={() => removeItem(cartItem.id)}> - </button>
                    <input />
                    <button onClick={() => { }}> + </button>
                </div>
            </div>
        </div>
    </>
}

