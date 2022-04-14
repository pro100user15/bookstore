import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {TextField, Button} from '@mui/material';
import {useForm, useFormState, Controller, SubmitHandler} from 'react-hook-form';
import {UserAuthorization, UserLogin} from "../../models/User";
import {emailValidation, passwordValidation} from "./validation";

import AuthorizationService from "../../services/AuthorizationService";
import {useNavigate} from "react-router-dom";
import './RegistrationForm.css'
import {toastr} from "react-redux-toastr";

interface ISignUp {
    email: string,
    password: string,
    repeat_password: string
}

const RegistrationForm: FC = () => {
    const {handleSubmit, control, setValue, setFocus, setError} = useForm<ISignUp>({
        mode: 'onBlur'
    });
    const {errors} = useFormState({
        control
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ISignUp> = (user) => {
        if(user.password !== user.repeat_password) {
            setValue("password", "");
            setValue("repeat_password", "");
            setError("password", { type: "custom", message: "Passwords do not match"});
            setError("repeat_password", { type: "custom", message: "Passwords do not match"});
            setFocus("password");
        }
        else {
            const regUser: UserLogin = {email: user.email, password: user.password }
            AuthorizationService.register(regUser)
                .then(response => {
                    toastr.success('Registration', "Registration is success");
                    navigate('/login');
                })
                .catch(reason => {
                    if (reason.response.status === 400) {
                        toastr.warning('Registration', reason.response.data.error);
                        setError('email', {type: 'custom', message: reason.response.data.error});
                    }
                });
        }
    }

    return (
        <div className='login-form'>
            <Typography variant="h4" component="div">
                Sign up
            </Typography>
            <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="email"
                    rules={emailValidation}
                    render={({field}) => (
                        <TextField
                            label="Email"
                            size="small"
                            margin="normal"
                            className="login-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.email?.message}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({field}) => (
                        <TextField
                            label="Password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="login-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="repeat_password"
                    rules={{
                        ...passwordValidation, onChange: (value: string) => {

                            return true;
                        }
                    }}
                    render={({field}) => (
                        <TextField
                            label="Repeat Password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="login-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.repeat_password?.message}
                            helperText={errors.repeat_password?.message}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2
                    }}
                >
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export default RegistrationForm;