import {RestaurantItem} from "./RestaurantItem";
import {TimeItem} from "./TimeItem";

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
            date: Date | null,
            setDate: Function,
            startTime: Date | null,
            setStartTime: Function,
            endTime: Date | null,
            setEndTime: Function,
            idPickedTime: number
            setIdPickedTime: Function
            dataDateTimes: TimeItem[]
            setDataDateTimes: Function
    }

    export interface AppointThreeType {
            category: string,
            setCategory: Function,
            rating: number,
            setRating: Function,
            price: number,
            setPrice: Function,
            restaurantName: string,
            setRestaurantName: Function,
            postcode: number | null,
            setPostcode: Function,
            city: string,
            setCity: Function
            idPickedRestaurant: number
            setIdPickedRestaurant: Function
            restaurantData: RestaurantItem[]
            setRestaurantData: Function
    }
