import React, { useContext, useState } from 'react';
import Modal from '../ui/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import styles from './Cart.module.css';

const Cart = ({ isOpen, onClose }) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const context = useContext(CartContext);

    const handleAddItem = (item) => {
        console.log('item: ', item);
        context.addItem({ ...item, amount: 1 });
    };

    const handleRemoveItem = (id) => {
        context.removeItem(id);
    };

    const handleOrder = () => {
        setIsCheckout(true);
    };

    const handleSubmit = async (userData) => {
        setIsSubmitting(true);
        await fetch(
            'https://meals-project-be5bf-default-rtdb.firebaseio.com/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: context.items,
                }),
            }
        );
        setIsSubmitting(false);
        setDidSubmit(true);
        context.clearCart();
    };

    const modalActions = (
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={onClose}>
                Close
            </button>
            {context.items.length > 0 && (
                <button className={styles.button} onClick={handleOrder}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <>
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
            {isCheckout && (
                <Checkout onCancel={onClose} onSubmit={handleSubmit} />
            )}
            {!isCheckout && modalActions}
        </>
    );

    const isSubmittinModalContent = <p>Sending order data...</p>;
    const didSubmitModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={styles.actions}>
                <button className={styles.button} onClick={onClose}>
                    Close
                </button>
            </div>
        </>
    );

    return (
        isOpen && (
            <Modal onClose={onClose}>
                {!isSubmitting && !didSubmit && cartModalContent}
                {isSubmitting && isSubmittinModalContent}
                {!isSubmitting && didSubmit && didSubmitModalContent}
            </Modal>
        )
    );
};

export default Cart;
