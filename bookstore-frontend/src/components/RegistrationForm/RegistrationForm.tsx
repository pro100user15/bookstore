import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {TextField, Button} from '@mui/material';
import {useForm, useFormState, Controller, SubmitHandler} from 'react-hook-form';
import {UserAuthorization, UserLogin} from "../../models/User";
import {emailValidation, passwordValidation} from "./validation";

import AuthorizationService from "../../services/AuthorizationService";
import jwt from "jwt-decode";
import {AuthActionEnum, SetAuthAction} from "../../store/actions/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import './RegistrationForm.css'

interface ISignUp {
    email: string,
    password: string,
    repeat_password: string
}

interface IRegistrationFormProps {
    setIsLogin(flag: boolean): void
}

const RegistrationForm: FC = () => {
    const { handleSubmit, control } = useForm<ISignUp>({
        mode: 'onBlur'
    });
    const { errors } = useFormState({
        control
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ISignUp> = (user) => {
        AuthorizationService.register(user)
            .then(response => {
                navigate('/login');
            });
    }

    return (
        <div className='login-form'>
            <Typography variant="h4" component="div">
                Sign up
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom={ true } className='login-form__subtitle'>
                Sign up
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
                <Controller
                    control={control}
                    name="repeat_password"
                    rules={{...passwordValidation, onChange: (value: string) => {

                        return true;
                        } }}
                    render={({ field }) => (
                        <TextField
                            label="Repeat Password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="login-form__input"
                            fullWidth={ true }
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={ !!errors.repeat_password?.message }
                            helperText={ errors.repeat_password?.message }
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
                    Sign up
                </Button>
                <Typography component="div">
                    <p className="subscribe-text">By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p>
                </Typography>
            </form>
        </div>
    );
};

export default RegistrationForm;