
import React from "react";
import {Box, Rating, styled} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import {RestaurantCard} from "../../../models/restaurants/RestaurantCard";
import "./FavouriteRestaurants.scss"

interface AppointThreeAddFavouriteRestaurantCardProps {
    restaurantCard: RestaurantCard
}

export default function AppointThreeAddFavouriteRestaurantCard({restaurantCard}:AppointThreeAddFavouriteRestaurantCardProps) {

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: 'hsl(222, 100%, 50%)',
        },
        '& .MuiRating-iconHover': {
            color: 'hsl(222, 100%, 41%)',
        },
    });

    return (
        <React.Fragment>
            <article className="fcard">
                <header className="fcard-header">
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
                <div className="fauthor-name">
                    <div className="fauthor-name-prefix">Recommended by:</div>
                    {restaurantCard.cardCreator}
                </div>
            </article>
        </React.Fragment>
    )
}