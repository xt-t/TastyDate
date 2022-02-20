import AppointThreeAddRestaurantManually from "./AppointThreeAddRestaurantManually";
import {Box, Card, CardContent} from "@mui/material";
import "../Appoint.scss"
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import AppointThreeAddFavouriteRestaurants from "./AppointThreeAddFavouriteRestaurants";

interface AppointThreeAddRestaurantProps {
    appointThree: AppointThreeType
    saveRestaurantDataFromManualInput: Function
    resetDataInput: Function
}

export default function AppointThreeAddRestaurant(
    {
        appointThree,
        saveRestaurantDataFromManualInput,
        resetDataInput
    }: AppointThreeAddRestaurantProps
) {

    return (
        <Box>
            <Card>
                <CardContent className="formRestaurant">
                    <h3>Add your restaurant</h3>
                    <span>Your options:</span>
                    <Box className="menuIcons">
                        <AppointThreeAddFavouriteRestaurants appointThree={appointThree} resetDataInput={resetDataInput}/>

                        <AppointThreeAddRestaurantManually appointThree={appointThree} resetDataInput={resetDataInput} saveRestaurantDataFromManualInput={saveRestaurantDataFromManualInput}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}