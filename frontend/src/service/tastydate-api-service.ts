import axios from 'axios'
import {GeneralInfoDateItem} from "../models/appointmentsettings/GeneralInfoDateItem";
import {RestaurantItem} from "../models/appointmentsettings/RestaurantItem";
import {TimeItem} from "../models/appointmentsettings/TimeItem";
import {LoginData, RegisterData} from "../models/loginregister/loginregister";
import {UserTimeVote} from "../models/result/UserTimeVote";
import {UserRestaurantVote} from "../models/result/UserRestaurantVote";
import {RestaurantCard} from "../models/restaurants/RestaurantCard";


export interface DateSettingsItemDTO {
    infoTastyDate: GeneralInfoDateItem,
    infoTastyDateTimes: TimeItem[],
    infoRestaurantData: RestaurantItem[]
}

export interface RestaurantCardDTO {
    restaurantName: string,
    category: string,
    rating: number,
    price: number
    postcode: number,
    city: string,
}

export const loginPost = (login:LoginData) : Promise<string> =>
    axios.post(`/auth/login`, login).then(response => response.data)

export const registerPost = (register:RegisterData) : Promise<string> =>
    axios.post(`/registration/user`, register).then(response => response.data)

export const getAllTastyDateItems = (token?: string) =>
    axios.get(`/api/appointment`, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const transferSettingsToDB = (settingsItem:DateSettingsItemDTO, token? :string) =>
    axios.post(`/api/appointment/completesettings`, settingsItem, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const updateTastyDateWithVoteTimeItem = (tastyDateId: string, timeVote:UserTimeVote, token? :string) =>
    axios.put(`/api/appointment/${tastyDateId}/timevote`, timeVote, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const updateTastyDateWithVoteRestaurantItem = (tastyDateId: string, restaurantVote:UserRestaurantVote, token? :string) =>
    axios.put(`/api/appointment/${tastyDateId}/restaurantvote`, restaurantVote, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const getAllRestaurantCards = (token?: string) =>
    axios.get(`/api/restaurantlists`, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const getRestaurantCardById = (id: string, token?: string) =>
    axios.get(`/api/restaurantlists/${id}`, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const transferRestaurantCardToDB = (newRestaurantCard:RestaurantCardDTO, token? :string) =>
    axios.post(`/api/restaurantlists`, newRestaurantCard, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const updateRestaurantCard = (changeRestaurantCard: RestaurantCard, token?: string) =>
    axios.put(`/api/restaurantlists/${changeRestaurantCard.id}/update`, changeRestaurantCard, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const removeRestaurantCard = (id:string, token?: string) =>
    axios.delete(`/api/restaurantlists/${id}`, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const removeRestaurantList = (token?: string) =>
    axios.delete(`/api/restaurantlists`, token? {headers:{"Authorization": "Bearer" + token}}:{})

