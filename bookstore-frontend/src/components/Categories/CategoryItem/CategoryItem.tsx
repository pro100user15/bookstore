import React, {FC} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";

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

interface CategoryItemProps {
    index: number,
    category: CategoryWithCountBooks,
    setModalEdit(flag: boolean): void
}

const CategoryItem: FC<CategoryItemProps> = ({index, category, setModalEdit}) => {

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
            });
    };

    return (
        <div key={category.id} className={classes.categoryItem}>
            <div>
                {index + 1}.<Link to={`/categories/${category.id}`} className={classes.link}>{category.name}</Link>
                <h2>Amount books : {category.countBooks}</h2>
            </div>
            <div>
                <MyButton onClick={edit} style={{marginRight: '5px'}}>Редагувати</MyButton>
                <MyButton onClick={remove}>Видалити</MyButton>
            </div>
        </div>
    );
};

export default CategoryItem;