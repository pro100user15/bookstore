import $api from "../http";
import jwt from 'jwt-decode'
import {UserAuthorization, UserLogin, UserRegistration} from "../models/User";
import {useDispatch} from "react-redux";
import {AxiosResponse} from "axios";

class AuthorizationService {

    static async login(user: UserLogin): Promise<AxiosResponse<string>> {
        return $api
            .post<string>('/login', user)
            .then(response => {
                console.log(response);
                if(response.data) {
                    localStorage.setItem('token', response.data);
                }
                return response;
            });
    }

    static async logout() {
        localStorage.removeItem("token");
    }

    static async register(user: UserRegistration) {
        return $api
            .post('/registration', user);
    }

    static async getCurrentUser() : Promise<UserAuthorization | null> {
        if(localStorage.getItem("token"))
            return jwt<UserAuthorization>(localStorage.getItem("token") || '');
        return null;
    }
}

export default AuthorizationService;