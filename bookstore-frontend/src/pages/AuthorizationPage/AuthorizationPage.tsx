import React, {FC, useEffect, useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import './AuthorizationPage.css'

interface IAuthorize {
    isLogin?: boolean
}

const AuthorizationPage: FC<IAuthorize> = ({isLogin}) => {
    return (
        <div className="auth-page">
            {
                isLogin ?
                    <LoginForm/>
                    :
                    <RegistrationForm/>
            }
        </div>
    );
};

export default AuthorizationPage;