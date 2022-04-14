import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Logo from '@mui/icons-material/MenuBookOutlined';
import {Role} from "../../models/Authority";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AuthorizationService from "../../services/AuthorizationService";
import {useDispatch} from "react-redux";
import {AuthActionEnum, IAuthState} from "../../store/actions/auth";
import {UserAuthorization} from "../../models/User";
import {AppBar, Container, Toolbar, Typography} from "@mui/material";

import './Header.css';

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

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="h5" component="div">
                        <Logo/>
                        <NavLink to={'/'} className="link"><b>Bookstore</b></NavLink>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <NavLink to="/books" className="link">Books</NavLink>
                    {(roles && roles.includes(Role.USER)) && (
                        <NavLink to="/categories" className="link">Categories</NavLink>
                    )}
                    {(roles && roles.includes(Role.MODERATOR)) && (
                        <NavLink to="/categories" className="link">Categories</NavLink>
                    )}
                    {(roles && roles.includes(Role.ADMIN)) && (
                        <NavLink to="/admin" className="link">Admin</NavLink>
                    )}
                    </Typography>
                    {(roles && roles.length) >= 1 && !roles.includes(Role.GUEST) && (
                        <Typography variant="h6" component="div">
                            <NavLink to='/profile' className="link">Profile</NavLink>
                            <NavLink to='/' className="link" onClick={logout}>Log out</NavLink>
                        </Typography>
                    )}
                    {(!roles || roles.includes(Role.GUEST)) && (
                        <Typography variant="h6" component="div">
                            <NavLink to='/login' className="link">Log in</NavLink>
                            <NavLink to='/registration' className="link">Sign Up</NavLink>
                        </Typography>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;