import React, {useEffect, useState} from 'react';
import {Book} from "../../models/Book";
import BookItem from "./BookItem";
import $api from "../../http";
import {Pagination} from "@mui/material";

const Books = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        $api.get<Book[]>("/books").then(value => {
            setBooks(value.data);
        })
    }, [])
    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {books.map(book =>
                    <BookItem book={book} key={book.id}/>
                )}
            </div>
            <Pagination count={10} shape="rounded" />
        </>
    );
};

export default Books;