import AppointThreeAddRestaurantManually from "./AppointThreeAddRestaurantManually";
import {Box, Card, CardContent} from "@mui/material";
import "../Appoint.scss"
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import AppointThreeAddFavouriteRestaurants from "./AppointThreeAddFavouriteRestaurants";
import AppointThreeDisplayRestaurant from "./AppointThreeDisplayRestaurant";
import * as React from "react";

interface AppointThreeAddRestaurantProps {
    appointThree: AppointThreeType
    saveRestaurantDataFromManualInput: Function
    resetDataInput: Function
    deleteRestaurantCard: Function
    deleteAllRestaurantCards: Function
}

export default function AppointThreeAddRestaurant(
    {
        appointThree,
        saveRestaurantDataFromManualInput,
        resetDataInput,
        deleteRestaurantCard,
        deleteAllRestaurantCards
    }: AppointThreeAddRestaurantProps
) {

    return (
        <Card style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
            <CardContent className="formRestaurant">
                <h3>Add your restaurant</h3>
                <span>Your options:</span>
                <Box className="menuIcons">
                    <AppointThreeAddFavouriteRestaurants appointThree={appointThree} resetDataInput={resetDataInput}/>

                    <AppointThreeAddRestaurantManually appointThree={appointThree} resetDataInput={resetDataInput}
                                                       saveRestaurantDataFromManualInput={saveRestaurantDataFromManualInput}/>

                    {appointThree.restaurantData.length !== 0 ? (
                            <AppointThreeDisplayRestaurant
                                restaurantData={appointThree.restaurantData}
                                deleteRestaurantCard={deleteRestaurantCard}
                                deleteAllRestaurantCards={deleteAllRestaurantCards}
                            />)
                        :
                        (<></>)}

                </Box>
            </CardContent>
        </Card>
    )
}