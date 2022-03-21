import React, {FC, useEffect} from 'react';
import Header from "./components/Header/Header";
import {UserAuthorization} from "./models/User";
import AppRouter from "./router/AppRouter";
import {useDispatch} from "react-redux";
import {AuthActionEnum, IAuthState} from "./store/actions/auth";
import jwt from "jwt-decode";
import {useTypedSelector} from "./hooks/useTypedSelector";

const App: FC = () => {

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
            <Header/>
            <AppRouter/>
        </>
    );
}

export default App;
