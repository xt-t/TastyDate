import {Card, CardContent} from "@mui/material";
import DateSetter from "./DateSetter";
import TimeSetter from "./TimeSetter";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";

interface AppointTwoCardAddDateProps {
    date: Date | null,
    setDate: Function,
    startTime: Date | null,
    setStartTime: Function,
    endTime: Date | null,
    setEndTime: Function,
    resetDateInput: Function,
    saveAppointmentData: Function
}

export default function AppointTwoCardAddDate(
    {
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        resetDateInput,
        saveAppointmentData
    }: AppointTwoCardAddDateProps)
{
    return (
        <Card>
            <CardContent className="addDateTime">
                <span>Add your date and pick a time range</span>

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
                    <Button variant="outlined" onClick={()=>resetDateInput()}> <RestartAltIcon/> Reset </Button>
                    <Button variant="contained" onClick={()=>saveAppointmentData()}> <AddIcon/> Add </Button>
                </div>

            </CardContent>
        </Card>
    )
}