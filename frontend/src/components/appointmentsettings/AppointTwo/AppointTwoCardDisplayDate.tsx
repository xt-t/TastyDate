import {Button, Card, CardContent, DialogActions, DialogContent} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {TimeItem} from "../../../models/appointmentsettings/TimeItem";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {BootstrapDialog, BootstrapDialogTitle} from "../AppointThree/Subcomponents/DialogTitle";

interface AppointTwoCardDisplayDateProps {
    dataDateTimes: TimeItem[]
    deletePickedDate: Function
    deleteAllPickedDates: Function
}

export default function AppointTwoCardDisplayDate
({dataDateTimes, deletePickedDate, deleteAllPickedDates}: AppointTwoCardDisplayDateProps) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="bookmarkedDatesTimes">
                <div className="previewButtonTimes">
                    <Button variant="contained" onClick={handleClickOpen}>
                        <SearchIcon/> Preview</Button>
                </div>
            </div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Selected dates and times
                </BootstrapDialogTitle>

                <DialogContent dividers>

                    <div className="displayChosenDates">
                        {dataDateTimes.map((dateTime, index) => (
                            <span key={index}>
                        {index + 1}
                                <span>. Date </span>
                        <span>: </span>
                                {dateTime.pickedDate}
                                <span> </span>
                                {dateTime.pickedStart}
                                <span> - </span>
                                {dateTime.pickedEnd}
                                <span> </span>

                    <Button variant="text">
        <DeleteIcon onClick={() => deletePickedDate(dateTime.id)}/></Button>
                            </span>))}
                    </div>
                </DialogContent>
                <DialogActions>

                    {dataDateTimes.length !== 0 ? (
                        <Button variant="text" onClick={() => deleteAllPickedDates()}>
                            <DeleteIcon color="error"/>Delete All</Button>) : (<></>)}
                </DialogActions>
            </BootstrapDialog>
        </div>

    )
}