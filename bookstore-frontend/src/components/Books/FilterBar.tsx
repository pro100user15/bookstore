import React, {FC, useState} from 'react';
import {ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from '@mui/material';

const FilterBar: FC = () => {

    const [openAuthor, setOpenAuthor] = useState<boolean>(false);
    const [openCategory, setOpenCategory] = useState<boolean>(false);

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Filters
                </ListSubheader>
            }
        >
            <ListItemButton onClick={e => setOpenAuthor(!openAuthor)}>
                <ListItemText primary="Author" />
                {openAuthor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAuthor} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Ткачук Богдан" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Татарчук Андрій" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton onClick={e => setOpenCategory(!openCategory)}>
                <ListItemText primary="Category" />
                {openCategory ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCategory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Фантастика" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Наукова" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};

export default FilterBar;