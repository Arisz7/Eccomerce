import { HIDE_CART, ADD, REMOVE_ITEM } from "../types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;