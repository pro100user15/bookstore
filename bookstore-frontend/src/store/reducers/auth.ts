import {AuthAction, AuthActionEnum, IAuthState} from "../actions/auth";
import {UserAuthorization} from "../../models/User";

const initialState: IAuthState = {
    user: {} as UserAuthorization
}

export default function authReducer(state = initialState, action: AuthAction): IAuthState {
    console.log('switch');
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            console.log(action.payload);
            console.log({...state, user: action.payload});
            return {...state, user: action.payload};
        default:
            console.log('default');
            return state;
    }
}