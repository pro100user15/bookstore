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
import BookDetailsPage from "../components/Books/BookDetailsPage";
import WishList from "../pages/WishList";

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
    WISH_LIST = '/wish-list',
}

const AppRoutes = (): IRote[]  => {
    const roles: Role[] = useTypedSelector<Role[]>(state => state.auth.user.roles);

    const [routes, setRoutes] = useState<IRote[]>([]);

    useEffect(() => {
        setRoutes([
            {path: RouteNames.HOME, component: HomePage},
            {path: RouteNames.BOOKS, component: BooksPage},
            {path: RouteNames.BOOKS + '/:id', component: BookDetailsPage},
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
                {path: RouteNames.WISH_LIST, component: WishList},
            ];

            setRoutes(prev => prev = prev.concat(userRoutes));
        }

        if(roles && (roles.includes(Role.MODERATOR) || roles.includes(Role.ADMIN))) {
            const moderatorRoutes: IRote[] = [
                {path: RouteNames.CATEGORIES, component: Category},
                {path: RouteNames.CATEGORIES + '/:id', component: CategoryDetails}
            ];

            setRoutes(prev => prev = prev.concat(moderatorRoutes));
        }
    }, [roles]);

    return routes;
}

export default AppRoutes;