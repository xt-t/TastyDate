import {dataPickedTime} from "../../models/appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../../models/appointmentsettings/DataPickedRestaurant";

export interface AppointOneProps {
    tastyDateName: string
    setTastyDateName: Function
    location: string
    setLocation: Function
    notes: string
    setNotes: Function
    chosenDisplayName: string
    setChosenDisplayName: Function
}
export interface AppointTwoProps {
    date: Date | null,
    setDate: Function,
    startTime: Date | null,
    setStartTime: Function,
    endTime: Date | null,
    setEndTime: Function,
    idPickedTime: number
    setIdPickedTime: Function
    dataDateTimes: dataPickedTime[]
    setDataDateTimes: Function
}

export interface AppointThreeProps {
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
    restaurantData: dataPickedRestaurant[]
    setRestaurantData: Function
}