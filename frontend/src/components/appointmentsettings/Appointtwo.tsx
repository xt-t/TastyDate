import Button from "@mui/material/Button";
import DateSetter from "../../models/appointmentsettings/DateSetter";
import TimeSetter from "../../models/appointmentsettings/TimeSetter";
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {Card, CardContent} from "@mui/material";
import {useState} from "react";
import {dataAppointment} from "../../models/appointmentsettings/dataAppointment"

export default function Appointtwo() {

    const [date, setDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [count, setCount] = useState<number>(1);
    const STORAGE_KEY = "DateTimeKey"
    const [dataDateTimes, setDataDateTimes] = useState<dataAppointment[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

    const saveAppointmentData = () => {
        if ((date !== null) && (startTime !== null) && (endTime !== null)) {
            const newDataDateTime = {
                counter: count,
                pickedDate: date,
                pickedStart: startTime,
                pickedEnd: endTime
            }
            setDataDateTimes([...dataDateTimes, newDataDateTime]);

            setDate(null);
            setStartTime(null);
            setEndTime(null);
            setCount(count+1);

            console.log(dataDateTimes);
        }

    }

    return (
        <div className="cardTwo">

            <div>
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
                            <Button variant="outlined"> <RestartAltIcon/> Reset </Button>
                            <Button variant="contained" onClick={saveAppointmentData}> <AddIcon/> Add </Button>
                        </div>

                    </CardContent>
                </Card>
            </div>

            <div>
                <Card>
                    <CardContent className="displayChosenDates">
                        {dataDateTimes.map((dataDateTime, index) => (
                            <span>
                                {index}
                            {dataDateTime.counter}
                                {dataDateTime.pickedDate}
                                {dataDateTime.pickedStart}
                                {dataDateTime.pickedEnd}
                            </span>))}
                        <span>Termin 1 12.03.22: 17:00 Uhr - 19:00 Uhr</span>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}