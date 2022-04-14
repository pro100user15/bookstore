import React, {FC, useEffect, useState} from 'react';
import {ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import {
    Autocomplete, Checkbox,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    TextField
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {CategoryWithCountBooks} from "../../models/Category";
import $api from "../../http";
import CategoryService from "../../services/CategoryService";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const FilterBar: FC = () => {

    const [openAuthor, setOpenAuthor] = useState<boolean>(false);
    const [openCategory, setOpenCategory] = useState<boolean>(false);

    const [categories, setCategories] = useState<CategoryWithCountBooks[]>([]);

    useEffect(() => {
        CategoryService.getCategories()
            .then(response => {
               setCategories(response.data);
            });
    }, [])

    return (
        <List
            sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
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
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={categories}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.name}
                        </li>
                    )}
                    style={{ width: "300px" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
                    )}
                />
            </Collapse>
        </List>
    );
};

export default FilterBar;