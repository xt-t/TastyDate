import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import {useContext, useEffect, useState} from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {BootstrapDialog, BootstrapDialogTitle} from "./Subcomponents/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {getAllRestaurantCards} from "../../../service/tastydate-api-service";
import {RestaurantCard} from "../../../models/restaurants/RestaurantCard";
import {AuthContext} from "../../../context/AuthProvider";
import * as React from "react";
import AppointThreeAddFavouriteRestaurantCard from "./AppointThreeAddFavouriteRestaurantCard";
import "./FavouriteRestaurants.scss"

interface AppointThreeAddFavouriteRestaurantsProps {
    appointThree: AppointThreeType
    saveRestaurantData: Function
    resetDataInput: Function
}

export default function AppointThreeAddFavouriteRestaurants({
                                                              appointThree,
                                                              saveRestaurantData,
                                                              resetDataInput
                                                          }: AppointThreeAddFavouriteRestaurantsProps) {
    const [open, setOpen] = useState(false);

    const {token}=useContext(AuthContext)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [restaurantCards, setRestaurantCards] = useState<RestaurantCard[]>([]);

    const getEveryRestaurantCard = () => {
        getAllRestaurantCards(token)
            .then(response => setRestaurantCards(response.data))
    }

    useEffect(() => {
        getEveryRestaurantCard()
        //eslint-disable-next-line
    }, []);


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
                                    <AppointThreeAddFavouriteRestaurantCard restaurantCard={restaurantCard}/>
                                </React.Fragment>))}
                        </section>

                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" onClick={() => resetDataInput()}> <RestartAltIcon/> Reset
                    </Button>
                    <Button variant="contained" autoFocus onClick={() =>
                        saveRestaurantData()}> <AddIcon/> Add </Button>
                </DialogActions>
            </BootstrapDialog>

        </div>
    )
}
