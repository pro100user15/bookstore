import {Container, Typography} from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import {BookDetails} from "../../models/Book";
import {useParams} from "react-router-dom";
import $api from '../../http';
import {toastr} from 'react-redux-toastr'

const BookDetailsPage: FC = () => {

    const [book, setBook] = useState<BookDetails>({} as BookDetails);

    const params = useParams();

    useEffect(() => {
        $api.get<BookDetails>("/books/" + params.id)
            .then((response) => {
                console.log("data", response);
                setBook(response.data);
                console.log(book);
            });
    }, [])

    return (
        <Container maxWidth="xl" sx={{marginTop: "100px", paddingTop: "10px"}}>
            <Typography variant="h2" component="div">
                {book.name}
            </Typography>
            <div style={{display: "flex"}}>
                <div>
                    <img src={book.image} alt={book.name} height={500} width={300}/>
                </div>
                <div>
                    <table>

                    </table>
                </div>
            </div>
        </Container>
    );
};

export default BookDetailsPage;