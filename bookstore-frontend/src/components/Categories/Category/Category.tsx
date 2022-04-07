import React, {FC, useEffect, useState} from 'react';

import CategoryService from '../../../services/CategoryService';

import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import CategoryList from '../CategoryList/CategoryList';
import MyModal from '../../UI/modal/MyModal';

import {useDispatch} from "react-redux";
import {CategoryActionEnum} from "../../../store/actions/category";
import {Button, Container, CssBaseline, Typography} from '@mui/material';
import './Category.css';

const Category: FC = () => {
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        CategoryService.getCategories()
            .then(response => {
                dispatch({type: CategoryActionEnum.SET_CATEGORIES, payload: response.data});
            });
    }, []);


    return (
        <Container maxWidth="xl" sx={{marginTop: "100px", paddingTop: "10px"}}>
            <Button variant="contained" color="success" onClick={() => setModalCreate(true)}>
                Add category
            </Button>
            <MyModal open={modalCreate || modalEdit}
                     setOpen={modalCreate ? setModalCreate : setModalEdit} children={
                modalCreate
                ?
                <AddCategoryForm setModalCreate={setModalCreate}/>
                :
                <EditCategoryForm setModalEdit={setModalEdit}/>
            }/>
            <CategoryList setModalEdit={setModalEdit}/>
        </Container>
    );
}

export default Category;