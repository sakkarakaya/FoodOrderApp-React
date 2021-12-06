
import { useEffect } from "react"
import useForm from "../utils/useForm"
import classes from "./checkout.module.css"

const Checkout = ({ setFormIsValid, setUserData }) => {

    const {
        enteredValue: enteredName,
        valueIsValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useForm(v => v.trim() !== '')

    const {
        enteredValue: enteredEmail,
        valueIsValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useForm(v => v.includes('@'))

    const {
        enteredValue: enteredAddress,
        valueIsValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress
    } = useForm(v => v.trim() !== '')

    useEffect(() => {
        if (nameIsValid && emailIsValid && addressIsValid) {
            setFormIsValid(true)
            setUserData({
                name: enteredName,
                email: enteredEmail,
                address: enteredAddress,
            });
        }
    }, [emailIsValid, nameIsValid, setFormIsValid, addressIsValid, setUserData, enteredName, enteredEmail, enteredAddress])

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (!enteredName) {
            return;
        }

        resetName();
        resetEmail();
        resetAddress();
        setFormIsValid(false);
    }

    return (
        <form className={classes.form} id='checkout' onSubmit={formSubmitHandler}>
            <div className={`${classes.inputdiv} ${nameHasError && classes.invalid}`}>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
                {nameHasError && <p>Enter a name!</p>}
            </div>
            <div className={`${classes.inputdiv} ${emailHasError && classes.invalid}`}>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                {emailHasError && <p>Enter a valid email!</p>}
            </div>
            <div className={`${classes.inputdiv} ${addressHasError && classes.invalid}`}>
                <label htmlFor='address'>Address</label>
                <input id='address' type='text' value={enteredAddress} onChange={addressChangeHandler} onBlur={addressBlurHandler} />
                {addressHasError && <p>Enter an address!</p>}
            </div>
            {/* <div>
                <button disabled={!formIsValid}>Submit</button>
            </div> */}
        </form>
    )
}

export default Checkout
