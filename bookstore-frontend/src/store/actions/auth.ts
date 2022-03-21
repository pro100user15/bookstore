import {UserAuthorization, UserLogin} from "../../models/User";

export interface IAuthState {
    token: string,
    user: UserAuthorization
}

export enum AuthActionEnum {
    SET_AUTH= "SET_AUTH"
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH,
    payload: IAuthState
}

export type AuthAction = SetAuthAction;