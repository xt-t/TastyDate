import axios from 'axios'
import {UserTimeVote} from "../models/result/UserTimeVote";
import {LoginData, RegisterData} from "../models/loginregister/loginregister"
import {dataInfoDate} from "../models/appointmentsettings/DataInfoDate";
import {dataPickedTime} from "../models/appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../models/appointmentsettings/DataPickedRestaurant";
import {UserRestaurantVote} from "../models/result/UserRestaurantVote";

export interface DateSettingsItemDTO {
    infoDate: dataInfoDate,
    infoDateTimes: dataPickedTime[],
    infoRestaurantData: dataPickedRestaurant[]
}

export const loginPost = (login:LoginData) : Promise<string> =>
    axios.post(`/auth/login`, login).then(response => response.data)

export const registerPost = (register:RegisterData) : Promise<string> =>
    axios.post(`/registration/user`, register).then(response => response.data)

export const transferSettingsToDB = (settingsItem:DateSettingsItemDTO, token? :string) =>
    axios.post(`/api/appointment/completesettings`, settingsItem, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const updateTastyDateWithVoteTimeItem = (tastyDateId: string, timeVote:UserTimeVote, token? :string) =>
    axios.put(`/api/appointment/${tastyDateId}/timevote`, timeVote, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const updateTastyDateWithVoteRestaurantItem = (tastyDateId: string, restaurantVote:UserRestaurantVote, token? :string) =>
    axios.put(`/api/appointment/${tastyDateId}/restaurantvote`, restaurantVote, token? {headers:{"Authorization": "Bearer" + token}}:{})