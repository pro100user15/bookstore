import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Logo from '@mui/icons-material/MenuBookOutlined';
import {Role} from "../../models/Authority";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AuthorizationService from "../../services/AuthorizationService";
import {useDispatch} from "react-redux";
import {AuthActionEnum, IAuthState, SetAuthAction} from "../../store/actions/auth";
import {UserAuthorization, UserLogin} from "../../models/User";
import {AppBar, Button, Container, TextField, Toolbar, Typography} from "@mui/material";
import {useForm, useFormState, Controller, SubmitHandler} from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import ReduxToastr from "react-redux-toastr";
import './Header.css';

interface ISearchForm {
    search: string
}

const Header: FC = () => {

    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const dispatch = useDispatch();

    const logout = () => {
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

    const onSubmit: SubmitHandler<ISearchForm> = (search) => {
        console.log("search...");
        /*AuthorizationService.login(user)
            .then(response => {
                const token: string = localStorage.getItem('token') || '';
                const user: UserAuthorization = jwt<UserAuthorization>(token);
                dispatch({type: AuthActionEnum.SET_AUTH, payload: {token: token, user: user}} as SetAuthAction);
                navigate('/');
            });*/
    };

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Typography variant="h5" component="div">
                            <Logo/>
                            <NavLink to={'/'} className="header-link"><b>Bookstore</b></NavLink>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            <NavLink to="/books" className="header-link">Books</NavLink>
                            {(roles && roles.includes(Role.MODERATOR)) && (
                                <NavLink to="/categories" className="header-link">Categories</NavLink>
                            )}
                            {(roles && roles.includes(Role.ADMIN)) && (
                                <NavLink to="/admin" className="header-link">| Admin</NavLink>
                            )}
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex"}}>
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
                                fullWidth={ true }
                                disableElevation={ true }
                                sx={{
                                    marginTop: 2,
                                    marginBottom: 2
                                }}
                            >
                                <SearchIcon />
                            </Button>
                        </form>
                    </div>
                    <div>
                        {((roles && roles.length) >= 1 && !roles.includes(Role.GUEST)) ?
                            (
                                <Typography variant="h6" component="div">
                                    <NavLink to='/profile' className="header-link">Profile</NavLink>
                                    <NavLink to='/' className="header-link" onClick={logout}>Log out</NavLink>
                                </Typography>
                            )
                            :
                            (
                                <Typography variant="h6" component="div">
                                    <NavLink to='/login' className="header-link">Log in</NavLink>
                                    <NavLink to='/registration' className="header-link">Sign Up</NavLink>
                                </Typography>
                            )
                        }
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;