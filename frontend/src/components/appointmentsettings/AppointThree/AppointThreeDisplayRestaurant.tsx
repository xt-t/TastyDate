import * as React from "react";
import {Button, Card, CardContent} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {RestaurantCard} from "../../../models/restaurants/RestaurantCard";

interface AppointThreeDisplayRestaurantProps {
    restaurantData: RestaurantCard[]
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
                            {restaurant.restaurantName}
                            <span> </span>
                            {restaurant.category}
                            <span> </span>
                            {restaurant.city}
                            <span> </span>

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