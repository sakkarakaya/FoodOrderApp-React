import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './CartButton.module.css'
import { CartContext } from '../../store/CartContext'

const CartButton = (props) => {
    const cartContext = useContext(CartContext);
    const numberOfItemsOnCart = cartContext.items.reduce((currentAmount, item) => {
        return currentAmount + item.amount
    }, 0);

    return (
        <button className={classes.cartbutton} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfItemsOnCart}</span>
        </button>
    )
}

export default CartButton
