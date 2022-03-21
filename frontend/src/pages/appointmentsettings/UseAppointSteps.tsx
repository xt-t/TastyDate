import {useState} from "react";
import {TimeItem} from "../../models/appointmentsettings/TimeItem";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";

export default function UseAppointSteps() {

    //AppointOne
    const [tastyDateName, setTastyDateName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [chosenDisplayName, setChosenDisplayName] = useState("");

    //AppointTwo
    const [date, setDate] = useState<Date>(new Date());
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(new Date());
    const [idPickedTime, setIdPickedTime] = useState<number>(1);
    const [dataDateTimes, setDataDateTimes] = useState<TimeItem[]>([]);

    //AppointThree
    const [category, setCategory] = useState<string>("");
    const [postcode, setPostcode] = useState<number>(0);
    const [city, setCity] = useState<string>("");
    const [restaurantName, setRestaurantName] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [idPickedRestaurant, setIdPickedRestaurant] = useState<number>(1);
    const [restaurantData, setRestaurantData] = useState<RestaurantCard[]>([]);

    const handleDelete = () => {
        setTastyDateName("");
        setLocation("");
        setNotes("");
        setChosenDisplayName("");
        setDate(new Date());
        setStartTime(new Date());
        setEndTime(new Date());
        setIdPickedTime(1);
        setDataDateTimes([]);
        setCategory("");
        setPostcode(0);
        setCity("");
        setRestaurantName("");
        setRating(0);
        setPrice(0);
        setIdPickedRestaurant(1);
        setRestaurantData([]);
    }

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
        ,
        handleDelete
    }
}
