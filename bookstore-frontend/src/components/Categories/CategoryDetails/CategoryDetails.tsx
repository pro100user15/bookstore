import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
import {CategoryWithCountBooks} from "../../../models/Category";
import { Container } from '@mui/material';

const CategoryDetails = () => {

    const params = useParams();

    const [category, setCategory] = useState<CategoryWithCountBooks>({} as CategoryWithCountBooks);

    useEffect(() => {
        CategoryService.getCategoryById(params.id)
            .then((response) => {
            setCategory(response.data);
        });
    }, []);

    return (
        <Container maxWidth="xl" sx={{marginTop: "100px", paddingTop: "10px"}}>
            <table>
                <caption>Information about category</caption>
                <tbody>
                <tr>
                    <td>Category name :</td>
                    <td>{category.name}</td>
                </tr>
                <tr>
                    <td>Count books :</td>
                    <td>{category.countBooks}</td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default CategoryDetails;