
import React from "react";
import {Box, Rating} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import {RestaurantCard} from "../../../models/restaurants/RestaurantCard";
import "./FavouriteRestaurants.scss"
import Checkbox from "@mui/material/Checkbox";
import { StyledRating } from "../../../models/restaurants/StylingRating";

interface AppointThreeAddFavouriteRestaurantCardProps {
    restaurantCard: RestaurantCard
    handleCheck: Function
    checkRestaurants: boolean[]
    cardsNumber: number
}

export default function AppointThreeAddFavouriteRestaurantCard({restaurantCard, checkRestaurants, cardsNumber, handleCheck}:AppointThreeAddFavouriteRestaurantCardProps) {

    return (
        <React.Fragment>
            <article className="favcard">
                <header className="favcard-header">
                    <p>{restaurantCard.category}</p>
                    <h2>{restaurantCard.restaurantName}</h2>
                </header>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Rating name="read-only" value={restaurantCard.rating} readOnly />
                </Box>
                <Box
                    sx={{
                        '& > legend': {mt: 2},
                    }}
                >
                    <StyledRating
                        name="read-only"
                        readOnly
                        value={restaurantCard.price}
                        precision={0.5}
                        max={3}
                        icon={<EuroIcon fontSize="inherit"/>}
                        emptyIcon={<EuroIcon fontSize="inherit"/>}
                    />
                </Box>
                <p>
                    {restaurantCard.postcode} {restaurantCard.city}
                </p>
                <div className="favauthor-name">
                    <div className="favauthor-name-prefix">From:</div>
                    {restaurantCard.cardCreator}
                </div>
                <div className="checkBoxFavouriteRestaurant">
                    <Checkbox
                        checked={checkRestaurants[cardsNumber]}
                        onChange={() => handleCheck(restaurantCard, cardsNumber)}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                </div>
            </article>
        </React.Fragment>
    )
}