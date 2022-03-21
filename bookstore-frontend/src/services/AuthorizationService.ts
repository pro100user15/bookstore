import $api from "../http";
import jwt from 'jwt-decode'
import {UserAuthorization, UserLogin, User} from "../models/User";
import {useDispatch} from "react-redux";
import {AxiosResponse} from "axios";

class AuthorizationService {

    static async login(user: UserLogin): Promise<AxiosResponse<string>> {
        return $api
            .post<string>('/login', user)
            .then(response => {
                console.log(response);
                console.log(response.data);
                if(response.data) {
                    localStorage.setItem('token', response.data);
                }
                return response;
            });
    }

    static async logout() {
        if(localStorage.getItem("token"))
            localStorage.removeItem("token");
    }

    static async register(user: User) {
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