import React from "react";
import {NavLink} from "react-router-dom";
import Logo from '@mui/icons-material/MenuBookOutlined';

import './Header.css';
import {Role} from "../../models/Authority";
import {logout} from "../../services/AuthorizationService";

interface HeaderProps {
    authorities: Role[]
}

const Header: React.FC<HeaderProps> = ({authorities}) => {
    return (
        <header>
            <nav>
                <NavLink to={'/'} className='logo' style={{display: "flex"}}>
                    <Logo/>
                    <span>Bookstore</span>
                </NavLink>
                <NavLink to={'/books'} className='link'>Books</NavLink>
                {authorities.includes(Role.MODERATOR) && (
                    <NavLink to={'/categories'} className='link'>Categories</NavLink>
                )}
                {authorities.includes(Role.ADMIN) && (
                    <NavLink to={'/admin'} className='link'>Admin</NavLink>
                )}
                {authorities.length >= 1 && (
                    <div style={{display: "flex"}}>
                        <NavLink to={'/profile'} className='link'>Profile</NavLink>
                        <NavLink to={'/'} className='link' onClick={logout}>Logout</NavLink>
                    </div>
                )}
                {authorities.length === 0 && (
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