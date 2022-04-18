import React, {FC, useEffect, useState} from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {CategoryWithCountBooks} from "../../../models/Category";
import {useDispatch} from "react-redux";
import {CategoryActionEnum} from "../../../store/actions/category";
import CategoryService from '../../../services/CategoryService';

interface CategoryListProps {
    setModalEdit(flag: boolean): void
}

const CategoryList: FC<CategoryListProps> = ({setModalEdit}) => {
    const categories = useTypedSelector<CategoryWithCountBooks[]>(state => state.category.categories);

    const [isLoading, setLoading] = useState<boolean>(true);

    const dispatch = useDispatch();

    useEffect(() => {
        CategoryService.getCategories()
            .then(response => {
                dispatch({type: CategoryActionEnum.SET_CATEGORIES, payload: response.data});
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {
                isLoading ?
                    <h1>Loading categories...</h1>
                    :
                    <h1>Categories List</h1>
            }
            <TransitionGroup>
                {
                    categories.map(
                        (category, index) =>
                            <CSSTransition
                                key={category.id}
                                timeout={500}
                                classNames="category"
                            >
                                <CategoryItem index={index} category={category} setModalEdit={setModalEdit}/>
                            </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
}

export default CategoryList;