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



// export const getAllShoppingitems = (token?: string) =>
//     axios.get(`/api/shop`, token? {headers:{"Authorization": "Bearer" + token}}:{}).then(response => response.data)
//
// export const getShoppingitemById = (id: string, token?: string) =>
//     axios.get(`/api/shop/${id}`, token? {headers:{"Authorization": "Bearer" + token}}:{}).then(response => response.data)
//
// export const updateShoppingitem = (product: Shoppingitem, token?: string) =>
//     axios.put(`/api/shop/${product.id}/update`, product, token? {headers:{"Authorization": "Bearer" + token}}:{})
//
// export const addShoppingitem = (product: { quantity: number; name: string; checked: boolean; id: string }, token?: string) => axios.post(`/api/shop/`, product, token? {headers:{"Authorization": "Bearer" + token}}:{})
//
// export const deleteWholeList = (token?: string) => axios.delete(`/api/shop/`, token? {headers:{"Authorization": "Bearer" + token}}:{})
//
// export const deleteShoppingitem = (id:string, token?: string) => axios.delete(`/api/shop/${id}`, token? {headers:{"Authorization": "Bearer" + token}}:{})