import axios from 'axios'

export interface LoginData {
    name: string,
    password: string,
}

export interface RegisterData {
    name: string,
    password: string,
}

export const loginPost = (login:LoginData) : Promise<string> =>
    axios.post(`auth/login`, login).then(response => response.data)

export const registerPost = (register:RegisterData) : Promise<string> =>
    axios.post(`registration/user`, register).then(response => response.data)