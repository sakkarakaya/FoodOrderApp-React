import React, { useReducer } from 'react';
import { CartContext } from './CartContext';

const initialState = {
    items: [],
    totalAmount: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;

            const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
            const existingItem = state.items[existingItemIndex]

            let updatedItems

            if (existingItem) {
                const updatedItem = { ...existingItem, amount: existingItem.amount + action.item.amount }
                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };

        case 'REMOVE':
            const existingItemIndex2 = state.items.findIndex(item => item.id === action.id)
            const existingItem2 = state.items[existingItemIndex2]
            const updatedTotalAmount2 = state.totalAmount - existingItem2.price

            let updatedItems2

            if (existingItem2.amount === 1) {
                updatedItems2 = state.items.filter(item => item.id !== action.id)
            } else {
                const updatedItem2 = { ...existingItem2, amount: existingItem2.amount - 1 }
                updatedItems2 = [...state.items]
                updatedItems2[existingItemIndex2] = updatedItem2
            }

            return {
                items: updatedItems2,
                totalAmount: updatedTotalAmount2
            };
        default:
            return initialState;
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
