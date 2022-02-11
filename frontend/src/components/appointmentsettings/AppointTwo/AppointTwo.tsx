import React from "react";
import {dataPickedTime} from "../../../models/appointmentsettings/DataPickedTime";
import AppointTwoCardAddDate from "./AppointTwoCardAddDate";
import AppointTwoCardDisplayDate from "./AppointTwoCardDisplayDate";

interface AppointTwoProps {
    date: Date | null,
    setDate: Function,
    startTime: Date | null,
    setStartTime: Function,
    endTime: Date | null,
    setEndTime: Function,
    idPickedTime: number
    setIdPickedTime: Function
    dataDateTimes: dataPickedTime[]
    setDataDateTimes: Function
}

export default function AppointTwo(
    {
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        idPickedTime,
        setIdPickedTime,
        dataDateTimes,
        setDataDateTimes
    }: AppointTwoProps) {

    const saveAppointmentData = () => {
        if ((date !== null) && (startTime !== null) && (endTime !== null)) {
            const newDataDateTime = {
                id: idPickedTime,
                pickedDate: date.toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }),
                pickedStart: startTime.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: false}),
                pickedEnd: endTime.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: false})
            }
            setDataDateTimes([...dataDateTimes, newDataDateTime]);
            resetDateInput();
            setIdPickedTime(idPickedTime + 1);
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

            <AppointTwoCardDisplayDate
                dataDateTimes={dataDateTimes}
                deletePickedDate={deletePickedDate}
                deleteAllPickedDates={deleteAllPickedDates}
            />

        </div>
    )
}