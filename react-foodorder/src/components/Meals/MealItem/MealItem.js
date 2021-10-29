import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ item }) => {
    return (
        <li className={classes.container}>
            <div className={classes.left}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>{item.price.toFixed(2)} €</h3>
            </div>
            <div className={classes.right}>
                <MealItemForm id={item.id} />
            </div>
        </li>
    )
}

export default MealItem
