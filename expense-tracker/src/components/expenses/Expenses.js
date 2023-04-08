import React, { useState } from 'react';
import './Expenses.css';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2020');

    const handleInputFilterChange = (newYear) => {
        setYear(newYear);
    };
    const filteredExpenses = expenses.filter(
        (expense) => `${expense.date.getFullYear()}` === year
    );

    return (
        <Card className='expenses'>
            <ExpensesFilter
                onFilterChange={handleInputFilterChange}
                year={year}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
