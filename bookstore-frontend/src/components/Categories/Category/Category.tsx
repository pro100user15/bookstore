import React, {FC, useEffect, useState} from 'react';

import CategoryService from '../../../services/CategoryService';

import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import CategoryList from '../CategoryList/CategoryList';
import MyButton from "../../UI/button/MyButton";
import MyModal from '../../UI/modal/MyModal';

import './Category.css';
import {useDispatch} from "react-redux";
import {CategoryActionEnum} from "../../../store/actions/category";

const Category: FC = () => {
    //const categories = useTypedSelector<CategoryWithCountBooks[]>(state => state.category.categories);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        CategoryService.getCategories()
            .then(response => {
                dispatch({type: CategoryActionEnum.SET_CATEGORIES, payload: response.data});
        });
    }, []);


    /*const [editCategory1, setEditCategory1] = useState({});
    const [index, setIndex] = useState();

    const editCategory = (category, index) => {
        setEditCategory1(category);
        setIndex(index);
        console.log(category);
        console.log(index);
        setModalEdit(true);
    };

    const edit = (category, index) => {
        CategoryService.updateCategory(category).then((value => {
            CategoryService.getCategoryById(value.data.id).then((response) => {
                console.log(response.data);
                setCategories([...categories, categories[index] = response.data]);
                setModalEdit(false);
            });
        }));
    };*/

    return (
        <div className="container mt-5">
            <MyButton onClick={() => setModalCreate(true)}>
                Add category
            </MyButton>
            <MyModal visible={modalCreate || modalEdit} setVisible={modalCreate ? setModalCreate : setModalEdit}>
                {
                    modalCreate
                    ?
                        <AddCategoryForm setModalCreate={setModalCreate}/>
                        :
                        <EditCategoryForm setModalEdit={setModalEdit}/>
                }
            </MyModal>
            <CategoryList setModalEdit={setModalEdit}/>
        </div>
    );
}

export default Category;