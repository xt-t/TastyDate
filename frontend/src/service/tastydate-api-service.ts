import axios from 'axios'
import {dataInfoDate} from "../models/appointmentsettings/dataInfoDate";
import {dataPickedRestaurant} from "../models/appointmentsettings/dataPickedRestaurant";
import {dataPickedTime} from "../models/appointmentsettings/dataPickedTime";

//Login

export interface LoginData {
    name: string,
    password: string,
}

export interface RegisterData {
    name: string,
    password: string,
}

export interface dataCompleteDateInfos {
    idVote: string,
    infoDate: dataInfoDate,
    infoDateTimes: dataPickedTime[],
    infoRestaurantData: dataPickedRestaurant[]
}

export const loginPost = (login:LoginData) : Promise<string> =>
    axios.post(`/auth/login`, login).then(response => response.data)

export const registerPost = (register:RegisterData) : Promise<string> =>
    axios.post(`/registration/user`, register).then(response => response.data)

export const transferVoteDataToDB = (allDateInfos:dataCompleteDateInfos, token? :string) : Promise<string> =>
    axios.post(`/api/appointment/completeSettings`, allDateInfos, token? {headers:{"Authorization": "Bearer" + token}}:{})
