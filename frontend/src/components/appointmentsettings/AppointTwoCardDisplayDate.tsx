import {Card, CardContent} from "@mui/material";
import {dataAppointment} from "../../models/appointmentsettings/dataAppointment";

interface AppointTwoCardDisplayDateProps {
    dataDateTimes: dataAppointment[]
}

export default function AppointTwoCardDisplayDate({dataDateTimes}:AppointTwoCardDisplayDateProps) {
return(
    <Card>
        <CardContent className="displayChosenDates">
            {dataDateTimes.map((dataDateTime, index) => (
                <span key={index}>
                                <span>Termin </span>
                    {dataDateTime.counter}
                    <span>: </span>
                    {dataDateTime.pickedDate}
                    <span> </span>
                    {dataDateTime.pickedStart}
                    <span> - </span>
                    {dataDateTime.pickedEnd}
                            </span>))}
        </CardContent>
    </Card>
)
}