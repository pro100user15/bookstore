import React, {useEffect, useState} from 'react';
import {Role} from "../models/Authority";
import HomePage from "../pages/HomePage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Category from "../components/Categories/Category/Category";
import Profile from "../pages/Profile";
import CategoryDetails from "../components/Categories/CategoryDetails/CategoryDetails";
import ProfileEdit from "../pages/ProfileEdit";
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage";

interface IAuthorize {
    isLogin?: boolean
}

interface IRote {
    path: string,
    component: React.FC<IAuthorize>,
    flag?: boolean
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration',
    CATEGORIES = '/categories',
    PROFILE = '/profile',
    PROFILE_EDIT = '/profile-edit',
}

const AppRoutes = (): IRote[]  => {
    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [routes, setRoutes] = useState<IRote[]>([]);

    useEffect(() => {
        setRoutes([
            {path: RouteNames.HOME, component: HomePage},
            {path: RouteNames.CATEGORIES, component: Category},
            {path: RouteNames.CATEGORIES + '/:id', component: CategoryDetails}
        ]);

        if(roles && roles.includes(Role.GUEST)) {
            const guestRoutes: IRote[] = [
                {path: RouteNames.LOGIN, component: AuthorizationPage, flag: true},
                {path: RouteNames.REGISTRATION, component: AuthorizationPage, flag: false}
            ];
            setRoutes(prev => prev = prev.concat(guestRoutes));
        }

        if(roles && roles.includes(Role.USER)) {
            const userRoutes: IRote[] = [
                {path: RouteNames.PROFILE, component: Profile},
                {path: RouteNames.PROFILE_EDIT, component: ProfileEdit}
            ];
            setRoutes(prev => prev = prev.concat(userRoutes));
        }
    }, [roles]);

    return routes;
}

export default AppRoutes;