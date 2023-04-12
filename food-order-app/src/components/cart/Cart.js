import React, { useContext } from 'react';
import Modal from '../ui/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = ({ isOpen, onClose }) => {
    const context = useContext(CartContext);

    const handleAddItem = (item) => {
        console.log('item: ', item);
        context.addItem({ ...item, amount: 1 });
    };

    const handleRemoveItem = (id) => {
        context.removeItem(id);
    };

    const handleSubmit = () => {
        console.log('Order Submitted...');
        onClose();
    };

    return (
        isOpen && (
            <Modal onClose={onClose}>
                <ul className={styles['cart-items']}>
                    {context.items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onAdd={handleAddItem.bind(null, item)}
                            onRemove={handleRemoveItem.bind(null, item.id)}
                        />
                    ))}
                </ul>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>${context.totalAmount.toFixed(2)}</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles['button--alt']} onClick={onClose}>
                        Close
                    </button>
                    {context.items.length > 0 && (
                        <button
                            className={styles.button}
                            onClick={handleSubmit}
                        >
                            Order
                        </button>
                    )}
                </div>
            </Modal>
        )
    );
};

export default Cart;
