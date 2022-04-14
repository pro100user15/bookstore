import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import classes from './CategoryItem.module.css';
import {CategoryWithCountBooks} from "../../../models/Category";
import CategoryService from "../../../services/CategoryService";
import {useDispatch} from "react-redux";
import {
    CategoryActionEnum,
    DeleteCategoryAction,
    SetEditCategoryAction,
    UpdateCategoryAction
} from "../../../store/actions/category";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

interface CategoryItemProps {
    index: number,
    category: CategoryWithCountBooks,
    setModalEdit(flag: boolean): void
}

const CategoryItem: FC<CategoryItemProps> = ({index, category, setModalEdit}) => {

    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const dispatch = useDispatch();

    const edit = () => {
        dispatch({
            type: CategoryActionEnum.SET_EDIT_CATEGORY, payload: {
                index: index,
                category: category
            }
        } as SetEditCategoryAction);
        setModalEdit(true);
    };

    const remove = () => {
        CategoryService.deleteCategory(category)
            .then(response => {
                dispatch({
                    type: CategoryActionEnum.DELETE_CATEGORY, payload: category
                } as DeleteCategoryAction);
                setOpenDialog(false);
            });
    };

    return (
        <div key={category.id} className={classes.categoryItem}>
            <div>
                <Link to={`/categories/${category.id}`} className={classes.link}>{category.name}</Link>
                <h2>Amount books : {category.countBooks}</h2>
            </div>
            <div>
                <Button variant="outlined" onClick={edit} style={{marginRight: '5px'}}>Edit</Button>
                <Button variant="outlined" onClick={e => {
                    category.countBooks > 0 ?
                        setOpenDialog(true)
                        :
                        remove()
                }}
                >
                    Delete
                </Button>
                <Dialog
                    open={openDialog}
                    onClose={e => setOpenDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Delete category"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This category cannot be deleted because books are linked to it
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={e => setOpenDialog(false)}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default CategoryItem;