import AppointThreeAddRestaurantManually from "./AppointThreeAddRestaurantManually";
import {Box, Button, Card, CardContent} from "@mui/material";
import "../Appoint.scss"
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppointThreeAddFavouriteRestaurants from "./AppointThreeAddFavouriteRestaurants";

interface AppointThreeAddRestaurantProps {
    appointThree: AppointThreeType
    saveRestaurantData: Function
    resetDataInput: Function
}

export default function AppointThreeAddRestaurant(
    {
        appointThree,
        saveRestaurantData,
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
                        <AppointThreeAddFavouriteRestaurants appointThree={appointThree} resetDataInput={resetDataInput} saveRestaurantData={saveRestaurantData}/>

                        <AppointThreeAddRestaurantManually appointThree={appointThree} resetDataInput={resetDataInput} saveRestaurantData={saveRestaurantData}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}