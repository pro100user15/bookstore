import React, {FC, useEffect} from 'react';
import Header from "./components/Header/Header";
import {UserAuthorization} from "./models/User";
import AppRouter from "./router/AppRouter";
import {useDispatch, useSelector} from "react-redux";
import {AuthActionEnum, IAuthState} from "./store/actions/auth";
import jwt from "jwt-decode";
import {useTypedSelector} from "./hooks/useTypedSelector";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container, CssBaseline} from "@mui/material";
import ReduxToastr from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const App: FC = () => {

    const state = useTypedSelector(s => s.toastr);

    const token: string = useTypedSelector<string>(state => state.auth.token);

    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            const token: string = localStorage.getItem('token') || '';
            const user: UserAuthorization = jwt<UserAuthorization>(token);
            dispatch({type: AuthActionEnum.SET_AUTH, payload: {token: token, user: user} as IAuthState});
        }
        else {
            const user: UserAuthorization = {roles: ['ROLE_GUEST']} as UserAuthorization;
            dispatch({
                type: AuthActionEnum.SET_AUTH,
                payload: {user: user} as IAuthState
            });
        }
    }, [token]);

    return (
        <>
            <CssBaseline />
            <Header/>
            <AppRouter/>
            <ReduxToastr
                timeOut={7000}
                newestOnTop={false}
                preventDuplicates
                position='top-right'
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
            />
        </>
    );
}

export default App;
