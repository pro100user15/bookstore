import {CategoryWithCountBooks} from "../../models/Category";

export interface EditCategory {
    index: number,
    category: CategoryWithCountBooks
}

export interface ICategoryState {
    categories: CategoryWithCountBooks[],
    editCategory: EditCategory
}

export enum CategoryActionEnum {
    SET_CATEGORIES= "SET_CATEGORIES",
    ADD_CATEGORY= "ADD_CATEGORY",
    UPDATE_CATEGORY= "UPDATE_CATEGORY",
    DELETE_CATEGORY= "DELETE_CATEGORY",
    SET_EDIT_CATEGORY= "SET_EDIT_CATEGORY",
}

export interface SetCategoriesAction {
    type: CategoryActionEnum.SET_CATEGORIES,
    payload: CategoryWithCountBooks[]
}

export interface AddCategoryAction {
    type: CategoryActionEnum.ADD_CATEGORY,
    payload: CategoryWithCountBooks
}

export interface UpdateCategoryAction {
    type: CategoryActionEnum.UPDATE_CATEGORY,
    payload: {
        index: number,
        category: CategoryWithCountBooks
    }
}

export interface DeleteCategoryAction {
    type: CategoryActionEnum.DELETE_CATEGORY,
    payload: CategoryWithCountBooks
}

export interface SetEditCategoryAction {
    type: CategoryActionEnum.SET_EDIT_CATEGORY,
    payload: EditCategory
}

export type CategoryAction =
    SetCategoriesAction
    | AddCategoryAction
    | UpdateCategoryAction
    | DeleteCategoryAction
    | SetEditCategoryAction;