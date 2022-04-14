import React, {FC, useEffect, useState} from 'react';
import {BookList} from "../../models/Book";
import BookItem from "./BookItem";
import $api from "../../http";
import {Card, CardContent, Checkbox, Pagination, Skeleton, Typography} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import CardActions from "@mui/material/CardActions";

interface IBooksProps {
    books: BookList[],
    isLoading: boolean
}

const Books: FC<IBooksProps> = ({books, isLoading}) => {

    const mockList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            {
                isLoading ?
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {mockList.map(id =>
                            <Card sx={{maxWidth: "200px", margin: 1}}>
                                <Skeleton variant="rectangular" width={200} height={370}/>
                                <CardContent sx={{height: 120}}>
                                    <Skeleton variant="text"/>
                                    <Skeleton variant="text"/>
                                    <Skeleton variant="text"/>
                                    <Skeleton variant="text"/>
                                </CardContent>
                                <CardActions>
                                    <Skeleton variant="circular" width={42} height={42}/>
                                </CardActions>
                            </Card>
                        )}
                    </div>
                    :
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {
                            books.length === 0 &&
                                <Typography variant="h5" component="div">
                                    Books is empty
                                </Typography>
                        }
                        {
                            books.map(book =>
                                <BookItem book={book} key={book.id}/>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default Books;