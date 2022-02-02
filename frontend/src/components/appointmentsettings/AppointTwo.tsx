import React, { useState } from "react";
import {dataAppointment} from "../../models/appointmentsettings/dataAppointment"
import AppointTwoCardAddDate from "./AppointTwoCardAddDate";
import AppointTwoCardDisplayDate from "./AppointTwoCardDisplayDate";

export default function AppointTwo() {

    const [date, setDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [id, setId] = useState<number>(1);
    const STORAGE_KEY = "DateTimeKey"
    const [dataDateTimes, setDataDateTimes] = useState<dataAppointment[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

    React.useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataDateTimes))}, [dataDateTimes])

    const saveAppointmentData = () => {
        if ((date !== null) && (startTime !== null) && (endTime !== null)) {
            const newDataDateTime = {
                id: id,
                pickedDate: date.toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }),
                pickedStart: startTime.toLocaleTimeString( "en-US", {hour: '2-digit', minute: '2-digit', hour12: false}),
                pickedEnd: endTime.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: false})
            }
            setDataDateTimes([...dataDateTimes, newDataDateTime]);
            resetDateInput();
            setId(id + 1);
        }
    }

    const resetDateInput = () => {
        setDate(null);
        setStartTime(null);
        setEndTime(null);
    }

    const deletePickedDate = (id: number) => {
        setDataDateTimes(dataDateTimes.filter(keepDataDateTime => keepDataDateTime.id !== id));
    }

    const deleteAllPickedDates = () => {
        setDataDateTimes([]);
    }

    return (
        <div className="cardTwo">

            <AppointTwoCardAddDate
                date={date}
                setDate={setDate}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
                resetDateInput={resetDateInput}
                saveAppointmentData={saveAppointmentData}
            />

            <AppointTwoCardDisplayDate dataDateTimes={dataDateTimes} deletePickedDate={deletePickedDate} deleteAllPickedDates={deleteAllPickedDates}/>

        </div>
    )
}