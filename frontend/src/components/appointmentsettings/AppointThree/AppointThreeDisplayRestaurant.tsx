import * as React from "react";
import {Button, DialogActions, DialogContent} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {RestaurantCard} from "../../../models/restaurants/RestaurantCard";
import {useState} from "react";
import {BootstrapDialog, BootstrapDialogTitle} from "./Subcomponents/DialogTitle";
import SearchIcon from '@mui/icons-material/Search';
import "../Appoint.scss"

interface AppointThreeDisplayRestaurantProps {
    restaurantData: RestaurantCard[]
    deleteRestaurantCard: Function
    deleteAllRestaurantCards: Function
}

export default function AppointThreeDisplayRestaurant(
    {
        restaurantData,
        deleteRestaurantCard,
        deleteAllRestaurantCards
    }: AppointThreeDisplayRestaurantProps) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div>
                <div className="taggedRestaurantsRow">
                    Your tagged restaurants
                    <Button className="previewButtonRestaurants" variant="contained" onClick={handleClickOpen}> <SearchIcon/> Preview</Button>
                </div>
            </div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Bookmarked restaurants
                </BootstrapDialogTitle>

                <DialogContent dividers>
                    <div className="displayPickedRestaurants">

                        {restaurantData.map((restaurant, index) => (
                            <p key={index}>
                        {index + 1}
                                <span>: </span>
                                {restaurant.restaurantName}
                                <span> </span>
                                {restaurant.category}
                                <span> </span>
                                {restaurant.city}
                                <span> </span>

                            <Button variant="text">
        <DeleteIcon onClick={() => deleteRestaurantCard(restaurant.id)}/></Button>
                            </p>))}
                    </div>
                </DialogContent>
                <DialogActions>

                    {restaurantData.length !== 0 ? (
                        <Button variant="text" onClick={() => deleteAllRestaurantCards()}>
                            <DeleteIcon color="error"/>Delete All</Button>) : (<></>)}

                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}