import React, {FC} from 'react';

import cl from './MyModal.module.css';
import {Box, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};

interface MyModalProps {
    open: boolean,
    setOpen(flag: boolean): void,
    children: React.ReactNode
}

const MyModal: FC<MyModalProps> = ({open, setOpen, children}) => {
    return (
        <Modal
            open={open}
            onClose={e => setOpen(false)}
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