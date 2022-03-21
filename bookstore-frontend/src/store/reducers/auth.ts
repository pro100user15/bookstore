import {AuthAction, AuthActionEnum, IAuthState} from "../actions/auth";
import {UserAuthorization} from "../../models/User";

const initialState: IAuthState = {
    token: '',
    user: {} as UserAuthorization
}

export default function authReducer(state = initialState, action: AuthAction): IAuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, token: action.payload.token, user: action.payload.user} as IAuthState;
        default:
            return state;
    }
}