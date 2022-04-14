import React, {FC, useEffect, useState} from 'react';
import FilterBar from "../components/Books/FilterBar";
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Pagination,
    Select,
    Typography
} from "@mui/material";
import Books from "../components/Books/Books";
import {Role} from "../models/Authority";
import {useTypedSelector} from "../hooks/useTypedSelector";
import MyModal from "../components/UI/modal/MyModal";
import AddBookForm from "../components/Books/AddBookForm/AddBookForm";
import {BookList} from "../models/Book";
import $api from "../http";
import {toastr} from "react-redux-toastr";

const BooksPage: FC = () => {
    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [books, setBooks] = useState<BookList[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const [open, setOpen] = useState<boolean>(false);

    const [allPage, setAllPage] = useState<number>(1);
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(2);
    const [sort, setSort] = useState<string>("1");

    useEffect(() => {
        setLoading(true);
        $api.get<BookList[]>("/books?page=" + page + "&size=" + size)
            .then(value => {
                setBooks(value.data);
                setLoading(false);
            })
            .catch(reason => {
                toastr.error("Error", "There were technical problems");
            });
    }, [page, size])

    useEffect(() => {
        $api.get("/books/count")
            .then(value => {
                console.log("count", value.data);
                setAllPage(value.data.count);
            })
            .catch(reason => {
                toastr.error("Error", "There were technical problems");
            });
    }, [])

    return (
        <Container maxWidth="xl" sx={{marginTop: "64px", paddingTop: "10px"}}>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <FormControl sx={{m: 1, minWidth: 120}}>
                    <InputLabel>Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={size}
                        label="Size"
                        onChange={e => {
                            // @ts-ignore
                            setSize(e.target.value);
                        }}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                    </Select>
                </FormControl>
                {/*<FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                        <InputLabel>Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Sort"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                        >
                            <MenuItem value={1}>Featured</MenuItem>
                            <MenuItem value={2}>Price: Low to High</MenuItem>
                            <MenuItem value={3}>Price: High to Low</MenuItem>
                        </Select>
                    </FormControl>*/}
            </div>
            {/*{
                roles && (roles.includes(Role.MODERATOR) || roles.includes(Role.ADMIN)) &&
                <div>
                    <Button onClick={e => setOpen(true)} sx={{border: "1px solid blue", borderRadius: "2px"}}>Add
                        Book</Button>
                    <MyModal open={open} setOpen={setOpen} children={
                        <AddBookForm/>
                    }/>
                </div>
            }*/}
            <div style={{display: "flex"}}>
                {/*<div style={{width: 300}}>
                    <FilterBar/>
                </div>*/}
                <div>
                    <Books books={books} isLoading={isLoading}/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Pagination count={Math.ceil(allPage / size)} page={page}
                                    onChange={(e, value) => setPage(value)}
                                    showFirstButton showLastButton shape="rounded"/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BooksPage;