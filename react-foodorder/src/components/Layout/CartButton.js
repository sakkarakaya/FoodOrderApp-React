import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './CartButton.module.css'
import { CartContext } from '../../store/CartContext'

const CartButton = (props) => {
    const cartContext = useContext(CartContext);
    const numberOfItemsOnCart = cartContext.items.reduce((currentAmount, item) => {
        return currentAmount + item.amount
    }, 0);

    const [bumped, setBumped] = useState(false)
    useEffect(() => {
        if (cartContext.items.length === 0) {
            return;
        }
        setBumped(true)
        setTimeout(() => {
            setBumped(false)
        }, 300);
    }, [cartContext.items])
    const buttonClass = `${classes.cartbutton} ${bumped && classes.bump}`

    return (
        <button className={buttonClass} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfItemsOnCart}</span>
        </button>
    )
}

export default CartButton
