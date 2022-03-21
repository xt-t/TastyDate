import {Button, DialogActions, DialogContent} from "@mui/material";
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

    const [openDialogWindow, setOpenDialogWindow] = useState(false);

    const handleOpenDialogWindow = () => {
        setOpenDialogWindow(true);
    };

    const handleCloseDialogWindow = () => {
        setOpenDialogWindow(false);
    };

    return (
        <div>
            <div className="bookmarkedDatesTimes">
                <div className="previewButtonTimes">
                    <Button variant="contained" onClick={handleOpenDialogWindow}>
                        <SearchIcon/> Preview</Button>
                </div>
            </div>

            <BootstrapDialog
                onClose={handleCloseDialogWindow}
                aria-labelledby="customized-dialog-title"
                open={openDialogWindow}
            >

                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDialogWindow}>
                    Selected dates and times
                </BootstrapDialogTitle>

                <DialogContent dividers>

                    <div className="displayChosenDates">
                        {dataDateTimes.map((dateTime, index) => (
                            <p key={index}>
                                {index + 1}
                                <span>: </span>
                                {dateTime.pickedDate}
                                <span> / </span>
                                {dateTime.pickedStart}
                                <span> - </span>
                                {dateTime.pickedEnd}
                                <span> </span>

                                <Button variant="text">
                                    <DeleteIcon onClick={() => deletePickedDate(dateTime.id)}/></Button>
                            </p>))}
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