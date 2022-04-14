import React, {FC, useEffect, useState} from 'react';
import {Button, Container, Typography} from "@mui/material";
import FilterBar from "../components/Books/FilterBar";
import Books from "../components/Books/Books";
import {BookList} from "../models/Book";
import $api from "../http";
import {toastr} from "react-redux-toastr";

const WishList: FC = () => {

    const [books, setBooks] = useState<BookList[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        $api.get<BookList[]>("/user/wish-list")
            .then(value => {
                setBooks(value.data);
                setLoading(false);
            })
            .catch(reason => {
            toastr.error("Error", "There were technical problems");
        });
    }, [])

    return (
        <Container maxWidth="xl" sx={{marginTop: "64px", paddingTop: "10px"}}>
            <Typography variant="h2" component="div">
                Wish list
            </Typography>
            <div>
                <Books books={books} isLoading={isLoading}/>
            </div>
        </Container>
    );
};

export default WishList;