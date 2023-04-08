import React, { useState } from 'react';
import NewExpense from './components/new-expense/NewExpense';
import Expenses from './components/expenses/Expenses';

const App = () => {
    const BASE_EXPENSES = [
        {
            id: 'e1',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2023, 3, 9),
        },
        {
            id: 'e2',
            title: 'Car Insurance 2',
            amount: 294.67,
            date: new Date(2023, 3, 9),
        },
        {
            id: 'e3',
            title: 'Car Insurance 3',
            amount: 294.67,
            date: new Date(2023, 3, 9),
        },
        {
            id: 'e4',
            title: 'Car Insurance 4',
            amount: 294.67,
            date: new Date(2023, 3, 9),
        },
    ];
    const [expenses, setExpenses] = useState(BASE_EXPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses((prev) => [expense, ...prev]);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
