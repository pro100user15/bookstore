import React, {FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {BookList} from "../../models/Book";
import {Link, useNavigate} from "react-router-dom";
import {Checkbox} from '@mui/material';
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import $api from "../../http";
import {toastr} from "react-redux-toastr";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Role} from "../../models/Authority";

interface BookItemProps {
    book: BookList
}

const BookItem: FC<BookItemProps> = ({book}) => {

    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
        toastr.info("Wish list", "To display the list of desired books, you need to log in to your account");
    }

    const likeBook = (id: number) => {
        $api.post("/user/wish-list", id)
            .then(response => {
                toastr.success("Bookstore", "The book has been successfully added to the list of favorites");
            })
            .catch(reason => {
                toastr.error("Error", "There were technical problems");
            });
    }

    return (
        <Card sx={{maxWidth: "200px", margin: 1}}>
            <CardMedia
                component="img"
                image={book.image || "/book.jpg"}
                alt="book"
                sx={{width: "200px", height: "370px"}}
            />
            <CardContent sx={{height: 140}}>
                <Typography gutterBottom variant="body1" component="div">
                    <Link to={`/books/${book.id}`}>{book.name}</Link>
                </Typography>
                <Typography variant="body2" component="div">
                    {book.category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.authors.map(author =>
                        <Typography variant="body2" color="text.secondary">
                            {author.name + ' ' + author.surname}
                        </Typography>
                    )}
                </Typography>
                <Typography variant="subtitle1" color="orange">
                    {book.price}.грн
                </Typography>
            </CardContent>
            <CardActions>
                <Checkbox icon={<FavoriteBorder/>}
                          checkedIcon={<Favorite/>}
                          onChange={e => {
                              (roles && roles.includes(Role.GUEST)) ?
                                  navigateToLogin()
                                  :
                                  likeBook(book.id)
                          }}
                />
            </CardActions>
        </Card>
    );
};

export default BookItem;