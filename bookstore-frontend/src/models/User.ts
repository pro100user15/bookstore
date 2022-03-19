import {Role} from "./Authority";

export interface UserRegistration {
    name: string,
    surname: string,
    email: string,
    phone: string,
    sex: string,
    password: string,
    address: string
}

export interface UserLogin {
    email: string,
    password: string
}

export interface UserAuthorization {
    email: string,
    roles: Role[],
    active: boolean,
    exp: number
}