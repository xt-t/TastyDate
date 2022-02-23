import {Card, CardContent} from "@mui/material";
import DateSetter from "./DateSetter";
import TimeSetter from "./TimeSetter";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import {AppointTwoType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import "../Appoint.scss"
import AppointTwoCardDisplayDate from "./AppointTwoCardDisplayDate";
import React from "react";

interface AppointTwoCardAddDateProps {
    appointTwo: AppointTwoType
    resetDateInput: Function,
    saveAppointmentData: Function
    deletePickedDate: Function
    deleteAllPickedDates: Function
}

export default function AppointTwoCardAddDate(
    {appointTwo, resetDateInput, saveAppointmentData, deletePickedDate, deleteAllPickedDates}: AppointTwoCardAddDateProps) {

    const {date, setDate, startTime, setStartTime, endTime, setEndTime}=appointTwo;

    const timeRestriction = () => {
            var tempTime = new Date (startTime)
            tempTime.setMinutes(startTime.getMinutes()+30)
            return tempTime
    }


    return (
        <Card>
            <CardContent className="addDateTime">
                <h3>Choose date and time</h3>

                <DateSetter date={date} setDate={setDate} />

                <div className="setTime">

                    <TimeSetter
                        label={"Start time"}
                        timeInput={startTime}
                        setTimeInput={setStartTime}
                    />

                    <TimeSetter
                        label={"End time"}
                        timeInput={endTime}
                        setTimeInput={setEndTime}
                        minimalTime={timeRestriction()}
                    />

                </div>

                <div className="addDateTimeButtons">
                    <Button className="resetButton" variant="outlined" onClick={() => resetDateInput()}> <RestartAltIcon/> Reset </Button>
                    <Button className="addButton" variant="contained" onClick={() => saveAppointmentData()}> <AddIcon/> Add </Button>

                </div>
                <div className="previewTimes">
                {appointTwo.dataDateTimes.length !== 0 ? (
                    < AppointTwoCardDisplayDate
                        dataDateTimes={appointTwo.dataDateTimes}
                        deletePickedDate={deletePickedDate}
                        deleteAllPickedDates={deleteAllPickedDates}
                    />
                ):(
                    <></>
                )
                }
                </div>
            </CardContent>
        </Card>
    )
}