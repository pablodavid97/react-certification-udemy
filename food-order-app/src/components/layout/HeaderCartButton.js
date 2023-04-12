import React, { useContext } from 'react';
import CartIcon from '../cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
    const context = useContext(CartContext);

    const cartItemsNumber = context.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button onClick={onClick} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
};

export default HeaderCartButton;
