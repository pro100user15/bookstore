import {FC} from 'react';
import LoginForm from "../components/LoginForm/LoginForm";

const AuthorizationPage: FC = () => {
    return (
        <div className="auth-page">
            <LoginForm/>
        </div>
    );
};

export default AuthorizationPage;