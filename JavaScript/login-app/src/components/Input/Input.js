import React, { useRef, useImperativeHandle } from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(
    (
        { isValid, label, name, value, handleOnValueChange, handleValidation },
        ref
    ) => {
        const InputRef = useRef();

        const activate = () => {
            InputRef.current.focus();
        };

        useImperativeHandle(ref, () => {
            return {
                focus: activate,
            };
        });

        return (
            <div
                className={`${styles.control} ${
                    isValid === false ? styles.invalid : ''
                }`}
            >
                <label htmlFor={`${name}Input`}>{label}</label>
                <input
                    ref={InputRef}
                    name={name}
                    type={name}
                    id={`${name}Input`}
                    value={value}
                    onChange={handleOnValueChange}
                    onBlur={handleValidation}
                />
            </div>
        );
    }
);

export default Input;
