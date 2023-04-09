import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../Input/Input';

const initialEmailState = { value: '', isValid: null };
const initialPasswordState = { value: '', isValid: null };

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return initialEmailState;
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return initialPasswordState;
};

const Login = () => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(
        emailReducer,
        initialEmailState
    );
    const [passwordState, dispatchPassword] = useReducer(
        passwordReducer,
        initialPasswordState
    );
    const context = useContext(AuthContext);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // alias assignment
    const { isValid: isEmailValid } = emailState;
    const { isValid: isPasswordValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity!');
            setFormIsValid(isEmailValid && isPasswordValid);
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        };
    }, [isEmailValid, isPasswordValid]);

    const emailChangeHandler = event => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    const passwordChangeHandler = event => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = event => {
        event.preventDefault();
        if (formIsValid) {
            context.onLogin(emailState.value, passwordState.value);
        } else if (!isEmailValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    isValid={isEmailValid}
                    label="E-Mail"
                    name="email"
                    value={emailState.value}
                    handleOnValueChange={emailChangeHandler}
                    handleValidation={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    isValid={isPasswordValid}
                    label="Password"
                    name="password"
                    value={passwordState.value}
                    handleOnValueChange={passwordChangeHandler}
                    handleValidation={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
