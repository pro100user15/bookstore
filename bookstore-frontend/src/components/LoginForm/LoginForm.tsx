import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {TextField, Button} from '@mui/material';
import {useForm, useFormState, Controller, SubmitHandler} from 'react-hook-form';
import {UserAuthorization, UserLogin} from "../../models/User";
import {emailValidation, passwordValidation} from "./validation";

import './LoginForm.css'
import AuthorizationService from "../../services/AuthorizationService";
import jwt from "jwt-decode";
import {AuthActionEnum, SetAuthAction} from "../../store/actions/auth";
import {useDispatch} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";

const LoginForm: FC = () => {
    const { handleSubmit, control } = useForm<UserLogin>({
        mode: 'onBlur'
    });
    const { errors } = useFormState({
        control
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<UserLogin> = (user) => {
        AuthorizationService.login(user)
            .then(response => {
                const token: string = localStorage.getItem('token') || '';
                const user: UserAuthorization = jwt<UserAuthorization>(token);
                dispatch({type: AuthActionEnum.SET_AUTH, payload: {token: token, user: user}} as SetAuthAction);
                navigate('/');
            });
    }

    return (
        <div className='login-form'>
            <Typography variant="h4" component="div">
                Log in
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom={ true } className='login-form__subtitle'>
                Log in
            </Typography>
            <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="email"
                    rules={ emailValidation }
                    render={({ field }) => (
                        <TextField
                            label="Email"
                            size="small"
                            margin="normal"
                            className="login-form__input"
                            fullWidth={ true }
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={ !!errors.email?.message }
                            helperText={ errors.email?.message }
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={ passwordValidation }
                    render={({ field }) => (
                        <TextField
                            label="Password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="login-form__input"
                            fullWidth={ true }
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={ !!errors.password?.message }
                            helperText={ errors.password?.message }
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={ true }
                    disableElevation={ true }
                    sx={{
                        marginTop: 2
                    }}
                >
                    Log in
                </Button>
                <Typography component="div">
                    <NavLink to='/registration' className="link">Forgot password?</NavLink>
                </Typography>
                <Typography component="div">
                    Don’t have an account?
                    <NavLink to='/registration' className="link">Sign Up</NavLink>
                </Typography>
            </form>
        </div>
    );
};

export default LoginForm;