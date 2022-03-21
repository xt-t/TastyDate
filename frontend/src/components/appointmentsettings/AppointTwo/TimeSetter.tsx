import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import "../Appoint.scss"

interface TimeSetterProps {
    label: string
    timeInput: Date
    setTimeInput: Function
    minimalTime?: Date
}

export default function TimeSetter({label, timeInput, setTimeInput, minimalTime}: TimeSetterProps) {


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                label={label}
                value={timeInput}
                ampm={false}
                onChange={(newValue) => {
                    setTimeInput(newValue);
                }}
                minTime={minimalTime}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}