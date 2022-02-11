import {useState} from "react";
import {dataPickedTime} from "../../models/appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../../models/appointmentsettings/DataPickedRestaurant";

export default function UseAppointSteps() {

    //AppointOne
    const [tastyDateName, setTastyDateName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [chosenDisplayName, setChosenDisplayName] = useState("");

    //AppointTwo
    const [date, setDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [idPickedTime, setIdPickedTime] = useState<number>(1);
    const [dataDateTimes, setDataDateTimes] = useState<dataPickedTime[]>([]);

    //AppointThree
    const [category, setCategory] = useState<string>("");
    const [postcode, setPostcode] = useState<number>(1);
    const [city, setCity] = useState<string>("");
    const [restaurantName, setRestaurantName] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [idPickedRestaurant, setIdPickedRestaurant] = useState<number>(1);
    const [restaurantData, setRestaurantData] = useState<dataPickedRestaurant[]>([]);



    return {
        appointOne: {
            tastyDateName,
            setTastyDateName,
            location,
            setLocation,
            notes,
            setNotes,
            chosenDisplayName,
            setChosenDisplayName
        }
        ,
        appointTwo: {
            date,
            setDate,
            startTime,
            setStartTime,
            endTime,
            setEndTime,
            idPickedTime,
            setIdPickedTime,
            dataDateTimes,
            setDataDateTimes
        }
        ,
        appointThree: {
            category, setCategory,
            postcode, setPostcode,
            city, setCity,
            restaurantName, setRestaurantName,
            rating, setRating,
            price, setPrice,
            idPickedRestaurant, setIdPickedRestaurant,
            restaurantData, setRestaurantData
        }
    }
}
