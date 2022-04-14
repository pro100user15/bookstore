import React, {FC, useEffect, useState} from 'react';
import {MenuItem, Select, Typography} from "@mui/material";
import {TextField, Button} from '@mui/material';
import {useForm, useFormState, Controller, SubmitHandler} from 'react-hook-form';
import {emailValidation, passwordValidation} from "./validation";
import {User} from "../../../models/User";
import $api from "../../../http";
import "./EditUserProfile.scss";

interface IEditUserProfileProps {
    oldUser: User,

    setUser(user: User): void,

    setModal(flag: boolean): void
}

interface IEditUser {
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    sex: string,
    password: string,
    new_password: string
}

interface IEditUserProfile {
    user: User,
    new_password: string,
    repeat_new_password: string
}

const EditUserProfile: FC<IEditUserProfileProps> = ({oldUser, setUser, setModal}) => {
    const {handleSubmit, control, setValue, setFocus, setError} = useForm<IEditUserProfile>({
        mode: 'onBlur'
    });
    const {errors} = useFormState({
        control
    });

    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        setValue("user.id", oldUser.id);
        setValue("user.surname", oldUser.surname);
        setValue("user.name", oldUser.name);
        setValue("user.email", oldUser.email);
        setValue("user.phone", oldUser.phone);
        setValue("user.sex", oldUser.sex);
    }, [])

    const onSubmit: SubmitHandler<IEditUserProfile> = (user) => {
        if ((user.user.password && user.user.password.length > 1) ||
            (user.new_password && user.new_password.length > 1) ||
            (user.repeat_new_password && user.repeat_new_password.length > 1)) {
            if (!user.user.password || user.user.password.length === 0) {
                console.log("1");
                setError("user.password", {type: "custom", message: "Old Password cannot be empty"});
                setFlag(true);
            }
            if (!user.new_password || user.new_password.length === 0) {
                console.log("2");
                setError("new_password", {type: "custom", message: "New Password cannot be empty"});
                setFlag(true);
            }
            if (!user.repeat_new_password || user.repeat_new_password.length === 0) {
                console.log("3");
                setError("repeat_new_password", {type: "custom", message: "Repeat New Password cannot be empty"});
                setFlag(true);
            }

            if (user.new_password !== user.repeat_new_password) {
                setValue("new_password", "");
                setValue("repeat_new_password", "");
                setError("new_password", {type: "custom", message: "Passwords do not match"});
                setError("repeat_new_password", {type: "custom", message: "Passwords do not match"});
                setFocus("new_password");
                setFlag(true);
            }
        }
        if (!flag) {
            if(user.user.password === undefined || user.new_password === undefined) {
                let updateUser: IEditUser = {...user.user, password: "", new_password: ""};
                console.log("update", updateUser);
                $api.put('/user/profile', updateUser)
                    .then(response => {
                        setUser({...user.user, password: ''});
                        setModal(false);
                    });
            }
            else {
                let updateUser: IEditUser = {...user.user, new_password: user.new_password};
                console.log("update", updateUser);
                $api.put('/user/profile', updateUser)
                    .then(response => {
                        setUser({...user.user, password: ''});
                        setModal(false);
                    });
            }
        }
    }

    return (
        <div className='login-form'>
            <Typography variant="h4" component="div">
                Edit profile
            </Typography>
            <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="user.surname"
                    render={({field}) => (
                        <TextField
                            label="Surname"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.user?.surname?.message}
                            helperText={errors.user?.surname?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="user.name"
                    render={({field}) => (
                        <TextField
                            label="Name"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.user?.name?.message}
                            helperText={errors.user?.name?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="user.email"
                    rules={emailValidation}
                    render={({field}) => (
                        <TextField
                            label="Email"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.user?.email?.message}
                            helperText={errors.user?.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="user.phone"
                    rules={{
                        validate: (value: string) => {
                            if (value.length < 10 || value.length > 20) {
                                return "Phone must be between 10 and 20 characters long";
                            }

                            return true;
                        }
                    }}
                    render={({field}) => (
                        <TextField
                            label="Phone"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.user?.phone?.message}
                            helperText={errors.user?.phone?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="user.sex"
                    render={({field}) => (
                        <Select
                            label="Sex"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                        >
                            <MenuItem value={'NO'}>None</MenuItem>
                            <MenuItem value={'MALE'}>Male</MenuItem>
                            <MenuItem value={'FEMALE'}>Female</MenuItem>
                        </Select>
                    )}
                />
                <Controller
                    control={control}
                    name="user.password"
                    rules={passwordValidation}
                    render={({field}) => (
                        <TextField
                            label="Old Password"
                            type="password"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.user?.password?.message}
                            helperText={errors.user?.password?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="new_password"
                    rules={passwordValidation}
                    render={({field}) => (
                        <TextField
                            label="New Password"
                            type="password"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.new_password?.message}
                            helperText={errors.new_password?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="repeat_new_password"
                    rules={passwordValidation}
                    render={({field}) => (
                        <TextField
                            label="Repeat New Password"
                            type="password"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.repeat_new_password?.message}
                            helperText={errors.repeat_new_password?.message}
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
                    Edit
                </Button>
            </form>
        </div>
    );
};

export default EditUserProfile;