import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ item, onRemove, onAdd }) => {
    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{item.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>
                        ${item.price.toFixed(2)}
                    </span>
                    <span className={styles.amount}>x {item.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
