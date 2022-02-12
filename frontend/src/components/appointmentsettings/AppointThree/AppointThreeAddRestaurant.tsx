import AppointThreeAddRestaurantManually from "./AppointThreeAddRestaurantManually";
import {Box, Card, CardContent} from "@mui/material";
import "../Appoint.scss"
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";

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
                        <AppointThreeAddRestaurantManually appointThree={appointThree} resetDataInput={resetDataInput} saveRestaurantData={saveRestaurantData}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )

}