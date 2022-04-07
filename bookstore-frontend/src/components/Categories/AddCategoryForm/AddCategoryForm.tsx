import React, {FC, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Alert, AlertTitle, Button, Typography} from '@mui/material';
import CategoryService from "../../../services/CategoryService";
import {useDispatch} from "react-redux";
import {AddCategoryAction, CategoryActionEnum} from "../../../store/actions/category";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {Category, CategoryWithCountBooks} from "../../../models/Category";

interface AddCategoryFormProps {
    setModalCreate(flag: boolean): void
}

const AddCategoryForm: FC<AddCategoryFormProps> = ({setModalCreate}) => {
    const [category, setCategory] = useState<Category>({} as Category);

    const dispatch = useDispatch();

    const {handleSubmit, control, setValue} = useForm<CategoryWithCountBooks>({
        mode: 'onBlur'
    });
    const {errors} = useFormState({
        control
    });

    const onSubmit: SubmitHandler<Category> = (category) => {
        CategoryService.createCategory(category)
            .then(response => {
                dispatch({type: CategoryActionEnum.ADD_CATEGORY, payload: response.data} as AddCategoryAction);
                setModalCreate(false);
            })
            .catch(reason => {
                if (reason.response.status === 400) {
                    alert(reason.response.data.error);
                }
                setModalCreate(false);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" component="div">
                Add category
            </Typography>
            <Controller
                control={control}
                name="name"
                rules={{required: "Category cannot be empty"}}
                render={({field}) => (
                    <TextField
                        label="Name"
                        size="small"
                        margin="normal"
                        fullWidth={true}
                        value={field.value}
                        onChange={(e) => field.onChange(e)}
                        error={!!errors.name?.message}
                        helperText={errors.name?.message}
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
                Add
            </Button>
        </form>
    );
}

export default AddCategoryForm;