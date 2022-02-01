import axios from 'axios'

export interface LoginData {
    name: string | undefined,
    password: string | undefined,
}

export const loginPost = (login:LoginData) =>
    axios.post(`auth/login`, login).then(response => response.data)