import { useReducer } from "react";
import CartContext from "./cart/CartContext";
import CartReducer from "./cart/CartReducer";
import { HIDE_CART, ADD, REMOVE_ITEM } from "./types";

const CartProvider = ({ children }) => {
    const initalState = {
        showCart: false,
        cartItems: [],
    };

    const [state, dispatch] = useReducer(CartReducer, initalState);

    const addToCart = (item) => {
        dispatch({ type: ADD, payload: item });
    };

    const showHideCart = () => {
        dispatch({ type: HIDE_CART });
    };

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id });
    };

    return (
        <CartContext.Provider
            value={{
                showCart: state.showCart,
                cartItems: state.cartItems,
                addToCart,
                showHideCart,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;