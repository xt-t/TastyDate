import * as React from "react";
import AppointThreeAddRestaurant from "./AppointThreeAddRestaurant";
import AppointThreeDisplayRestaurant from "./AppointThreeDisplayRestaurant";
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthProvider";

interface AppointThreeProps {
    appointThree: AppointThreeType
}

export default function AppointThree(
    {appointThree
    }: AppointThreeProps) {

    const {jwtDecoded}=useContext(AuthContext)

    const saveRestaurantDataFromManualInput = () => {
        if ((appointThree.category !== "") &&
            (appointThree.postcode !== 0) &&
            (appointThree.city !== "") &&
            (appointThree.restaurantName !== "") &&
            (appointThree.rating !== 0) &&
            (appointThree.price !== 0)
        ) {
            const newRestaurantData = {
                id: appointThree.idPickedRestaurant,
                creatorName: jwtDecoded?.sub,
                pickedCategory: appointThree.category,
                pickedPostcode: appointThree.postcode,
                pickedCity: appointThree.city,
                pickedRestaurantName: appointThree.restaurantName,
                pickedRating: appointThree.rating,
                pickedPrice: appointThree.price
            }
            appointThree.setRestaurantData([...appointThree.restaurantData, newRestaurantData]);
            appointThree.setIdPickedRestaurant(appointThree.idPickedRestaurant + 1);
            resetDataInput();
        }
    }

    const resetDataInput = () => {
        appointThree.setCategory("");
        appointThree.setRating(0);
        appointThree.setPrice(0);
        appointThree.setRestaurantName("");
        appointThree.setPostcode(0);
        appointThree.setCity("");
    }

    const deleteRestaurantCard = (id: number) => {
        appointThree.setRestaurantData(appointThree.restaurantData.filter(keepRestaurantCard => keepRestaurantCard.id !== id));
    }

    const deleteAllRestaurantCards = () => {
        appointThree.setRestaurantData([]);
    }
    return (
        <div className="cardThree">
            <AppointThreeAddRestaurant
                appointThree={appointThree}
                saveRestaurantDataFromManualInput={saveRestaurantDataFromManualInput}
                resetDataInput={resetDataInput}
            />

            {appointThree.restaurantData.length !== 0 ? (
            <AppointThreeDisplayRestaurant
                restaurantData={appointThree.restaurantData}
                deleteRestaurantCard={deleteRestaurantCard}
                deleteAllRestaurantCards={deleteAllRestaurantCards}
            />)
                :
                (<></>)}
        </div>
    )
}