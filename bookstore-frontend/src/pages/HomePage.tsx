import React, {FC} from 'react';
import {Container} from "@mui/material";
import {toastr} from "react-redux-toastr";

const HomePage: FC = () => {
    return (
        <Container maxWidth="xl" sx={{marginTop: "100px", paddingTop: "10px"}}>
            Hello, it`s a Home page!
            <button
                onClick={() => toastr.light('The title', 'The message')}
                type="button">
                light
            </button>
            <button
                onClick={() => toastr.message('The title', 'The message')}
                type="button">
                message
            </button>
            <button
                onClick={() => toastr.info('The title', 'The message')}
                type="button">
                Info
            </button>
            <button
                onClick={() => toastr.success('The title', 'The message')}
                type="button">
                success
            </button>
            <button
                onClick={() => toastr.warning('The title', 'The message')}
                type="button">
                warning
            </button>
            <button
                onClick={() => toastr.error('The title', 'The message')}
                type="button">
                error
            </button>
        </Container>
    );
}

export default HomePage;