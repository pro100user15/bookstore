import React, {FC, useState} from "react";
import {NavLink} from "react-router-dom";
import Logo from '@mui/icons-material/MenuBookOutlined';
import {Role} from "../../models/Authority";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AuthorizationService from "../../services/AuthorizationService";
import {useDispatch} from "react-redux";
import {AuthActionEnum, IAuthState, SetAuthAction} from "../../store/actions/auth";
import {UserAuthorization, UserLogin} from "../../models/User";
import {AppBar, Button, Container, IconButton, Menu, MenuItem, TextField, Toolbar, Typography} from "@mui/material";
import {useForm, useFormState, Controller, SubmitHandler} from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Header.css';
import {toastr} from "react-redux-toastr";
import Tooltip from '@mui/material/Tooltip';

interface ISearchForm {
    search: string
}

const Header: FC = () => {

    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [open, setOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(1);
    const activeClass = "is-active"

    const dispatch = useDispatch();

    const logout = () => {
        setActiveTab(1);
        AuthorizationService.logout();
        const user: UserAuthorization = {roles: ['ROLE_GUEST']} as UserAuthorization;
        dispatch({
            type: AuthActionEnum.SET_AUTH,
            payload: {token: '', user: user} as IAuthState
        });
    }

    const {handleSubmit, control} = useForm<ISearchForm>({
        mode: 'onSubmit'
    });
    const {errors} = useFormState({
        control
    });

    /*const onSubmit: SubmitHandler<ISearchForm> = (search) => {
        console.log("search...");
        $api.get<BookList[]>("/books?search=" + search)
            .then(value => )
    };*/

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Typography variant="h5" component="div">
                            <Logo/>
                            <NavLink to={'/'}
                                     className={`header-link ${activeTab === 1 ? activeClass : ''}`}
                                     onClick={e => setActiveTab(1)}
                            >
                                <b>Bookstore</b>
                            </NavLink>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            <NavLink to="/books"
                                     className={`header-link ${activeTab === 2 ? activeClass : ''}`}
                                     onClick={e => setActiveTab(2)}
                            >
                                Books
                            </NavLink>
                            {(roles && roles.includes(Role.MODERATOR)) && (
                                <NavLink to={'/categories'}
                                         className={`header-link ${activeTab === 3 ? activeClass : ''}`}
                                         onClick={e => setActiveTab(3)}
                                >
                                    Categories
                                </NavLink>
                            )}
                            {(roles && roles.includes(Role.ADMIN)) && (
                                <NavLink to={'/admin'}
                                         className={`header-link ${activeTab === 4 ? activeClass : ''}`}
                                         onClick={e => setActiveTab(4)}
                                >
                                    Admin
                                </NavLink>
                            )}
                        </Typography>
                        {/*<form onSubmit={handleSubmit(onSubmit)} style={{display: "flex"}}>
                            <Controller
                                control={control}
                                name="search"
                                render={({field}) => (
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        size="small"
                                        margin="normal"
                                        color="secondary"
                                        fullWidth={true}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e)}
                                    />
                                )}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth={true}
                                disableElevation={true}
                                sx={{
                                    marginTop: 2,
                                    marginBottom: 2
                                }}
                            >
                                <SearchIcon/>
                            </Button>
                        </form>*/}
                    </div>
                    <Typography variant="h6" component="div" style={{display: "flex"}}>
                        {((roles && roles.length) >= 1 && !roles.includes(Role.GUEST)) ?
                            <NavLink to={'/wish-list'}
                                     className={`header-link ${activeTab === 5 ? activeClass : ''}`}
                                     onClick={e => setActiveTab(5)}
                            >
                                <Tooltip title="Wish list">
                                    <IconButton aria-label="wish-list">
                                        {
                                            activeTab === 5 ?
                                                <FavoriteOutlinedIcon/>
                                                :
                                                <FavoriteBorderOutlinedIcon/>
                                        }
                                    </IconButton>
                                </Tooltip>
                            </NavLink>
                            :
                            <NavLink to={'/login'}
                                     onClick={e => toastr.info("Wish list", "To display the list of desired books, you need to log in to your account")}
                            >
                                <Tooltip title="Wish list">
                                    <IconButton aria-label="wish-list">
                                        <FavoriteBorderOutlinedIcon/>
                                    </IconButton>
                                </Tooltip>
                            </NavLink>
                        }
                        {((roles && roles.length) >= 1 && !roles.includes(Role.GUEST)) ?
                            (
                                <Typography variant="h6" component="div">
                                    <NavLink to={'/profile'}
                                             className={`header-link ${activeTab === 6 ? activeClass : ''}`}
                                             onClick={e => setActiveTab(6)}
                                    >
                                        Profile
                                    </NavLink>
                                    <NavLink to='/' className="header-link" onClick={logout}>
                                        Log out
                                    </NavLink>
                                </Typography>
                            )
                            :
                            (
                                <Typography variant="h6" component="div">
                                    <NavLink to={'/login'}
                                             className={`header-link ${activeTab === 7 ? activeClass : ''}`}
                                             onClick={e => setActiveTab(7)}
                                    >
                                        Log in
                                    </NavLink>
                                    <NavLink to={'/registration'}
                                             className={`header-link ${activeTab === 8 ? activeClass : ''}`}
                                             onClick={e => setActiveTab(8)}
                                    >
                                        Sign Up
                                    </NavLink>
                                </Typography>
                            )
                        }
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;