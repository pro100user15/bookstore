import React from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {FC} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {CategoryWithCountBooks} from "../../../models/Category";

interface CategoryListProps {
    setModalEdit(flag: boolean): void
}

const CategoryList: FC<CategoryListProps> = ({setModalEdit}) => {
    const categories = useTypedSelector<CategoryWithCountBooks[]>(state => state.category.categories);
    return (
        <div>
            {
                categories.length
                    ?
                    <h1>Categories List</h1>
                    :
                    <h1>Categories is Empty</h1>
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