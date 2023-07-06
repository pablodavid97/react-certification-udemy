import React, { useState } from 'react';

const useInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(value);
    const hasError = !isValid && isTouched;

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleInputBlur = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value,
        isValid,
        hasError,
        handleInputChange,
        handleInputBlur,
        reset,
    };
};

export default useInput;
