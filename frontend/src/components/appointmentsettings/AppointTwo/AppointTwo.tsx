import React from "react";
import AppointTwoCardAddDate from "./AppointTwoCardAddDate";
import AppointTwoCardDisplayDate from "./AppointTwoCardDisplayDate";
import {AppointTwoType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";

interface AppointTwoProps {
    appointTwo: AppointTwoType
}

export default function AppointTwo(
    {appointTwo}: AppointTwoProps) {

    const saveAppointmentData = () => {
        if ((appointTwo.date !== null) && (appointTwo.startTime !== null) && (appointTwo.endTime !== null)) {
            const newDataDateTime = {
                id: appointTwo.idPickedTime,
                pickedDate: appointTwo.date.toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }),
                pickedStart: appointTwo.startTime.toLocaleTimeString
                ("en-US", {hour: '2-digit', minute: '2-digit', hour12: false}),
                pickedEnd: appointTwo.endTime.toLocaleTimeString
                ("en-US", {hour: '2-digit', minute: '2-digit', hour12: false})
            }
            appointTwo.setDataDateTimes([...appointTwo.dataDateTimes, newDataDateTime]);
            resetDateInput();
            appointTwo.setIdPickedTime(appointTwo.idPickedTime + 1);
        }
    }

    const resetDateInput = () => {
        appointTwo.setDate(new Date());
        appointTwo.setStartTime(new Date());
        appointTwo.setEndTime(new Date());
    }

    const deletePickedDate = (id: number) => {
        appointTwo.setDataDateTimes(appointTwo.dataDateTimes.filter(keepDataDateTime => keepDataDateTime.id !== id));
    }

    const deleteAllPickedDates = () => {
        appointTwo.setDataDateTimes([]);
    }

    return (
        <div className="cardTwo">

            <AppointTwoCardAddDate
                appointTwo={appointTwo}
                resetDateInput={resetDateInput}
                saveAppointmentData={saveAppointmentData}
            />

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
    )
}