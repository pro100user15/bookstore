import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const AuthorizationPage: React.FC = () => {
    const roles = useTypedSelector(state => state.auth.user.roles);
    return (
        <div>
            
        </div>
    );
};

export default AuthorizationPage;