import React from 'react';
import classes from './cartItem.module.css';

const CartItem = ({ item, onAddCart, onRemoveCart, onRemoveAllCart }) => {
    return (
        <li className={classes.licontainer}>

            <div><img className={classes.mealimg} src={item.img} alt="foto" /></div>
            <div className={classes.title}>{item.name}</div>
            <div className={classes.amountcontainer}>
                <button onClick={onRemoveCart} className={classes.amountbutton}>-</button>
                <span className={classes.amount}>{item.amount}</span>
                <button onClick={onAddCart} className={classes.amountbutton}>+</button>
            </div>
            <div>{(item.amount * item.price).toFixed(2)}€</div>
            <div><span onClick={onRemoveAllCart} className={classes.close}>&#10005;</span></div>

        </li>
    )
}

export default CartItem
