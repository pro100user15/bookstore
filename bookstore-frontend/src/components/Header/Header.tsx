import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Logo from '@mui/icons-material/MenuBookOutlined';

import './Header.css';
import {Role} from "../../models/Authority";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AuthorizationService from "../../services/AuthorizationService";

const Header: FC = () => {
    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);
    return (
        <header>
            <nav>
                <NavLink to={'/'} className='logo' style={{display: "flex"}}>
                    <Logo/>
                    <span>Bookstore</span>
                </NavLink>
                <NavLink to={'/books'} className='link'>Books</NavLink>
                {(roles && roles.includes(Role.MODERATOR)) && (
                    <NavLink to={'/categories'} className='link'>Categories</NavLink>
                )}
                {(roles && roles.includes(Role.ADMIN)) && (
                    <NavLink to={'/admin'} className='link'>Admin</NavLink>
                )}
                {(roles && roles.length) >= 1 && (
                    <div style={{display: "flex"}}>
                        <NavLink to={'/profile'} className='link'>Profile</NavLink>
                        <NavLink to={'/'} className='link' onClick={AuthorizationService.logout}>Logout</NavLink>
                    </div>
                )}
                {(!roles || roles.length === 0) && (
                    <div style={{display: "flex"}}>
                        <NavLink to={'/login'} className='link'>Login</NavLink>
                        <NavLink to={'/registration'} className='link login'>Sign Up</NavLink>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;