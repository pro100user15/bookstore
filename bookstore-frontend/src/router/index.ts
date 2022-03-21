import React, {useEffect, useState} from 'react';
import {Role} from "../models/Authority";
import HomePage from "../pages/HomePage";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Category from "../components/Categories/Category/Category";
import Profile from "../pages/Profile";

interface IRote {
    path: string,
    component: React.FC
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration',
    CATEGORIES = '/categories',
    PROFILE = '/profile',
}

const AppRoutes = (): IRote[]  => {
    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [loading, setLoading] = useState<boolean>(false);

    const [routes, setRoutes] = useState<IRote[]>([
        {path: RouteNames.HOME, component: HomePage},
        {path: RouteNames.CATEGORIES, component: Category},
        {path: RouteNames.LOGIN, component: LoginForm},
        {path: RouteNames.REGISTRATION, component: RegistrationForm},
        {path: RouteNames.PROFILE, component: Profile},
    ]);

    useEffect(() => {
        console.log("111");
        console.log(roles);
        if(roles && roles.includes(Role.GUEST)) {
            console.log("222");
            const guestRoutes: IRote[] = [
                {path: RouteNames.LOGIN, component: LoginForm},
                {path: RouteNames.REGISTRATION, component: RegistrationForm}
            ];
            console.log(guestRoutes);
            setRoutes(prev => prev.concat(routes));
            console.log(routes);
        }

        if(loading === false)
            setLoading(true);
    }, [roles, loading]);

    return routes;
}

export default AppRoutes;