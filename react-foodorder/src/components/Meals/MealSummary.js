import React from 'react';
import classes from './MealSummary.module.css'

const MealSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>My Restaurant</h2>
            <p>You can choose your favourite meal</p>
            <p>Enjoy your delicious dinner</p>
        </section>
    )
}

export default MealSummary
