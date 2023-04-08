import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onExpenseFormBtnClick }) => {
    const emptyInput = {
        title: '',
        amount: '',
        date: '',
    };
    const [userInput, setUserInput] = useState(emptyInput);

    const handleTitleChange = (e) => {
        setUserInput((prev) => ({ ...prev, title: e.target.value }));
    };

    const handleAmountChange = (e) => {
        setUserInput((prev) => ({ ...prev, amount: e.target.value }));
    };

    const handleDateChange = (e) => {
        setUserInput((prev) => ({ ...prev, date: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateArray = userInput.date.split('-');
        const year = dateArray[0];
        const month = dateArray[1] - 1;
        const day = dateArray[2];

        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(year, month, day),
        };

        onSaveExpenseData(expenseData);
        setUserInput(emptyInput);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        value={userInput.title}
                        type='text'
                        onChange={handleTitleChange}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        value={userInput.amount}
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={handleAmountChange}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input
                        value={userInput.date}
                        type='date'
                        min='2019-01-01'
                        max='2023-03-14'
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={onExpenseFormBtnClick}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
