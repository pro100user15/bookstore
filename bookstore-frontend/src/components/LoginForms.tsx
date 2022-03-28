import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import AuthorizationService from "../services/AuthorizationService";
import {UserAuthorization, UserLogin} from "../models/User";
import jwt from "jwt-decode";
import {useDispatch} from "react-redux";
import {AuthActionEnum, SetAuthAction} from "../store/actions/auth";
import {useNavigate} from "react-router-dom";

/*const useValidation = (value: string, validations: []) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'isValid':
                    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    setValid(re.test(String(value).toLowerCase()));
                    break;
            }
        }
    }, [value]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isValid
    };
}

const useInput = (initialValue: string, validations: []) => {

    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDirty(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    };
}*/

const LoginForms: React.FC = () => {
    //const email = useInput('', []/*{isEmpty: true, minLength: 5, maxLength: 40, isValid: false}*/);
    //const password = useInput('', []/*{isEmpty: true, minLength: 8, maxLength: 64}*/);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [user, setUser] = useState<UserLogin>({
        email: '',
        password: ''
    });

    const handleClick = (e: React.MouseEvent) => {
        //const user: UserLogin = {email.value, password.}
        AuthorizationService.login(user)
            .then(response => {
                const token: string = localStorage.getItem('token') || '';
                const user: UserAuthorization = jwt<UserAuthorization>(token);
                dispatch({type: AuthActionEnum.SET_AUTH, payload: {token: token, user: user}} as SetAuthAction);
                navigate('/');
            });
        //email.value = '';
        //password.value = '';
    };

    return (
        <div style={{margin: "50px 0 0 800px"}}>
            <h1>Login</h1>
            <form noValidate autoComplete="off">
                <div>
                    {/*{(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>
                        Email cannot be empty
                    </div>}
                    {(!email.isEmpty && email.isDirty &&  (email.minLengthError || email.maxLengthError)) && <div style={{color: 'red'}}>
                        Email must be between 5 and 40 characters long
                    </div>}
                    {(!email.isEmpty && email.isDirty && !email.isValid) && <div style={{color: 'red'}}>
                        Email is not valid
                    </div>}*/}
                    <div>
                        <TextField id="standard-basic"
                                   label="Email"
                                   variant="standard"
                                   value={user?.email}
                                   onChange={e => setUser({...user, email: e.target.value})}
                            /*onBlur={email.onBlur}*/
                        />
                    </div>
                    <div>
                        {/*{(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>
                            Password cannot be empty
                        </div>}
                        {(!password.isEmpty && password.isDirty &&  (password.minLengthError || password.maxLengthError)) && <div style={{color: 'red'}}>
                            Password must be between 8 and 64 characters long
                        </div>}*/}
                        <TextField id="outlined-password-input"
                                   label="Password"
                                   type="password"
                                   autoComplete="current-password"
                                   variant="standard"
                                   value={user?.password}
                                   onChange={e => setUser({...user, password: e.target.value})}
                            /*onBlur={password.onBlur}*/
                        >
                    </div>
                    <div>
                        <Button variant="contained" color="success" onClick={handleClick}>
                            Login
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForms;