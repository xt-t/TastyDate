import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddIcon from "@mui/icons-material/Add";
import {BootstrapDialog, BootstrapDialogTitle} from "../appointmentsettings/AppointThree/Subcomponents/DialogTitle";
import CategoryMenu from "../appointmentsettings/AppointThree/Subcomponents/CategoryMenu";
import RestaurantRating from "../appointmentsettings/AppointThree/Subcomponents/RestaurantRating";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {NewRestaurantCardType} from "../../models/restaurants/NewRestaurantCardType";

interface AddRestaurantCardProps {
    newRestaurantCard: NewRestaurantCardType
    saveRestaurantCard: Function
    resetRestaurantCardInput: Function
    open: boolean
    handleClose: Function
    addFavouriteText: boolean
    addRestaurantCard: Function
}

export default function AddEditRestaurantCard(
    {
        newRestaurantCard, saveRestaurantCard, resetRestaurantCardInput,
        open,
        handleClose, addFavouriteText, addRestaurantCard
    }: AddRestaurantCardProps) {


    return (
        <div>

            <BootstrapDialog
                onClose={() => handleClose()}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={() => handleClose()}>
                    {addFavouriteText ?
                        (<span>Add a new favourite restaurant</span>
                        ) : (
                            <span>Edit your favourite restaurant</span>)}
                </BootstrapDialogTitle>

                <DialogContent dividers>

                    <TextField
                        required
                        id="standard-required"
                        label="Restaurant name"
                        variant="standard"
                        className="addElements"
                        value={newRestaurantCard.restaurantName}
                        sx={{margin: "10px"}}
                        onChange={(event) => {
                            newRestaurantCard.setRestaurantName(event.target.value);
                        }}
                    />

                    <CategoryMenu category={newRestaurantCard.category} setCategory={newRestaurantCard.setCategory}/>

                    <RestaurantRating rating={newRestaurantCard.rating} setRating={newRestaurantCard.setRating}
                                      price={newRestaurantCard.price} setPrice={newRestaurantCard.setPrice}/>

                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Postcode"
                            variant="standard"
                            className="addElements"
                            value={newRestaurantCard.postcode}
                            onChange={(event) => {
                                newRestaurantCard.setPostcode(event.target.value);
                            }
                            }
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="City"
                            variant="standard"
                            className="addElements"
                            value={newRestaurantCard.city}
                            onChange={(event) => {
                                newRestaurantCard.setCity(event.target.value);
                            }
                            }
                        />
                    </div>

                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" onClick={() => resetRestaurantCardInput()}> <RestartAltIcon/> Reset
                    </Button>
                    {addFavouriteText ?
                        (
                            <Button variant="contained" autoFocus onClick={() =>
                                addRestaurantCard()}> <AddIcon/> Add </Button>)
                        :
                        (
                            <Button variant="contained" autoFocus onClick={() =>
                                saveRestaurantCard()}> <AddIcon/> Save </Button>
                        )}


                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}