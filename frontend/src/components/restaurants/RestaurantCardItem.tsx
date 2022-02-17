import "./Restaurants.scss"
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";
import {Box, Rating, styled} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

interface RestaurantCardItemProps {
    restaurantCard: RestaurantCard
    deleteRestaurantCard: Function,
    editRestaurantCard: Function,
}

export default function RestaurantCardItem({restaurantCard, deleteRestaurantCard, editRestaurantCard}:RestaurantCardItemProps) {

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
        <article className="card">
            <header className="card-header">
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
            {/*<div className="card-author">*/}
            {/*    <AccountCircleIcon className="author-avatar"></AccountCircleIcon>*/}
            {/*    <div className="author-name">*/}
            {/*        <div className="author-name-prefix">Profile</div>*/}
            {/*        User*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="cardIcons">
            <DeleteIcon onClick={()=>deleteRestaurantCard(restaurantCard.id)}/>
            <EditIcon onClick={()=>editRestaurantCard(restaurantCard.id)}/>
            </div>
        </article>
        </React.Fragment>
)
}