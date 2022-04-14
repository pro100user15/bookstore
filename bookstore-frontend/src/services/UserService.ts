import $api from '../http';
import axios, {AxiosResponse} from "axios";
import {Category, CategoryWithCountBooks} from "../models/Category";
import {UserInfo} from "os";
import {User} from "../models/User";

const USER_URL = /*process.env.REACT_APP_BASE_URL +*/ '/user';

class UserService {

    static async getProfile(): Promise<AxiosResponse<User>> {
        return $api
            .get<User>(USER_URL + '/profile');
    }
}

export default UserService;