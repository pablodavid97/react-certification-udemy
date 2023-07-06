import React, { useState, useEffect, useCallback } from 'react';
import Card from '../ui/Card';
import MealItem from './meal-item/MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchMeals = async () => {
        const response = await fetch('https://meals-project-be5bf-default-rtdb.firebaseio.com/Meals.json');

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const result = await response.json();

        const mealsData = [];
        for (const key in result) {
            mealsData.push({
                id: key, 
                name: result[key].name,
                description: result[key].description,
                price: result[key].price,
            });
        }
        setMeals(mealsData);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchMeals().then().catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    if (isLoading) {
        return <section className={styles.MealsLoading}>
            <p>Loading...</p>
        </section>
    };

    if (error) {
        return <section className={styles.MealsError}>
            <p>{error}</p>
        </section>
    };

    return (
        <Card className={styles.meals}>
            <ul>
                {meals.map((meal) => (
                    <MealItem key={meal.id} item={meal} />
                ))}
            </ul>
        </Card>
    );
};

export default AvailableMeals;
