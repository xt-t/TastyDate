import "./Restaurants.scss"
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";
import {Box, Rating} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import image0 from "./burger.jpg"
import image1 from "./japaneseRestaurant.jpg"
import image2 from "./pizza.jpg"
import { StyledRating } from "../../models/restaurants/StylingRating";

interface RestaurantCardItemProps {
    restaurantCard: RestaurantCard
    deleteRestaurantCard: Function,
    editRestaurantCard: Function,
    index: number
}

export default function RestaurantCardItem({index, restaurantCard, deleteRestaurantCard, editRestaurantCard}:RestaurantCardItemProps) {
    if(index>2) {
        index=2;
    }

    let selectedImage;
    if (index === 0) {
        selectedImage = image0
    }
    if (index === 1) {
        selectedImage = image1
    }
    if (index === 2) {
        selectedImage = image2
    }

    return (
        <React.Fragment>
        <article className="card">
            <header className="card-header">
                <p>{restaurantCard.category}</p>
                <h2>{restaurantCard.restaurantName}</h2>
            </header>
            <Box className="imgBx">
                <img src={selectedImage} alt="A pic would be nicer" className="picture"/>
            </Box>
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
                <div className="author-name">
                    <div className="author-name-prefix">Recommended by:</div>
                    {restaurantCard.cardCreator}
                </div>
            <div className="cardIcons">
            <DeleteIcon className="deleteIcon" onClick={()=>deleteRestaurantCard(restaurantCard.id)}/>
            <EditIcon className="editIcon" onClick={()=>editRestaurantCard(restaurantCard.id)}/>
            </div>
        </article>
        </React.Fragment>
)
}