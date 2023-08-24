import React, { useReducer, useContext, createContext } from "react";

const NavStateContext = createContext()
const NavDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.item];
        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1)
            return newArr;
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}

export const CartProvider = ({ children, }) => {
    const [state, dispatch] = useReducer(reducer, []);


    return (
        <NavDispatchContext.Provider value={dispatch}>
            <NavStateContext.Provider value={state}>
                {children}
            </NavStateContext.Provider>
        </NavDispatchContext.Provider>
    )
}

export const useCart = () => useContext(NavStateContext)
export const useDispatchCart = () => useContext(NavDispatchContext)