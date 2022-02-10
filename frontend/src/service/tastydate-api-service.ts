import axios from 'axios'
import {UserTimeVote} from "../models/result/UserTimeVote";
import {LoginData, RegisterData} from "../models/loginregister/loginregister"
import {dataInfoDate} from "../models/appointmentsettings/DataInfoDate";
import {dataPickedTime} from "../models/appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../models/appointmentsettings/DataPickedRestaurant";

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
    axios.post(`/api/appointment/completeSettings`, settingsItem, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const transferUserTimeVote = (timeVote:UserTimeVote, token? :string) =>
    axios.post(`/api/appointment/timeVote`, timeVote, token? {headers:{"Authorization": "Bearer" + token}}:{})