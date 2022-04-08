import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BookList} from "../../models/Book";
import classes from "../Categories/CategoryItem/CategoryItem.module.css";
import {Link} from "react-router-dom";

interface BookItemProps {
    book: BookList
}

const BookItem: FC<BookItemProps> = ({book}) => {
    return (
        <Card sx={{ maxWidth: "170px", margin: 1 }}>
            <CardMedia
                component="img"
                image={book.image || "/book.jpg"}
                alt="book"
                sx={{width: "140px", height: "210px"}}
            />
            <CardContent sx={{height: 160}}>
                <Typography gutterBottom variant="body1" component="div">
                    <Link to={`/books/${book.id}`}>{book.name}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.authors.map(author =>
                        <Typography variant="body2" color="text.secondary">
                            {author.name + ' ' + author.surname}
                        </Typography>
                    )}
                </Typography>
                {/*<Rating name="read-only" value={5} readOnly sx={{fontSize: 14}}/>*/}
                <Typography variant="subtitle1" color="orange">
                    {book.price}.грн
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Buy</Button>
            </CardActions>
        </Card>
    );
};

export default BookItem;