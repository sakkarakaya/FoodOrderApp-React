import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { CartContext } from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';
import axios from 'axios';

const Cart = (props) => {
    const [isCheckout, setCheckout] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)
    const [userData, setUserData] = useState({})
    const [isConfirmed, setConfirmed] = useState(false)

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
    // const confirmHandler = async (data) => {
    //     console.log("confirmed", userData)
    //     await fetch('https://react-foodorder-fa1bc-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             user: userData,
    //             orderedItems: cartContext.items
    //         })
    //     })
    // }
    const confirmHandler = (d) => {
        const postData = {
            User: userData,
            OrderedItems: cartContext.items
        };
        axios.post('https://react-foodorder-fa1bc-default-rtdb.europe-west1.firebasedatabase.app/orders.json', postData)
            .then(res => {
                console.log(res)
                setConfirmed(true)
                cartContext.clear()
            })
            .catch(err => console.log(err))
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

    const modalHeading = (
        isCheckout ? <h2>Checkout</h2> : <h2>Your Cart</h2>
    )

    const modalButtons = <div className={classes.actions}>
        <button className={classes.closebutton} onClick={props.hideHandle}>Close</button>
        {!isCheckout ?
            <button className={classes.orderbutton} disabled={cartContext.items.length === 0} onClick={() => setCheckout(true)}>Order</button> :
            <button form='checkout' className={classes.orderbutton} disabled={!formIsValid} onClick={confirmHandler}>Confirm</button>}
    </div>

    const modalItems =
        <React.Fragment>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartContext.totalAmount.toFixed(2)}€</span>
            </div>
        </React.Fragment>

    const modalCheckout = <Checkout setFormIsValid={setFormIsValid} setUserData={setUserData} />
    const content = isCheckout ? modalCheckout : modalItems

    return (
        <Modal onClose={props.hideHandle}>
            {!isConfirmed && modalHeading}
            {!isConfirmed && content}
            {isConfirmed && <p className={classes.confirmed}>Successfully ordered!</p>}
            {!isConfirmed ? modalButtons : <button className={classes.confirmedclosebutton} onClick={props.hideHandle}>Close</button>}
        </Modal>
    )
};


export default Cart
