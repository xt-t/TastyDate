import {dataInfoDate} from "../appointmentsettings/DataInfoDate";
import {dataPickedTime} from "../appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../appointmentsettings/DataPickedRestaurant";
import {UserTimeVote} from "./UserTimeVote";

export interface TastyDateItem {
    tastyDateId: string,
    infoDate: dataInfoDate,
    infoDateTimes: dataPickedTime[],
    infoRestaurantData: dataPickedRestaurant[],
    timeVotes: UserTimeVote[]
    voteResults: number[]
}