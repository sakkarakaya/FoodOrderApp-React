import React, { useReducer } from 'react';
import { CartContext } from './CartContext';

const initialState = {
    items: [],
    totalAmount: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        case 'REMOVE':
            return state;
        default:
            return state;
    }
}

const CartProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addItemHandler = (item) => {
        dispatch({ type: 'ADD', item: item })
    }

    const removeItemHandler = (id) => {
        dispatch({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
