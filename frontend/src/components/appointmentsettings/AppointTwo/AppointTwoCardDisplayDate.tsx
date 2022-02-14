import {Button, Card, CardContent} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {TimeItem} from "../../../models/appointmentsettings/TimeItem";

interface AppointTwoCardDisplayDateProps {
    dataDateTimes: TimeItem[]
    deletePickedDate: Function
    deleteAllPickedDates: Function
}

export default function AppointTwoCardDisplayDate
({dataDateTimes, deletePickedDate, deleteAllPickedDates}: AppointTwoCardDisplayDateProps) {
    return (
        <Card>
            <CardContent className="displayChosenDates">
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


                {dataDateTimes.length !== 0 ? (
                    <Button variant="text" onClick={() => deleteAllPickedDates()}>
                        <DeleteIcon color="error"/>Delete All</Button>) : (<></>)}

            </CardContent>
        </Card>
    )
}