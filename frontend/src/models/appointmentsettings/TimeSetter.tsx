import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

interface TimeSetterProps {
    startTime: Date | null
    setStartTime: Function
    endTime: Date | null
    setEndTime: Function
    range: string
}

export default function TimeSetter ({range, startTime, setStartTime, endTime, setEndTime}: TimeSetterProps) {

    if (range === "start Time") {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Start time"
                    value={startTime}
                    ampm={false}
                    onChange={(newValue) => {
                        setStartTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        );
    } else {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="End time"
                    value={endTime}
                    ampm={false}
                    onChange={(newValue) => {
                        setEndTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        );
    }
}