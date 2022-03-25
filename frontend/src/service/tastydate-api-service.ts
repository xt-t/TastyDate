import axios from 'axios'
import {GeneralInfoDateItem} from "../models/appointmentsettings/GeneralInfoDateItem";
import {TimeItem} from "../models/appointmentsettings/TimeItem";
import {LoginData, RegisterData} from "../models/loginregister/loginregister";
import {UserTimeVote} from "../models/result/UserTimeVote";
import {UserRestaurantVote} from "../models/result/UserRestaurantVote";
import {RestaurantCard} from "../models/restaurants/RestaurantCard";


export interface DateSettingsItemDTO {
    infoTastyDate: GeneralInfoDateItem,
    infoTastyDateTimes: TimeItem[],
    infoRestaurantData: RestaurantCard[]
}

export interface RestaurantCardDTO {
    restaurantName: string,
    category: string,
    rating: number,
    price: number
    postcode: number,
    city: string,
}

export const loginPost = (login: LoginData): Promise<string> =>
    axios.post(`/auth/login`, login).then(response => response.data)

export const registerPost = (register: RegisterData): Promise<string> =>
    axios.post(`/registration/user`, register).then(response => response.data)

export const getAllTastyDateItems = (token?: string) =>
    axios.get(`/api/tastydates/`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const getTastyDateItemById = (tastyDateId: string, token?: string) =>
    axios.get(`/api/tastydates/${tastyDateId}`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const transferSettingsToDB = (settingsItem: DateSettingsItemDTO, token?: string) =>
    axios.post(`/api/tastydates`, settingsItem, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const updateTastyDateWithVoteTimeItem = (tastyDateId: string, timeVote: UserTimeVote, token?: string) =>
    axios.put(`/api/tastydates/${tastyDateId}/timevotes`, timeVote, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const updateTastyDateWithVoteRestaurantCard = (tastyDateId: string, restaurantVote: UserRestaurantVote, token?: string) =>
    axios.put(`/api/tastydates/${tastyDateId}/restaurantvotes`, restaurantVote, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const getAllRestaurantCards = (token?: string) =>
    axios.get(`/api/restaurants`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const getUsersRestaurantList = (token?: string) =>
    axios.get(`/api/restaurants/userlist`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const getRestaurantCardById = (id: string, token?: string) =>
    axios.get(`/api/restaurants/${id}`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const transferRestaurantCardToDB = (newRestaurantCard: RestaurantCardDTO, token?: string) =>
    axios.post(`/api/restaurants`, newRestaurantCard, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const updateRestaurantCard = (changeRestaurantCard: RestaurantCard, token?: string) =>
    axios.put(`/api/restaurants/${changeRestaurantCard.id}/update`, changeRestaurantCard, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const removeRestaurantCard = (id: string, token?: string) =>
    axios.delete(`/api/restaurants/${id}`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

export const removeUsersRestaurantList = (token?: string) =>
    axios.delete(`/api/restaurants`, token ? {headers: {"Authorization": "Bearer" + token}} : {})

