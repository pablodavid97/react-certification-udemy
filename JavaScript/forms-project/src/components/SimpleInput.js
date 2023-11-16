import React, { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: name,
        isValid: isNameValid,
        hasError: nameHasError,
        handleInputChange: handleNameChange,
        handleInputBlur: handleNameBlur,
        reset: resetName,
    } = useInput((value) => value.trim() !== '');
    const {
        value: email,
        isValid: isEmailValid,
        hasError: emailHasError,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        reset: resetEmail,
    } = useInput((value) => value.includes('@'));

    let isFormValid = false;

    if (isNameValid && isEmailValid) {
        isFormValid = true;
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        console.log('entered name: ', name);
        console.log('entered email: ', email);

        resetName();
        resetEmail();
    };

    const getInputClasses = (input) => {
        return input ? 'form-control invalid' : 'form-control';
    };

    const nameInputClasses = getInputClasses(nameHasError);
    const emailInputClasses = getInputClasses(emailHasError);

    return (
        <form onSubmit={handleFormSubmission}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                />
            </div>
            {nameHasError && (
                <p className='error-text'>Name must not be empty</p>
            )}
            <div className={emailInputClasses}>
                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                />
            </div>
            {emailHasError && <p className='error-text'>Invalid email!</p>}
            <div className='form-actions'>
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
