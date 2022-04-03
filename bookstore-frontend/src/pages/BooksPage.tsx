import {FC, useState} from 'react';
import FilterBar from "../components/Books/FilterBar";
import {Box, Button, Container, FormControl, InputLabel, MenuItem, Modal, Select, Typography} from "@mui/material";
import Books from "../components/Books/Books";
import {Role} from "../models/Authority";
import {useTypedSelector} from "../hooks/useTypedSelector";
import MyModal from "../components/UI/modal/MyModal";

const BooksPage: FC = () => {

    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [open, setOpen] = useState<boolean>(false);

    const [sort, setSort] = useState<string>("1");

    return (
        <Container maxWidth="xl" sx={{marginTop: "64px", paddingTop: "10px"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h4" component="div">
                    Books
                </Typography>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
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
                </FormControl>
            </div>
            {
                roles && (roles.includes(Role.MODERATOR) || roles.includes(Role.ADMIN)) &&
                <div>
                    <Button onClick={e => setOpen(true)} sx={{border: "1px solid blue", borderRadius: "2px"}}>Add Book</Button>
                    <MyModal open={open} setOpen={setOpen} children={
                        <div>Hello</div>
                    }/>
                </div>
            }
            <div style={{display: "flex"}}>
                <div style={{width: 300}}>
                    <FilterBar/>
                </div>
                <Books/>
            </div>
        </Container>
    );
};

export default BooksPage;