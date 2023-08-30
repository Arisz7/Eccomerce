import { useReducer } from "react";
import CartContext from "./cart/CartContext";
import CartReducer from "./cart/CartReducer";
import { INCREMENT, ADD, REMOVE_ITEM } from "./types";

const CartProvider = ({ children }) => {
    const initalState = {
        cartItems: [],
    };

    const [state, dispatch] = useReducer(CartReducer, initalState);

    const addToCart = (item) => {
        dispatch({ type: ADD, payload: item });
    };

    const increment = (id) => {
        dispatch({ type: INCREMENT, payload: id })
    }

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id });
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                increment,
                addToCart,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;