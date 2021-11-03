import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartitems =
        <ul>
            {[{ id: 'c1', name: 'sss', amount: 1, price: 4 }
            ].map((item) => <li>{item.name}</li>)}
        </ul>
    return (
        <Modal onClose={props.hideHandle}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>123</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hideHandle}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};


export default Cart
