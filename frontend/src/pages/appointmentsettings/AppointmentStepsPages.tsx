import AppointOne from "../../components/appointmentsettings/AppointOne/AppointOne"
import AppointTwo from "../../components/appointmentsettings/AppointTwo/AppointTwo";
import AppointThree from "../../components/appointmentsettings/AppointThree/AppointThree";
import {dataPickedTime} from "../../models/appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../../models/appointmentsettings/DataPickedRestaurant";

export interface Appointmentpagesprops {
    activepage: number
    tastyDateName: string
    setTastyDateName: Function
    location: string
    setLocation: Function
    notes: string
    setNotes: Function
    chosenDisplayName: string
    setChosenDisplayName: Function
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

export default function AppointmentStepsPages(
    {
        activepage,
        tastyDateName, setTastyDateName,
        location, setLocation,
        notes, setNotes,
        chosenDisplayName, setChosenDisplayName,

        date, setDate,
        startTime, setStartTime,
        endTime, setEndTime,
        idPickedTime, setIdPickedTime,
        dataDateTimes,setDataDateTimes,
        category, setCategory,
        postcode,setPostcode,
        city, setCity,

        restaurantName,setRestaurantName,
        rating, setRating,
        price, setPrice,
        idPickedRestaurant, setIdPickedRestaurant,
        restaurantData, setRestaurantData
        }: Appointmentpagesprops) {


    if (activepage === 0) {
        return (
            <AppointOne
                tastyDateName={tastyDateName}
                setTastyDateName={setTastyDateName}
                location={location} setLocation={setLocation}
                notes={notes} setNotes={setNotes}
                chosenDisplayName={chosenDisplayName}
                setChosenDisplayName={setChosenDisplayName}/>
        )
    } else if (activepage === 1) {
        return (
            <AppointTwo
                date={date} setDate={setDate}
                startTime={startTime} setStartTime={setStartTime}
                endTime={endTime} setEndTime={setEndTime}
                idPickedTime={idPickedTime} setIdPickedTime={setIdPickedTime}
                dataDateTimes={dataDateTimes} setDataDateTimes={setDataDateTimes}
            />
        )
    } else {
        return (
            <AppointThree
                category={category} setCategory={setCategory}
                postcode={postcode} setPostcode={setPostcode}
                city={city} setCity={setCity}
                restaurantName={restaurantName} setRestaurantName={setRestaurantName}
                rating={rating} setRating={setRating}
                price={price} setPrice={setPrice}
                idPickedRestaurant={idPickedRestaurant} setIdPickedRestaurant={setIdPickedRestaurant}
                restaurantData={restaurantData} setRestaurantData={setRestaurantData}/>
        )
    }
}