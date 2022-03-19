import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

const AddCategoryForm = ({create}) => {
    const [name, setName] = useState('');

    const handleClick = (e) => {
        const category = {name};
        create(category);
        setName('');
    };

    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Category Name" variant="standard"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
            />
            <Button variant="contained" color="success" onClick={handleClick}>
                Add
            </Button>
        </form>
    );
}

export default AddCategoryForm;