import {GeneralInfoDateItem} from "../appointmentsettings/GeneralInfoDateItem";
import {UserTimeVote} from "./UserTimeVote";
import {UserRestaurantVote} from "./UserRestaurantVote";
import {TimeItem} from "../appointmentsettings/TimeItem";
import {RestaurantCard} from "../restaurants/RestaurantCard";


export interface TastyDateItem {
    tastyDateId: string,

    infoTastyDate: GeneralInfoDateItem,
    infoTastyDateTimes: TimeItem[],
    infoRestaurantData: RestaurantCard[],
    timeVotes: UserTimeVote[],
    restaurantVotes: UserRestaurantVote[],
    votingResultsForOneDate: number[]
    positiveVotingResultsForOneRestaurant: number[]
    negativeVotingResultsForOneRestaurant: number[]
}