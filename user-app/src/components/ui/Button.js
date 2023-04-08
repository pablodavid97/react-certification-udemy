import React from 'react';
import styles from '../ui/Button.module.css';

const Button = ({ type, onClick, children }) => {
    return (
        <button
            className={styles.button}
            type={type || 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
