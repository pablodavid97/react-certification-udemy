import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import styles from './MealItem.module.css';

const MealItem = ({ item }) => {
    const context = useContext(CartContext);

    const handleAddToCart = (amount) => {
        console.log('item: ', item);
        context.addItem({
            id: item.id,
            name: item.name,
            amount: amount,
            price: item.price,
        });
    };
    return (
        <li className={styles.meal}>
            <div>
                <h3>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <span className={styles.price}>${item.price.toFixed(2)}</span>
            </div>
            <div>
                <MealItemForm id={item.id} onAddToCart={handleAddToCart} />
            </div>
        </li>
    );
};

export default MealItem;
