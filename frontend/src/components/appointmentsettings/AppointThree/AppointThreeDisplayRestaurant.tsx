import * as React from "react";
import {Button, Card, CardContent} from "@mui/material";
import {dataPickedRestaurant} from "../../../models/appointmentsettings/dataPickedRestaurant";
import DeleteIcon from "@mui/icons-material/Delete";

interface AppointThreeDisplayRestaurantProps {
    restaurantData: dataPickedRestaurant[]
    deleteRestaurantCard: Function
    deleteAllRestaurantCards: Function
}

export default function AppointThreeDisplayRestaurant(
    {
        restaurantData,
        deleteRestaurantCard,
        deleteAllRestaurantCards
    }: AppointThreeDisplayRestaurantProps) {
    return (
        <div>
            <Card>
                <CardContent className="displayPickedRestaurants">
                    {restaurantData.map((restaurantData, index) => (
                        <span key={index}>
                        {index + 1}
                            <span>: </span>
                            {restaurantData.pickedCategory}
                            <span> </span>
                            {restaurantData.pickedPostcode}
                            <span> </span>
                            {restaurantData.pickedCity}
                            <span> </span>
                            {restaurantData.pickedRestaurantName}
                            <span> </span>
                            {restaurantData.pickedRating}
                            <span> - </span>
                            {restaurantData.pickedPrice}

                            <Button variant="text">
        <DeleteIcon onClick={() => deleteRestaurantCard(restaurantData.id)}/></Button>
                            </span>))}


                    {restaurantData.length !== 0 ? (
                        <Button variant="text" onClick={() => deleteAllRestaurantCards()}>
                            <DeleteIcon color="error"/>Delete All</Button>) : (<></>)}
                </CardContent>
            </Card>
        </div>
    )
}