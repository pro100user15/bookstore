import React, {useState} from 'react';
import {Role} from "../models/Authority";
import HomePage from "../pages/HomePage";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Category from "../components/Categories/Category/Category";

interface IRote {
    path: string,
    component: React.FC
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration',
    CATEGORIES = '/categories'
}

const AppRoutes = (): IRote[]  => {
    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [routes, setRoutes] = useState<IRote[]>([
        {path: RouteNames.HOME, component: HomePage},
        {path: RouteNames.LOGIN, component: LoginForm},
        {path: RouteNames.REGISTRATION, component: RegistrationForm},
        {path: RouteNames.CATEGORIES, component: Category}
    ]);

    if(roles && roles.includes(Role.GUEST)) {
        const guestRoutes: IRote[] = [
            {path: RouteNames.LOGIN, component: LoginForm},
            {path: RouteNames.REGISTRATION, component: RegistrationForm}
        ];
        setRoutes(prevState => [...prevState, ...guestRoutes]);
    }

    console.log(routes);

    return routes;
}

export default AppRoutes;