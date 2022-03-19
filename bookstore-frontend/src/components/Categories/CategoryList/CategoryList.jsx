import React from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const CategoryList = ({categories, edit, remove}) => {
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
                                <CategoryItem category={category} number={index + 1} edit={edit} remove={remove}/>
                            </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
}

export default CategoryList;