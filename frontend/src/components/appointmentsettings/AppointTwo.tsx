import {useState} from "react";
import {dataAppointment} from "../../models/appointmentsettings/dataAppointment"
import AppointTwoCardAddDate from "./AppointTwoCardAddDate";
import AppointTwoCardDisplayDate from "./AppointTwoCardDisplayDate";

export default function AppointTwo() {

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
                pickedDate: date.toLocaleDateString("de-DE", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }),
                pickedStart: startTime.toLocaleTimeString("de-DE", {hour: '2-digit', minute: '2-digit', hour12: false}),
                pickedEnd: endTime.toLocaleTimeString("de-DE", {hour: '2-digit', minute: '2-digit', hour12: false})
            }
            setDataDateTimes([...dataDateTimes, newDataDateTime]);
            resetDateInput();
            setCount(count + 1);
        }
    }

    const resetDateInput = () => {
        setDate(null);
        setStartTime(null);
        setEndTime(null);
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


            <AppointTwoCardDisplayDate dataDateTimes={dataDateTimes}/>

        </div>
    )
}