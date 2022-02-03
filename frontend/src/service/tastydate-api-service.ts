import axios from 'axios'

export interface LoginData {
    name: string | undefined,
    password: string | undefined,
}

export interface RegisterData {
    name: string | undefined,
    password: string | undefined,
    passwordVerify: string | undefined,
}

export const loginPost = (login:LoginData) : Promise<string> =>
    axios.post(`auth/login`, login).then(response => response.data)

export const registerPost = (register:RegisterData) : Promise<string> =>
    axios.post(`registration/user`, register).then(response => response.data)