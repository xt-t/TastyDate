import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import { useContext, useEffect, useState} from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {BootstrapDialog, BootstrapDialogTitle} from "./Subcomponents/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {getAllRestaurantCards} from "../../../service/tastydate-api-service";
import {RestaurantCard} from "../../../models/restaurants/RestaurantCard";
import {AuthContext} from "../../../context/AuthProvider";
import * as React from "react";
import AppointThreeAddFavouriteRestaurantCard from "./AppointThreeAddFavouriteRestaurantCard";
import "./FavouriteRestaurants.scss"

interface AppointThreeAddFavouriteRestaurantsProps {
    appointThree: AppointThreeType
    resetDataInput: Function
}

export default function AppointThreeAddFavouriteRestaurants({
                                                              appointThree
                                                          }: AppointThreeAddFavouriteRestaurantsProps) {
    const {token}=useContext(AuthContext)

    const [restaurantCards, setRestaurantCards] = useState<RestaurantCard[]>([]);
    const [checksRestaurants, setChecksRestaurants] = useState<boolean[]>([]);
    const [bookmarksFavouriteRestaurants, setBookmarksFavouriteRestaurants] = useState<RestaurantCard[]>([]);
    const [open, setOpen] = useState(false);


    const getEveryRestaurantCard = () => {
        getAllRestaurantCards(token)
            .then(response => {
                setRestaurantCards(response.data)
                setChecksRestaurants(new Array(response.data.length).fill(false))
            })
    }

    useEffect(() => {
        getEveryRestaurantCard()
        //eslint-disable-next-line
    }, []);





    const handleCheck = (restaurantCard: RestaurantCard, cardsNumber: number) => {
        transformChecks(restaurantCard, cardsNumber)
        bookmarkNewFavouriteRestaurants(restaurantCard, cardsNumber)

    }

    const transformChecks = (restaurantCard: RestaurantCard, cardsNumber: number) => {
        const newChecked = [...checksRestaurants];
        newChecked[cardsNumber] = !newChecked[cardsNumber];
        setChecksRestaurants(newChecked)
    }

    const bookmarkNewFavouriteRestaurants = (restaurantCard: RestaurantCard, cardsNumber: number) =>
    {
        console.log("booleanchecksRestaurant:", checksRestaurants[cardsNumber])
        if (!checksRestaurants[cardsNumber]) {
            const newBookmarkedRestaurants = [...bookmarksFavouriteRestaurants, restaurantCard];
            setBookmarksFavouriteRestaurants(newBookmarkedRestaurants);
        } else {
            const newBookmarkedRestaurants = bookmarksFavouriteRestaurants.filter(checkFavouriteRestaurant => checkFavouriteRestaurant !== restaurantCard)
            setBookmarksFavouriteRestaurants(newBookmarkedRestaurants);
        }
    }

    const transferSelectedRestaurantsToTastyDateItem = () => {
        appointThree.setRestaurantData([...appointThree.restaurantData ,...bookmarksFavouriteRestaurants])
        handleClose();
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setBookmarksFavouriteRestaurants( []);
    };

    return (
        <div >
            <div className="favouritesRowButton"><span>Add restaurants from your </span>
                <Button variant="contained" onClick={handleClickOpen} className="favouriteButton"><FavoriteIcon> </FavoriteIcon> Favourites </Button>
            </div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add restaurants from your favourites
                </BootstrapDialogTitle>

                <DialogContent dividers className="newWindow">

                        <section className="fcard-list">
                            {restaurantCards.map((restaurantCard, index) => (
                                <React.Fragment key={index}>
                                    <AppointThreeAddFavouriteRestaurantCard restaurantCard={restaurantCard} checkRestaurants={checksRestaurants} cardsNumber={index} handleCheck={handleCheck} />
                                </React.Fragment>))}
                        </section>

                </DialogContent>

                <DialogActions>
                    <Button variant="contained" autoFocus onClick={() =>
                        transferSelectedRestaurantsToTastyDateItem()}> <AddIcon/> Confirm </Button>
                </DialogActions>
            </BootstrapDialog>

        </div>
    )
}
