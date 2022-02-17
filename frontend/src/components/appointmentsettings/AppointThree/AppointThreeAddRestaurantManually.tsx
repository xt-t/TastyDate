import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CategoryMenu from "./Subcomponents/CategoryMenu";
import TextField from "@mui/material/TextField";
import RestaurantRating from "./Subcomponents/RestaurantRating";
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import {BootstrapDialog, BootstrapDialogTitle} from './Subcomponents/DialogTitle';
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import "../Appoint.scss"
import {useState} from "react";

interface AppointThreeSearchRestaurantProps {
    appointThree: AppointThreeType
    saveRestaurantData: Function
    resetDataInput: Function
}

export default function AppointThreeAddRestaurantManually({
                                                         appointThree,
                                                         saveRestaurantData,
                                                         resetDataInput
                                                     }: AppointThreeSearchRestaurantProps) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            Add restaurants  <Button variant="contained" onClick={handleClickOpen}> <AddIcon/> manually</Button>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add your restaurant manually
                </BootstrapDialogTitle>

                <DialogContent dividers>

                    <TextField
                        required
                        id="standard-required"
                        label="Restaurant name"
                        variant="standard"
                        className="addElements"
                        value={appointThree.restaurantName}
                        sx={{margin: "10px"}}
                        onChange={(event) => {
                            appointThree.setRestaurantName(event.target.value);
                        }}
                    />

                    <CategoryMenu category={appointThree.category} setCategory={appointThree.setCategory}/>

                    <RestaurantRating rating={appointThree.rating} setRating={appointThree.setRating} price={appointThree.price} setPrice={appointThree.setPrice}/>

                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Postcode"
                            variant="standard"
                            className="addElements"
                            value={appointThree.postcode}
                            onChange={(event) => {
                                appointThree.setPostcode(parseInt(event.target.value));
                            }
                            }
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="City"
                            variant="standard"
                            className="addElements"
                            value={appointThree.city}
                            onChange={(event) => {
                                appointThree.setCity(event.target.value);
                            }
                            }
                        />
                    </div>

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