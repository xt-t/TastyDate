import "./Restaurants.scss"
import {useContext, useState} from "react";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";
import RestaurantCardItem from "./RestaurantCardItem";
import AddEditRestaurantCard from "./AddEditRestaurantCard";
import UseNewRestaurantCard from "./UseNewRestaurantCard";
import {Box, Fab} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
    getAllRestaurantCards, getRestaurantCardById,
    removeRestaurantCard, removeRestaurantList,
    transferRestaurantCardToDB, updateRestaurantCard
} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";


export default function DisplayListRestaurants() {

    const {token} = useContext(AuthContext);

const [restaurantCards, setRestaurantCards] = useState<RestaurantCard[]>([]);

    const {newRestaurantCard, resetRestaurantCardInput} = UseNewRestaurantCard();

    React.useEffect(() => {
        getEveryRestaurantCard()
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
                .then((response)=> {
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
                handleEditOpen()
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
                 .then((response)=> {
                     getEveryRestaurantCard()
                 })
            resetRestaurantCardInput();
            handleClose();
        }
    }

    const deleteRestaurantCard = (restaurantId: string) => {
        removeRestaurantCard(restaurantId, token)
            .then((response)=>(
                getEveryRestaurantCard()
            )
        )
    }

    const deleteRestaurantList = () => {
        removeRestaurantList(token).then((response)=>(
            getEveryRestaurantCard()
        ))
    }

    const getEveryRestaurantCard = () => {
        getAllRestaurantCards(token)
            .then(response => setRestaurantCards(response.data))
    }

    //Dialog
    const [open, setOpen] = useState(false);
    const [addFavouriteText, setAddFavouriteText] = useState(true);

    const handleAddOpen = () => {
        resetRestaurantCardInput()
        setOpen(true);
        setAddFavouriteText(true);
    };

    const handleEditOpen = () => {
        setOpen(true);
        setAddFavouriteText(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="cardListBox">


            <section className="card-list">
                {restaurantCards.map((restaurantCard, index) => (
                    <React.Fragment key={index}>
                    <RestaurantCardItem restaurantCard={restaurantCard} deleteRestaurantCard={deleteRestaurantCard} editRestaurantCard={editRestaurantCard}/>
                    </React.Fragment>))}
            </section>
            <div className="cardActionButtons">
            <Fab aria-label="edit" style={{margin: "10px"}} onClick={()=>deleteRestaurantList()}>
                <DeleteIcon/>
            </Fab>

                <Box className="addRestaurantCardButton" sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="add" onClick={handleAddOpen}>
                        <AddIcon/>
                    </Fab>
                </Box>
            </div>
            <AddEditRestaurantCard addRestaurantCard={addRestaurantCard} addFavouriteText={addFavouriteText} newRestaurantCard={newRestaurantCard} saveRestaurantCard={saveRestaurantCard} resetRestaurantCardInput={resetRestaurantCardInput} open={open} handleClose={handleClose} />
        </div>
    )
}