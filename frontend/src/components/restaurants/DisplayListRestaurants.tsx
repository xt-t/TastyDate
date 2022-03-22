import "./Restaurants.scss"
import {useContext, useEffect, useState} from "react";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";
import RestaurantCardItem from "./RestaurantCardItem";
import AddEditRestaurantCard from "./AddEditRestaurantCard";
import UseNewRestaurantCard from "./UseNewRestaurantCard";
import {Box, Button, Fab, FormControl, InputLabel, Select} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
    getAllRestaurantCards, getRestaurantCardById, getUsersRestaurantList,
    removeRestaurantCard, removeRestaurantList,
    transferRestaurantCardToDB, updateRestaurantCard
} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";
import MenuItem from "@mui/material/MenuItem";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default function DisplayListRestaurants() {

    const {token} = useContext(AuthContext);
    const [restaurantCards, setRestaurantCards] = useState<RestaurantCard[]>([]);
    const [restaurantList, setRestaurantList] = useState<string>("All");
        const {newRestaurantCard, resetRestaurantCardInput} = UseNewRestaurantCard();
    //Dialog
    const [openDialogWindow, setOpenDialogWindow] = useState(false);
    const [addFavouriteText, setAddFavouriteText] = useState(true);

    useEffect(() => {
        getEveryRestaurantCard(restaurantList)
        //eslint-disable-next-line
    }, []);

    const addRestaurantCard = () => {
        if ((newRestaurantCard.category !== "") &&
            (newRestaurantCard.postcode !== 0) &&
            (newRestaurantCard.city !== "") &&
            (newRestaurantCard.restaurantName !== "") &&
            (newRestaurantCard.rating !== 0) &&
            (newRestaurantCard.price !== 0)
        ) {
            const newRestaurantData = {
                category: newRestaurantCard.category,
                postcode: newRestaurantCard.postcode,
                city: newRestaurantCard.city,
                restaurantName: newRestaurantCard.restaurantName,
                rating: newRestaurantCard.rating,
                price: newRestaurantCard.price
            }
            transferRestaurantCardToDB(newRestaurantData, token)
                .then((response) => {
                    setRestaurantCards([...restaurantCards, response.data]);
                })
            resetRestaurantCardInput();
        }
    }

    const editRestaurantCard = (restaurantId: string) => {
        getRestaurantCardById(restaurantId, token)
            .then((response) => {
                newRestaurantCard.setId(response.data.id)
                newRestaurantCard.setRestaurantName(response.data.restaurantName)
                newRestaurantCard.setCategory(response.data.category)
                newRestaurantCard.setRating(response.data.rating)
                newRestaurantCard.setPrice(response.data.price)
                newRestaurantCard.setPostcode(response.data.postcode)
                newRestaurantCard.setCity(response.data.city)
                handleOpenWindowToEditARestaurant()
            })
    }

    const saveRestaurantCard = () => {
        if ((newRestaurantCard.category !== "") &&
            (newRestaurantCard.postcode !== 0) &&
            (newRestaurantCard.city !== "") &&
            (newRestaurantCard.restaurantName !== "") &&
            (newRestaurantCard.rating !== 0) &&
            (newRestaurantCard.price !== 0)
        ) {
            const newRestaurantData = {
                id: newRestaurantCard.id,
                cardCreator: newRestaurantCard.cardCreator,
                category: newRestaurantCard.category,
                postcode: newRestaurantCard.postcode,
                city: newRestaurantCard.city,
                restaurantName: newRestaurantCard.restaurantName,
                rating: newRestaurantCard.rating,
                price: newRestaurantCard.price
            }
            updateRestaurantCard(newRestaurantData, token)
                .then(() => {
                    getEveryRestaurantCard(restaurantList)
                })
            resetRestaurantCardInput();
            handleCloseDialogWindow();
        }
    }

    const deleteRestaurantCard = (restaurantId: string) => {
        removeRestaurantCard(restaurantId, token)
            .then(() => (
                    getEveryRestaurantCard(restaurantList)
                )
            )
    }

    const deleteRestaurantList = () => {
        removeRestaurantList(token).then(() => (
            getEveryRestaurantCard(restaurantList)
        ))
    }

    const getEveryRestaurantCard = (displayRestaurantList:string) => {
        if (displayRestaurantList === "All") {
        getAllRestaurantCards(token)
            .then(response => setRestaurantCards(response.data))
        }
        else if (displayRestaurantList === "MyOwn") {
            getUsersRestaurantList(token)
                .then(response => setRestaurantCards(response.data))
        }
    }

    //Dialog

    const handleOpenWindowToAddANewRestaurant = () => {
        resetRestaurantCardInput()
        setOpenDialogWindow(true);
        setAddFavouriteText(true);
    };

    const handleOpenWindowToEditARestaurant = () => {
        setOpenDialogWindow(true);
        setAddFavouriteText(false);
    };
    const handleCloseDialogWindow = () => {
        setOpenDialogWindow(false);
    };

    return (
        <div className="cardListBox">

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>Restaurantlist</InputLabel>
                    <Select
                        value={restaurantList}
                        label="RestaurantList"
                        onChange={event => setRestaurantList(event.target.value)}
                    >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={"MyOwn"}>MyOwn</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="text" onClick={()=>getEveryRestaurantCard(restaurantList)}>Switch Restaurantlist</Button>
            </Box>

            <section className="cardList">
                {restaurantCards.map((restaurantCard, index) => (
                    <React.Fragment>
                        <RestaurantCardItem index={index} restaurantCard={restaurantCard}
                                            deleteRestaurantCard={deleteRestaurantCard}
                                            editRestaurantCard={editRestaurantCard}/>
                    </React.Fragment>))}
            </section>
            <div className="cardActionButtons">
                <Fab aria-label="edit" style={{margin: "10px"}} onClick={() => deleteRestaurantList()}>
                    <DeleteIcon/>
                </Fab>

                <Box className="addRestaurantCardButton" sx={{'& > :not(style)': {m: 1}}}>
                    <Fab color="primary" aria-label="add" onClick={handleOpenWindowToAddANewRestaurant}>
                        <AddIcon/>
                    </Fab>
                </Box>
            </div>
            <AddEditRestaurantCard addRestaurantCard={addRestaurantCard} addFavouriteText={addFavouriteText}
                                   newRestaurantCard={newRestaurantCard} saveRestaurantCard={saveRestaurantCard}
                                   resetRestaurantCardInput={resetRestaurantCardInput} open={openDialogWindow}
                                   handleClose={handleCloseDialogWindow}/>
        </div>
    )
}