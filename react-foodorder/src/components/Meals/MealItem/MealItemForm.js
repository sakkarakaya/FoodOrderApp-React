import React, { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const amountRef = useRef();
    const submitHandle = (e) => {
        e.preventDefault();
        const enteredAmountString = amountRef.current.value;
        const enteredAmount = +enteredAmountString;

        props.onAddtoCart(enteredAmount)
    }
    return (
        <form className={classes.form} onSubmit={submitHandle}>
            <Input ref={amountRef} label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+</button>
        </form>
    )
}

export default MealItemForm
