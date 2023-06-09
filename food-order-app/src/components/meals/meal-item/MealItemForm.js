import React, { useRef, useState } from 'react';
import Input from '../../ui/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setIsAmountValid(false);
            return;
        }

        onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
