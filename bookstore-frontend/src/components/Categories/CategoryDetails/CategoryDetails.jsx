import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CategoryService from "../../../services/CategoryService";

const CategoryDetails = () => {

    const params = useParams();

    const [category, setCategory] = useState({});

    useEffect(() => {
        CategoryService.getCategoryById(params.id)
            .then((response) => {
            console.log(response.data)
            setCategory(response.data)
        });
    }, []);

    return (
        <div>
            <h1>{category.name}</h1>
        </div>
    );
};

export default CategoryDetails;