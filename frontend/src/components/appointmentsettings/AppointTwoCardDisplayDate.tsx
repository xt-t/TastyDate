import {Button, Card, CardContent} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {dataAppointment} from "../../models/appointmentsettings/dataAppointment";

interface AppointTwoCardDisplayDateProps {
    dataDateTimes: dataAppointment[]
    deletePickedDate: Function
    deleteAllPickedDates: Function
}

export default function AppointTwoCardDisplayDate
({dataDateTimes, deletePickedDate, deleteAllPickedDates}: AppointTwoCardDisplayDateProps) {
    return (
        <Card>
            <CardContent className="displayChosenDates">
                {dataDateTimes.map((dataDateTime, index) => (
                    <span key={index}>
                        {index + 1}
                                <span>. Date </span>
                        <span>: </span>
                        {dataDateTime.pickedDate}
                        <span> </span>
                        {dataDateTime.pickedStart}
                        <span> - </span>
                        {dataDateTime.pickedEnd}
                        <span> </span>

                    <Button variant="text">
        <DeleteIcon onClick={() => deletePickedDate(dataDateTime.id)}/></Button>
                            </span>))}


                {dataDateTimes.length !== 0 ? (
                <Button variant="text" onClick={() => deleteAllPickedDates()}>
                    <DeleteIcon color="error"/>Delete All</Button>) : (<></>)}

            </CardContent>
        </Card>
    )
}