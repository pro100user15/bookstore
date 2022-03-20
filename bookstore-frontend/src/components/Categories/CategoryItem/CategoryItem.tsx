import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";

import classes from './CategoryItem.module.css';
import {CategoryWithCountBooks} from "../../../models/Category";

interface CategoryItemProps {
    category: CategoryWithCountBooks,
    number: number,
    edit(category: CategoryWithCountBooks, number: number): void,
    remove(category: CategoryWithCountBooks): void,
}

const CategoryItem: React.FC<CategoryItemProps> = ({category, number, edit, remove}) => {
    return (
        <div key={category.id} className={classes.categoryItem}>
            <div>
                {number}.<Link to={`/categories/${category.id}`} className={classes.link}>{category.name}</Link>
                <h2>Amount books : {category.countBooks}</h2>
            </div>
            <div>
                <MyButton onClick={edit(category, number - 1)} style={{marginRight: '5px'}}>Редагувати</MyButton>
                <MyButton onClick={remove(category)}>Видалити</MyButton>
            </div>
        </div>
    );
};

export default CategoryItem;