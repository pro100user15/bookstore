import $api from '../http';
import axios, {AxiosResponse} from "axios";
import {Category, CategoryWithCountBooks} from "../models/Category";

const CATEGORIES_URL = '/categories/';

class CategoryService {

   static async getCategories(): Promise<AxiosResponse<CategoryWithCountBooks[]>> {
      return $api
          .get<CategoryWithCountBooks[]>(CATEGORIES_URL);
   }

   static async getCategoryById(id : string | undefined): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .get<CategoryWithCountBooks>(CATEGORIES_URL + id);
   }

   static async createCategory(category: Category): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .post<CategoryWithCountBooks>(CATEGORIES_URL, category);
   }

   static async updateCategory(category: CategoryWithCountBooks): Promise<AxiosResponse<Category>> {
      return $api
          .put<Category>(CATEGORIES_URL, category);
   }

   static async deleteCategory(category: CategoryWithCountBooks): Promise<AxiosResponse<CategoryWithCountBooks>> {
      return $api
          .delete<CategoryWithCountBooks>(CATEGORIES_URL + category.id);
   }
}

export default CategoryService;