import React, {FC} from 'react';
import {
    Button,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {emailValidation, passwordValidation} from "../../LoginForm/validation";
import {NavLink, useNavigate} from "react-router-dom";
import {UserAuthorization, UserLogin} from "../../../models/User";
import {useDispatch} from "react-redux";
import "./AddBookForm.scss"
import {Book} from "../../../models/Book";
import MultipleSelect from "../../UI/MultipleSelect/MultipleSelect";

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const AddBookForm: FC = () => {

    const {handleSubmit, control, setValue} = useForm<Book>({
        mode: 'onBlur'
    });
    const {errors} = useFormState({
        control
    });

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<Book> = (book) => {
        console.log(book);
    };

    return (
        <div className='add-book-form'>
            <Typography variant="h4" component="div">
                Add book
            </Typography>
            <form className="add-book-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    render={({field}) => (
                        <TextField
                            label="Name"
                            size="small"
                            margin="normal"
                            className="add-book-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.name?.message}
                            helperText={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="authorsId"
                    render={({field}) => (
                        <MultipleSelect/>
                    )}
                />
                <Controller
                    control={control}
                    name="price"
                    render={({field}) => (
                        <TextField
                            label="Price"
                            size="small"
                            margin="normal"
                            className="add-book-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.price?.message}
                            helperText={errors.price?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="image"
                    render={({field}) => (
                        <TextField
                            label="Image"
                            size="small"
                            margin="normal"
                            className="add-book-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.image?.message}
                            helperText={errors.image?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="image"
                    render={({field}) => (
                        <Select
                            label="Image"
                            size="small"
                            className="add-book-form__input"
                            fullWidth={true}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            error={!!errors.image?.message}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
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
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddBookForm;