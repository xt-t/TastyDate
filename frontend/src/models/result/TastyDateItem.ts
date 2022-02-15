import {GeneralInfoDateItem} from "../appointmentsettings/GeneralInfoDateItem";
import {UserTimeVote} from "./UserTimeVote";
import {UserRestaurantVote} from "./UserRestaurantVote";
import {RestaurantItem} from "../appointmentsettings/RestaurantItem";
import {TimeItem} from "../appointmentsettings/TimeItem";


export interface TastyDateItem {
    tastyDateId: string,

    infoTastyDate: GeneralInfoDateItem,
    infoTastyDateTimes: TimeItem[],
    infoRestaurantData: RestaurantItem[],
    timeVotes: UserTimeVote[],
    restaurantVotes: UserRestaurantVote[],
    votingResultsForOneDate: number[]
    positiveVotingResultsForOneRestaurant: number[]
    negativeVotingResultsForOneRestaurant: number[]
}