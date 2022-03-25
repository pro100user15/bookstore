import React, {useEffect, useState} from 'react';
import {Role} from "../models/Authority";
import HomePage from "../pages/HomePage";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Category from "../components/Categories/Category/Category";
import Profile from "../pages/Profile";
import CategoryDetails from "../components/Categories/CategoryDetails/CategoryDetails";

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

    const [routes, setRoutes] = useState<IRote[]>([
        {path: RouteNames.HOME, component: HomePage},
        {path: RouteNames.CATEGORIES, component: Category},
        {path: RouteNames.CATEGORIES + '/:id', component: CategoryDetails},
        {path: RouteNames.LOGIN, component: LoginForm},
        {path: RouteNames.REGISTRATION, component: RegistrationForm},
        {path: RouteNames.PROFILE, component: Profile},
    ]);

    useEffect(() => {
        if(roles && roles.includes(Role.GUEST)) {
            const guestRoutes: IRote[] = [
                {path: RouteNames.LOGIN, component: LoginForm},
                {path: RouteNames.REGISTRATION, component: RegistrationForm}
            ];

            console.log(guestRoutes);
            setRoutes(prev => prev = prev.concat(guestRoutes));
            console.log(routes);
        }

        if(roles && roles.includes(Role.MODERATOR)) {
            const guestRoutes: IRote[] = [
                {path: RouteNames.CATEGORIES, component: Category}
            ];

            console.log(guestRoutes);
            setRoutes(prev => prev = prev.concat(guestRoutes));
            console.log(routes);
        }
    }, [roles]);

    return routes;
}

export default AppRoutes;