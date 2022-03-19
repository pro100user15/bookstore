import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const EditCategoryForm = ({editCategory, index, edit}) => {
    const [category, setCategory] = useState({});

    useEffect(() => {
        setCategory(editCategory);
        console.log('Edit...');
        console.log(editCategory);
        console.log(index);
    }, [index]);

    const handleClick = (e) => {
        edit(category, index);
        setCategory({...category, name: ''});
    };

    return (
        <form noValidate autoComplete="off">
            <h4>{category.id} - {category.name}</h4>
            <TextField id="standard-basic" label="Category Name" variant="standard"
                       value={category.name}
                       onChange={(e) =>
                           setCategory({...category, name: e.target.value})}
            />
            <Button variant="contained" color="success" onClick={handleClick}>
                Edit
            </Button>
        </form>
    );
};

export default EditCategoryForm;