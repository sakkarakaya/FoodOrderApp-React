import { useState } from "react";

const useForm = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validation(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false)
  }

  return {
    enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useForm;
