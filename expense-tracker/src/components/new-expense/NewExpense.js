import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [showNewExpense, setShowNewExpense] = useState(false);
    const saveExpenseDateHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
    };
    const handleNewExpenseClick = () => {
        setShowNewExpense(true);
    };
    const handleExpenseFormBtnClick = () => {
        setShowNewExpense(false);
    };

    return (
        <div className='new-expense'>
            {showNewExpense ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDateHandler}
                    onExpenseFormBtnClick={handleExpenseFormBtnClick}
                />
            ) : (
                <div className='nex-expense__actions'>
                    <button type='button' onClick={handleNewExpenseClick}>
                        Add New Expense
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewExpense;
