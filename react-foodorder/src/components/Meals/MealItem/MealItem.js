import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { CartContext } from '../../../store/CartContext';

const MealItem = ({ item }) => {
    const cartContext = useContext(CartContext);

    const addToCart = (amount) => {
        cartContext.addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: amount,
            img: item.img
        })
    }
    return (
        <li className={classes.container}>
            <img className={classes.mealItemimg} src={item.img} alt="foto" />
            <div className={classes.left}>
                <h2>{item.name}</h2>
                <p className={classes.itemdesc}>{item.description}</p>
                <h3>{item.price.toFixed(2)} €</h3>
            </div>
            <div className={classes.right}>
                <MealItemForm id={item.id} onAddtoCart={addToCart} />
            </div>
        </li>
    )
}

export default MealItem
