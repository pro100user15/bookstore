import axios from 'axios';
import jwt from 'jwt-decode'
import {UserAuthorization, UserLogin, UserRegistration} from "../models/User";



export const authHeader = async () => {
    const token = localStorage.getItem("token");

    if(token) {
        return { Authorization: 'Bearer ' + token };
    }
    else {
        return {};
    }
}

export const login = async (user: UserLogin) => {
    console.log(user);
    return axios
        .post('http://localhost:8080/login', user)
        .then(response => {
            if(response.data.token) {
                localStorage.setItem("token", response.data.token);
                console.log(response.data.token);
                const user = jwt(response.data.token);
                console.log(user);
            }
        });
}

export const logout = () => {
    localStorage.removeItem("token");
}

export const register = (user: UserRegistration) => {
    const register = 'registration'
    return axios
        .post('http://localhost:8080/registration', user);
}

export async function getCurrentUser() : Promise<UserAuthorization | null> {
    if(localStorage.getItem("token"))
        return jwt<UserAuthorization>(localStorage.getItem("token") || '');
    return null;
}