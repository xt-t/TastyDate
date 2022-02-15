import "./Restaurants.scss"
import {useState} from "react";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";
import RestaurantCardItem from "./RestaurantCardItem";
import AddEditRestaurantCard from "./AddEditRestaurantCard";
import UseNewRestaurantCard from "./UseNewRestaurantCard";
import {Box, Fab} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";


export default function DisplayListRestaurants() {
const [restaurantCards, setRestaurantCards] = useState<RestaurantCard[]>([
    {id: 1,
    restaurantName: "test",
    category: "Deutsch",
    rating: 2,
    price: 1,
    postcode: 12343,
    city: "Köln"}]);

    const {newRestaurantCard, resetRestaurantCardInput} = UseNewRestaurantCard();

    const addRestaurantCard = () => {
        if ((newRestaurantCard.category !== "") &&
            (newRestaurantCard.postcode !== 0) &&
            (newRestaurantCard.city !== "") &&
            (newRestaurantCard.restaurantName !== "") &&
            (newRestaurantCard.rating !== 0) &&
            (newRestaurantCard.price !== 0)
        ) {
            const newRestaurantData = {
                id: 0,
                category: newRestaurantCard.category,
                postcode: newRestaurantCard.postcode,
                city: newRestaurantCard.city,
                restaurantName: newRestaurantCard.restaurantName,
                rating: newRestaurantCard.rating,
                price: newRestaurantCard.price
            }
            setRestaurantCards([...restaurantCards, newRestaurantData]);
            resetRestaurantCardInput();
        }
    }

    const editRestaurantCard = (restaurantId: number) => {

        }

    const deleteRestaurantCard = (restaurantId: number) => {

    }


    const removeRestaurantList = () => {
        setRestaurantCards([]);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="cardListBox">


            <section className="card-list">
                {restaurantCards.map((restaurantCard, index) => (
                    <RestaurantCardItem key={index} restaurantCard={restaurantCard} deleteRestaurantCard={deleteRestaurantCard} editRestaurantCard={editRestaurantCard}/>
                ))}
            </section>
            <div className="cardActionButtons">
            <Fab aria-label="edit" style={{margin: "10px"}} onClick={()=>removeRestaurantList()}>
                <DeleteIcon/>
            </Fab>

                <Box className="addRestaurantCardButton" sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon onClick={handleClickOpen}/>
                    </Fab>
                </Box>
            </div>
            <AddEditRestaurantCard newRestaurantCard={newRestaurantCard} addRestaurantCard={addRestaurantCard} resetRestaurantCardInput={resetRestaurantCardInput} open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose} />
        </div>
    )
}