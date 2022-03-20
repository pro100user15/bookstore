import React, {useState, useEffect, FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import AuthorizationService from "./services/AuthorizationService";
import {Role} from "./models/Authority";
import {UserAuthorization, UserLogin} from "./models/User";
import HomePage from "./pages/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import Category from "./components/Categories/Category/Category";
import CategoryDetails from "./components/Categories/CategoryDetails/CategoryDetails";
import NotFoundPage from "./pages/NotFoundPage";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import AppRouter from "./router/AppRouter";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionEnum, SetAuthAction} from "./store/actions/auth";
import jwt from "jwt-decode";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            const user: UserAuthorization = jwt<UserAuthorization>(localStorage.getItem('token') || '');
            dispatch({type: AuthActionEnum.SET_AUTH, payload: user} as SetAuthAction);
        }
    }, []);

    return (
        <>
            <Header/>
            <AppRouter/>
        </>
    );
}

export default App;
