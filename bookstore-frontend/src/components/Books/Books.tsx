import React, {useEffect, useState} from 'react';
import {BookList} from "../../models/Book";
import BookItem from "./BookItem";
import $api from "../../http";
import {Pagination} from "@mui/material";

const Books = () => {
    const [books, setBooks] = useState<BookList[]>([]);
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(2);

    useEffect(() => {
        $api.get<BookList[]>("/books?page=" + page + "&size=" + size)
            .then(value => {
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