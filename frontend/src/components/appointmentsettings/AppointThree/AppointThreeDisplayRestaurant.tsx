import * as React from "react";
import {Button, Card, CardContent} from "@mui/material";
import {RestaurantItem} from "../../../models/appointmentsettings/RestaurantItem";
import DeleteIcon from "@mui/icons-material/Delete";

interface AppointThreeDisplayRestaurantProps {
    restaurantData: RestaurantItem[]
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
                    {restaurantData.map((restaurant, index) => (
                        <span key={index}>
                        {index + 1}
                            <span>: </span>
                            {restaurant.pickedCategory}
                            <span> </span>
                            {restaurant.pickedPostcode}
                            <span> </span>
                            {restaurant.pickedCity}
                            <span> </span>
                            {restaurant.pickedRestaurantName}
                            <span> </span>
                            {restaurant.pickedRating}
                            <span> - </span>
                            {restaurant.pickedPrice}

                            <Button variant="text">
        <DeleteIcon onClick={() => deleteRestaurantCard(restaurant.id)}/></Button>
                            </span>))}


                    {restaurantData.length !== 0 ? (
                        <Button variant="text" onClick={() => deleteAllRestaurantCards()}>
                            <DeleteIcon color="error"/>Delete All</Button>) : (<></>)}
                </CardContent>
            </Card>
        </div>
    )
}