import React, {FC, useEffect, useState} from 'react';
import {BookList} from "../../models/Book";
import BookItem from "./BookItem";
import $api from "../../http";
import {Pagination} from "@mui/material";

interface IBooksProps {
    page: number,
    size: number
}

const Books: FC<IBooksProps> = ({page, size}) => {
    const [books, setBooks] = useState<BookList[]>([]);

    useEffect(() => {
        $api.get<BookList[]>("/books?page=" + page + "&size=" + size)
            .then(value => {
                setBooks(value.data);
            })
    }, [])

    return (
        <div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {books.map(book =>
                    <BookItem book={book} key={book.id}/>
                )}
            </div>
        </div>
    );
};

export default Books;