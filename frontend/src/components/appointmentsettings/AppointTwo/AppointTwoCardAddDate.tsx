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

    const timeRestriction = () => {
        if (startTime !== null) {
            var tempTime = new Date (startTime)
            tempTime.setMinutes(startTime.getMinutes()+30)
            return tempTime
        }
    }

    const noTimeRestriction = () => {
        return null;
    }

    return (
        <Card>
            <CardContent className="addDateTime">
                <h3>Add your date and pick a time range</h3>

                <DateSetter date={date} setDate={setDate}/>

                <div className="setTime">

                    <TimeSetter
                        timeInput={startTime}
                        setTimeInput={setStartTime}
                        testIfTimeRestrictionAvailable={noTimeRestriction}
                    />

                    <TimeSetter
                        timeInput={endTime}
                        setTimeInput={setEndTime}
                        testIfTimeRestrictionAvailable={timeRestriction}
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