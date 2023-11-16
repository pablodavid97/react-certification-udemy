import React from 'react';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {
    const {
        value: firstNameValue,
        isValid: isFirstNameValid,
        hasError: firstNameHasError,
        handleInputChange: handleFirstNameChange,
        handleInputBlur: handleFirstNameBlur,
        reset: resetFirstName,
    } = useInput((value) => value !== '');
    const {
        value: lastNameValue,
        isValid: isLastNameValid,
        hasError: lastNameHasError,
        handleInputChange: handleLastNameChange,
        handleInputBlur: handleLastNameBlur,
        reset: resetLastName,
    } = useInput((value) => value !== '');
    const {
        value: emailValue,
        isValid: isEmailValid,
        hasError: emailHasError,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        reset: resetEmail,
    } = useInput((value) => value.includes('@'));

    let isFormValid = false;

    if (isFirstNameValid && isLastNameValid && isEmailValid) {
        isFormValid = true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Submitted!');
        console.log('First Name: ', firstNameValue);
        console.log('Last Name: ', lastNameValue);
        console.log('Email: ', emailValue);

        resetFirstName();
        resetLastName();
        resetEmail();
    };

    const getInputClasses = (input) => {
        return input ? 'form-control invalid' : 'form-control';
    };

    const firstNameInputClasses = getInputClasses(firstNameHasError);
    const lastNameInputClasses = getInputClasses(lastNameHasError);
    const emailInputClasses = getInputClasses(emailHasError);

    return (
        <form onSubmit={handleSubmit}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        value={firstNameValue}
                        onChange={handleFirstNameChange}
                        onBlur={handleFirstNameBlur}
                    />
                    {firstNameHasError && (
                        <p className='error-text'>First Name cannot be blank</p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        value={lastNameValue}
                        onChange={handleLastNameChange}
                        onBlur={handleLastNameBlur}
                    />
                    {lastNameHasError && (
                        <p className='error-text'>Last Name cannot be blank</p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    value={emailValue}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                />
                {emailHasError && <p className='error-text'>Invalid Email!</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
