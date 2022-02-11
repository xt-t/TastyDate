import {Card, CardContent} from "@mui/material";
import DateSetter from "./DateSetter";
import TimeSetter from "./TimeSetter";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import {AppointTwoType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";

interface AppointTwoCardAddDateProps {
    appointTwo: AppointTwoType
    resetDateInput: Function,
    saveAppointmentData: Function
}

export default function AppointTwoCardAddDate(
    {appointTwo, resetDateInput, saveAppointmentData}: AppointTwoCardAddDateProps) {

    const {date, setDate, startTime, setStartTime, endTime, setEndTime}=appointTwo;

    return (
        <Card>
            <CardContent className="addDateTime">
                <h3>Add your date and pick a time range</h3>

                <DateSetter date={date} setDate={setDate}/>

                <div className="setTime">

                    <TimeSetter
                        range="start Time"
                        startTime={startTime}
                        setStartTime={setStartTime}
                        endTime={endTime}
                        setEndTime={setEndTime}
                    />

                    <TimeSetter
                        range="end Time"
                        startTime={startTime}
                        setStartTime={setStartTime}
                        endTime={endTime}
                        setEndTime={setEndTime}
                    />

                </div>

                <div className="addDateTimeButtons">
                    <Button variant="outlined" onClick={() => resetDateInput()}> <RestartAltIcon/> Reset </Button>
                    <Button variant="contained" onClick={() => saveAppointmentData()}> <AddIcon/> Add </Button>
                </div>

            </CardContent>
        </Card>
    )
}