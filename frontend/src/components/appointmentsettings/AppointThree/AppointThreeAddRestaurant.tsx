import AppointThreeAddRestaurantManually from "./AppointThreeAddRestaurantManually";
import {Box, Button, Card, CardContent} from "@mui/material";
import "../Appoint.scss"
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import FavoriteIcon from '@mui/icons-material/Favorite';

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
                        <div className="favouritesRowButton"><span>Add restaurants from your </span><Button variant="contained" className="favouriteButton"><FavoriteIcon> </FavoriteIcon> Favourites </Button></div>
                        <AppointThreeAddRestaurantManually appointThree={appointThree} resetDataInput={resetDataInput} saveRestaurantData={saveRestaurantData}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}