import React from 'react';
import Image from '../../assets/meal.png'
import classes from "./Header.module.css"
import CartButton from './CartButton';

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Restaurant Menu</h1>
                <CartButton />
            </header>
            <div className={classes['image1']}>
                <img src={Image} alt="meal" />
            </div>
        </React.Fragment>
    )
}

export default Header
