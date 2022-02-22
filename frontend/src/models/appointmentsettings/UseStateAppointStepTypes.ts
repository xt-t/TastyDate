
import {TimeItem} from "./TimeItem";
import {RestaurantCard} from "../restaurants/RestaurantCard";

export interface AppointOneType {
        tastyDateName: string
        setTastyDateName: Function
        location: string
        setLocation: Function
        notes: string
        setNotes: Function
        chosenDisplayName: string
        setChosenDisplayName: Function
}

    export interface AppointTwoType {
            date: Date
            setDate: Function
            startTime: Date
            setStartTime: Function
            endTime: Date
            setEndTime: Function
            idPickedTime: number
            setIdPickedTime: Function
            dataDateTimes: TimeItem[]
            setDataDateTimes: Function
    }

    export interface AppointThreeType {
            category: string
            setCategory: Function
            rating: number
            setRating: Function
            price: number
            setPrice: Function
            restaurantName: string
            setRestaurantName: Function
            postcode: number
            setPostcode: Function
            city: string
            setCity: Function
            idPickedRestaurant: number
            setIdPickedRestaurant: Function
            restaurantData: RestaurantCard[]
            setRestaurantData: Function
    }
