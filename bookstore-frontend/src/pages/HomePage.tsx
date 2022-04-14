import React, {FC} from 'react';
import {Container} from "@mui/material";
import {toastr} from "react-redux-toastr";

const HomePage: FC = () => {
    return (
        <Container maxWidth="xl" sx={{marginTop: "64px", paddingTop: "10px"}}>
            Hello, it`s a Home page!
        </Container>
    );
}

export default HomePage;