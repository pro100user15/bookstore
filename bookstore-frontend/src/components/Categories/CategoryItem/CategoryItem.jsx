import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";

import classes from './CategoryItem.module.css';

const CategoryItem = ({category, number, edit, remove}) => {
    return (
        <div key={category.id} className={classes.categoryItem}>
            <div>
                {number}.<Link to={`/categories/${category.id}`} className={classes.link}>{category.name}</Link>
                <h2>Amount books : {category.countBooks}</h2>
            </div>
            <div>
                <MyButton onClick={e => edit(category, number - 1)} style={{marginRight: '5px'}}>Редагувати</MyButton>
                <MyButton onClick={e => remove(category)}>Видалити</MyButton>
            </div>
        </div>
    );
};

export default CategoryItem;