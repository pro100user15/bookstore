import React, {FC, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {CategoryWithCountBooks} from "../../../models/Category";
import CategoryService from "../../../services/CategoryService";
import {useDispatch} from "react-redux";
import {AddCategoryAction, CategoryActionEnum} from "../../../store/actions/category";

interface AddCategoryFormProps {
    setModalCreate(flag: boolean): void
}

const AddCategoryForm: FC<AddCategoryFormProps> = ({setModalCreate}) => {
    const [category, setCategory] = useState<CategoryWithCountBooks>({} as CategoryWithCountBooks);
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent) => {
        CategoryService.createCategory(category)
            .then(response => {
                dispatch({type: CategoryActionEnum.ADD_CATEGORY, payload: response.data} as AddCategoryAction);
                setModalCreate(false);
            });
    };

    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Category Name" variant="standard"
                       value={category.name}
                       onChange={e => setCategory({...category, name: e.target.value})}
            />
            <Button variant="contained" color="success" onClick={handleClick}>
                Add
            </Button>
        </form>
    );
}

export default AddCategoryForm;