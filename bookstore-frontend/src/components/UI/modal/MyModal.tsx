import React from 'react';

import cl from './MyModal.module.css';
import {Box, Modal, Typography} from "@mui/material";

const MyModal = ({children, open, setOpen}) => {

    const rootClasses = [cl.myModal];
    if(visible) {
        rootClasses.push(cl.active);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    );
}

export default MyModal;