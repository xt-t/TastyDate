import Button from "@mui/material/Button";
import DateSetter from "../../models/appointmentsettings/DateSetter";
import TimeSetter from "../../models/appointmentsettings/TimeSetter";
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {Card, CardContent} from "@mui/material";
import * as React from "react";


export default function Appointtwo() {
    const [date, setDate] = React.useState<Date | null>(null);
    const [startTime, setStartTime] = React.useState<Date | null>(null);
    const [endTime, setEndTime] = React.useState<Date | null>(null);


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
                            <Button variant="outlined"><RestartAltIcon/>Reset</Button>
                            <Button variant="contained"><AddIcon/>Add</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>

            <div>
                <Card>
                    <CardContent className="displayChosenDates">
                        <span>Termin 1 12.03.22: 17:00 Uhr - 19:00 Uhr</span>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}