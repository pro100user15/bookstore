import {CategoryAction, CategoryActionEnum, EditCategory, ICategoryState} from "../actions/category";

const initialState: ICategoryState = {
    categories: [],
    editCategory: {} as EditCategory
}

export default function authReducer(state = initialState, action: CategoryAction): ICategoryState {
    switch (action.type) {
        case CategoryActionEnum.SET_CATEGORIES:
            return {...state, categories: action.payload};
        case CategoryActionEnum.ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]};
        case CategoryActionEnum.UPDATE_CATEGORY:
            return {...state, categories: [...state.categories, state.categories[action.payload.index] = action.payload.category]};
        case CategoryActionEnum.DELETE_CATEGORY:
            return {...state, categories: state.categories.filter(c => c.id !== action.payload.id)};
            case CategoryActionEnum.SET_EDIT_CATEGORY:
            return {...state, editCategory: {index: action.payload.index, category: action.payload.category}};
        default:
            return state;
    }
}