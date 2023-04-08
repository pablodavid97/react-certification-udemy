import React, { useState, useRef } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../ui/ErrorModal';

const AddUser = ({ addUser }) => {
    const usernamInputRef = useRef();
    const ageInputRef = useRef();

    const defaultErrorModal = {
        isOpen: false,
        title: 'An error occured!',
        message: 'Something went wrong!',
    };
    const [errorModal, setErrorModal] = useState(defaultErrorModal);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const enteredUsername = usernamInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (
            enteredAge.trim().length === 0 ||
            enteredUsername.trim().length === 0
        ) {
            setErrorModal({
                isOpen: true,
                title: 'Invalid username',
                message: 'Please enter a valid usernam and age (non-empty values)!',
            });
            return;
        }
        if (+enteredAge < 0) {
            setErrorModal({
                isOpen: true,
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)!',
            });
            return;
        }
        addUser({
            id: Math.floor(Math.random() * 100) + 1,
            username: enteredUsername,
            age: enteredAge,
        });
        usernamInputRef.current.value = '';
        ageInputRef.current.value = '';
    };
    const handleCloseModal = () => {
        setErrorModal(defaultErrorModal);
    };

    return (
        <div>
            <ErrorModal
                title={errorModal.title}
                message={errorModal.message}
                isOpen={errorModal.isOpen}
                onClose={handleCloseModal}
            />
            <Card className={styles.input}>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        ref={userInputRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
