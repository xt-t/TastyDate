import axios from 'axios'
import {dataInfoDate} from "../models/appointmentsettings/DataInfoDate";
import {dataPickedRestaurant} from "../models/appointmentsettings/DataPickedRestaurant";
import {dataPickedTime} from "../models/appointmentsettings/DataPickedTime";

//Login

export interface LoginData {
    name: string,
    password: string,
}

export interface RegisterData {
    name: string,
    password: string,
}

export interface DataCompleteDateInfos {
    idVote: string,
    infoDate: dataInfoDate,
    infoDateTimes: dataPickedTime[],
    infoRestaurantData: dataPickedRestaurant[]
}

export interface UserTimeVote {
    displayedName: string,
    votedTimes: boolean[]
}

export const loginPost = (login:LoginData) : Promise<string> =>
    axios.post(`/auth/login`, login).then(response => response.data)

export const registerPost = (register:RegisterData) : Promise<string> =>
    axios.post(`/registration/user`, register).then(response => response.data)

export const transferSettingsToDB = (allDateInfos:DataCompleteDateInfos, token? :string) =>
    axios.post(`/api/appointment/completeSettings`, allDateInfos, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const transferUserTimeVote = (timeVote:UserTimeVote, token? :string) =>
    axios.post(`/api/appointment/timeVote`, timeVote, token? {headers:{"Authorization": "Bearer" + token}}:{})