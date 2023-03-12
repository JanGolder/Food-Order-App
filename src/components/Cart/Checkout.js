import { useRef, useState} from 'react';
import classes from './Checkout.module.css';


const isEmpty = value => value.trim() ==='';
const isFiveChars = value => value.trim().length > 5;

const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postalCode: true,    
        city: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enterderNameIsValid = !isEmpty(enteredName);
    const enterderStreetIsValid = !isEmpty(enteredStreet);
    const enterderCityIsValid = !isEmpty(enteredCity);
    const enterderPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputValidity({
        name:enterderNameIsValid,
        street: enterderStreetIsValid,
        postalCode: enterderPostalCodeIsValid,
        city: enterderCityIsValid

    })

    const formIsValid = enterderNameIsValid && enterderStreetIsValid && enterderCityIsValid && enterderPostalCodeIsValid;

    if(!formIsValid){
        return
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,    
        city: enteredCity
    })

  };

  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '': classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputValidity.street ? '': classes.invalid}`;
  const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '': classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputValidity.city ? '': classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputValidity.name && <p>Please enter a correct name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
        {!formInputValidity.street && <p>Please enter a correct street.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalCodeInputRef} type='text' id='postal' />
        {!formInputValidity.postalCode && <p>Please enter a correct postal code (min. 5 characters long).</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
        {!formInputValidity.city && <p>Please enter a correct city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;