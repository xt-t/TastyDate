import {Box, Rating, Typography} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import * as React from "react";
import { StyledRating } from "../../../../models/restaurants/StylingRating";

interface RestaurantRatingProps {
    rating: number
    setRating: Function
    price: number
    setPrice: Function
}

export default function RestaurantRating({rating, setRating, price, setPrice}: RestaurantRatingProps) {

    return (
        <div>
            <Box
                sx={{
                    '& > legend': {mt: 2},
                }}
            >
                <Typography component="legend">Your rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newRating) => {
                        if (typeof newRating === "number") {
                            setRating(newRating);
                        }
                    }}
                />
            </Box>

            <Box
                sx={{
                    '& > legend': {mt: 2},
                }}
            >
                <Typography component="legend">Price category</Typography>
                <StyledRating
                    name="customized-color"
                    value={price}
                    onChange={(event, newPrice) => {
                        if (typeof newPrice === "number") {
                            setPrice(newPrice);
                        }
                    }}
                    precision={0.5}
                    max={3}
                    icon={<EuroIcon fontSize="inherit"/>}
                    emptyIcon={<EuroIcon fontSize="inherit"/>}
                />
            </Box>
        </div>
    )
}