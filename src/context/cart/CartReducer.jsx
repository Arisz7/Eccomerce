import { INCREMENT, ADD, REMOVE_ITEM } from "../types";
import data from '../../db/data'

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      let index = state.cartItems;
      const checkIndex = index.findIndex((item) => item.id === action.payload.id);
      if (checkIndex === -1) {
        data.quantity = 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: data.quantity }]
        };
      }
      data.quantity = state.cartItems[checkIndex].quantity += 1;

      return {
        ...state,
        ...action.payload, quantity: data.quantity
      }

    case REMOVE_ITEM:
      if (action.type === "REMOVE_ITEM") {
        //   we need to find out which item is clicked
        let updatedCart = state.cartItems
          .map((curElem) => {
            if (curElem.id === action.payload) {
              return { ...curElem, quantity: curElem.quantity - 1 };
            }
            return curElem;
          })
          .filter((curElem) => curElem.quantity !== 0);
        return { ...state, cartItems: updatedCart };
      }
    case INCREMENT:
      if (action.type === "INCREMENT") {
        //   we need to find out which item is clicked
        let updatedCart = state.cartItems.map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity + 1 };
          }
          return curElem;
        });
        return { ...state, cartItems: updatedCart };
      }
    default:
      return state;
  }
};

export default CartReducer;