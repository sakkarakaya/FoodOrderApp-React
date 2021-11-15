import React from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './MealList.module.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi    ',
        description: 'Finest fish and veggies',
        price: 22.99,
        img: 'https://imgur.com/NV9P8l6.jpg'
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        img: 'https://imgur.com/lEWyzvr.jpg'
    },
    {
        id: 'm3',
        name: 'Burger   ',
        description: 'American, raw, meaty',
        price: 12.99,
        img: 'https://imgur.com/iOBuPCp.jpg'
    },
    {
        id: 'm4',
        name: 'GreenBowl',
        description: 'Healthy...and green...',
        price: 18.99,
        img: 'https://imgur.com/oRDxyYD.jpg'
    },
];

const MealList = () => {
    const mealsList = DUMMY_MEALS.map((item) => <MealItem key={item.id} id={item.id} item={item} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default MealList
