import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import AppRoutes from './index';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {AppRoutes().map(route =>
                <Route path={route.path}
                       element={<route.component isLogin={route.flag}/>}
                       key={route.path}
                />
            )}
            <Route path='*' element={<Navigate to='/' replace/>}
            />
        </Routes>
)
    ;
};

export default AppRouter;