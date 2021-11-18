import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { CartContext } from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const addCart = (item) => {
        cartContext.addItem({ ...item, amount: 1 })
    }
    const removeCart = (id) => {
        cartContext.removeItem(id)
    }
    const removeAllCart = (id) => {
        const existingItemIndex2 = cartContext.items.findIndex(item => item.id === id)
        const existingItem2 = cartContext.items[existingItemIndex2]
        existingItem2.price = existingItem2.price * existingItem2.amount
        existingItem2.amount = 1;
        cartContext.removeItem(id)
    }

    const cartitems =
        <ul className={classes.modallist}>
            {
                cartContext.items.map((item) =>
                    <CartItem
                        key={item.id}
                        item={item}
                        onAddCart={addCart.bind(null, item)}
                        onRemoveCart={removeCart.bind(null, item.id)}
                        onRemoveAllCart={removeAllCart.bind(null, item.id)}
                    />)
            }
        </ul>
    return (
        <Modal onClose={props.hideHandle}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartContext.totalAmount.toFixed(2)}€</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.closebutton} onClick={props.hideHandle}>Close</button>
                <button className={classes.orderbutton}>Order</button>
            </div>
        </Modal>
    )
};


export default Cart
