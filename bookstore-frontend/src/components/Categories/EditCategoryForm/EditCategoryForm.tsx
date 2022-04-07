import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import {Button, Typography} from "@mui/material";
import {FC} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {CategoryActionEnum, EditCategory, UpdateCategoryAction} from "../../../store/actions/category";
import CategoryService from "../../../services/CategoryService";
import {CategoryWithCountBooks} from "../../../models/Category";
import {useDispatch} from "react-redux";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";

interface EditCategoryFormProps {
    setModalEdit(flag: boolean): void
}

const EditCategoryForm: FC<EditCategoryFormProps> = ({setModalEdit}) => {
    const editCategory = useTypedSelector<EditCategory>(state => state.category.editCategory);

    const dispatch = useDispatch();

    const {handleSubmit, control, setValue} = useForm<CategoryWithCountBooks>({
        mode: 'onBlur'
    });
    const {errors} = useFormState({
        control
    });

    useEffect(() => {
        setValue("id", editCategory.category.id);
        setValue("name", editCategory.category.name);
        setValue("countBooks", editCategory.category.countBooks);
    }, [editCategory]);

    const onSubmit: SubmitHandler<CategoryWithCountBooks> = (category) => {
        CategoryService.updateCategory(category)
            .then(response => {
                dispatch({
                    type: CategoryActionEnum.UPDATE_CATEGORY, payload: {
                        index: editCategory.index,
                        category: response.data
                    }
                } as UpdateCategoryAction);
                setModalEdit(false);
            });
    };

    return (
        <div>
            {
                editCategory.category &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4" component="div">
                        Edit category
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
                        Edit
                    </Button>
                </form>
            }
        </div>
    );
};

export default EditCategoryForm;