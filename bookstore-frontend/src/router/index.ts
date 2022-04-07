import React, {useEffect, useState} from 'react';
import {Role} from "../models/Authority";
import HomePage from "../pages/HomePage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Category from "../components/Categories/Category/Category";
import Profile from "../pages/Profile";
import CategoryDetails from "../components/Categories/CategoryDetails/CategoryDetails";
import ProfileEdit from "../pages/ProfileEdit";
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage";
import BooksPage from "../pages/BooksPage";

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
    BOOKS = '/books',
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
            {path: RouteNames.BOOKS, component: BooksPage},
        ]);

        if(roles && roles.includes(Role.GUEST)) {
            const guestRoutes: IRote[] = [
                {path: RouteNames.LOGIN, component: AuthorizationPage, flag: true},
                {path: RouteNames.REGISTRATION, component: AuthorizationPage, flag: false}
            ];

            console.log(guestRoutes);
            setRoutes(prev => prev = prev.concat(guestRoutes));
            console.log(routes);
        }

        if(roles && roles.includes(Role.USER)) {
            const userRoutes: IRote[] = [
                {path: RouteNames.PROFILE, component: Profile},
                {path: RouteNames.PROFILE_EDIT, component: ProfileEdit}
            ];

            console.log(userRoutes);
            setRoutes(prev => prev = prev.concat(userRoutes));
            console.log(routes);
        }

        if(roles && (roles.includes(Role.MODERATOR) || roles.includes(Role.ADMIN))) {
            const moderatorRoutes: IRote[] = [
                {path: RouteNames.CATEGORIES, component: Category},
                {path: RouteNames.CATEGORIES + '/:id', component: CategoryDetails}
            ];

            console.log(moderatorRoutes);
            setRoutes(prev => prev = prev.concat(moderatorRoutes));
            console.log(routes);
        }
    }, [roles]);

    return routes;
}

export default AppRoutes;