import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {FC} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {CategoryActionEnum, EditCategory, UpdateCategoryAction} from "../../../store/actions/category";
import CategoryService from "../../../services/CategoryService";
import {CategoryWithCountBooks} from "../../../models/Category";
import {useDispatch} from "react-redux";

interface EditCategoryFormProps {
    setModalEdit(flag: boolean): void
}

const EditCategoryForm: FC<EditCategoryFormProps> = ({setModalEdit}) => {
    const editCategory = useTypedSelector<EditCategory>(state => state.category.editCategory);

    const dispatch = useDispatch();

    const [category, setCategory] = useState<CategoryWithCountBooks>(editCategory.category);

    useEffect(() => {
        console.log('123');
        console.log('category ', category);
        setCategory(editCategory.category);
    }, [editCategory]);

    const edit = () => {
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
                category &&
                <form noValidate autoComplete="off">
                    <h4>{category.id} - {category.name}</h4>
                    <TextField id="standard-basic" label="Category Name" variant="standard"
                               value={category.name}
                               onChange={(e) =>
                                   setCategory({...category, name: e.target.value})}
                    />
                    <Button variant="contained" color="success" onClick={edit}>
                        Edit
                    </Button>
                </form>
            }
        </div>
    );
};

export default EditCategoryForm;