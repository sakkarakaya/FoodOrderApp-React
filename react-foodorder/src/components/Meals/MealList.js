import React, { useState, useEffect } from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './MealList.module.css';
import axios from 'axios'

const MealList = () => {

    const [meals, setMeals] = useState([])

    const fetchHandler = async () => {
        try {
            const { data } = await axios.get(
                'https://react-foodorder-fa1bc-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
            )
            const mealList = []
            for (const key in data) {
                mealList.push({
                    id: key,
                    name: data[key].title,
                    description: data[key].desc,
                    price: data[key].price,
                    img: data[key].img
                })
            }
            setMeals(mealList)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchHandler()
    }, [])

    const mealsList = meals.map((item) => <MealItem key={item.id} id={item.id} item={item} />)
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
