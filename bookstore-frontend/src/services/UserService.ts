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

    /*static async getCategoryById(id : string | undefined): Promise<AxiosResponse<CategoryWithCountBooks>> {
        return $api
            .get<CategoryWithCountBooks>(CATEGORIES_URL + id);
        //.then(response => response.status ===);
    }

    static async createCategory(category: Category): Promise<AxiosResponse<CategoryWithCountBooks>> {
        return $api
            .post<CategoryWithCountBooks>(CATEGORIES_URL, category);
    }

    static async updateCategory(category: Category): Promise<AxiosResponse<CategoryWithCountBooks>> {
        return $api
            .put<CategoryWithCountBooks>(CATEGORIES_URL, category);
    }

    static async deleteCategory(category: CategoryWithCountBooks): Promise<AxiosResponse<CategoryWithCountBooks>> {
        return $api
            .delete<CategoryWithCountBooks>(CATEGORIES_URL + category.id);
    }*/
}

export default UserService;