import $api from '../http';
import axios, {AxiosResponse} from "axios";
import {Category, CategoryWithCountBooks} from "../models/Category";

const CATEGORIES_URL = /*process.env.REACT_APP_BASE_URL +*/ '/categories/';

class CategoryService {

   static async getCategories(): Promise<AxiosResponse<CategoryWithCountBooks[]>> {
      return $api
          .get<CategoryWithCountBooks[]>(CATEGORIES_URL);
   }

   static async getCategoryById(id : string | undefined): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .get<CategoryWithCountBooks>(CATEGORIES_URL + id);
          //.then(response => response.status ===);
   }

   static async createCategory(category: CategoryWithCountBooks): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .post<CategoryWithCountBooks>(CATEGORIES_URL, category);
   }

   static async updateCategory(category: CategoryWithCountBooks): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .put<CategoryWithCountBooks>(CATEGORIES_URL, category);
   }

   static async deleteCategory(category: CategoryWithCountBooks): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .delete<CategoryWithCountBooks>(CATEGORIES_URL + category.id);
   }
}

export default CategoryService;