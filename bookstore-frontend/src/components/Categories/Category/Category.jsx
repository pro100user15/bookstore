import React, {useEffect, useState} from 'react';

import CategoryService from '../../../services/CategoryService';

import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import CategoryList from '../CategoryList/CategoryList';
import MyButton from "../../UI/button/MyButton";
import MyModal from '../../UI/modal/MyModal';

import './Category.css';

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    useEffect(() => {
        CategoryService.getCategories().then((response) => {
            setCategories(response.data);
            console.log(response.data);
        });
    }, []);

    const create = (category) => {
        CategoryService.createCategory(category).then((response => {
                console.log(response.data);
                setCategories([...categories, response.data]);
                setModalCreate(false);
        }));
    };

    const [editCategory1, setEditCategory1] = useState({});
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
    };

    const remove = (category) => {
        CategoryService.deleteCategory(category).then((response) => {
            console.log(response.data);
            setCategories(categories.filter(c => c.id !== category.id));
        });
    };

    return (
        <div className="container mt-5">
            <MyButton onClick={() => setModalCreate(true)}>
                Add category
            </MyButton>
            <MyModal visible={modalCreate || modalEdit} setVisible={modalCreate ? setModalCreate : setModalEdit}>
                {
                    modalCreate
                    ?
                        <AddCategoryForm create={create}/>
                        :
                        <EditCategoryForm editCategory={editCategory1} index={index} edit={edit}/>
                }
            </MyModal>
            <CategoryList categories={categories} edit={editCategory} remove={remove}/>
        </div>
    );
}

export default Category;