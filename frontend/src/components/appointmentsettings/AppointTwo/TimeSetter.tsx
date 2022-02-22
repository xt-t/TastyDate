import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

interface TimeSetterProps {
    timeInput: Date
    setTimeInput: Function
    minimalTime?: Date
}

export default function TimeSetter({timeInput, setTimeInput, minimalTime}: TimeSetterProps) {


        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Start time"
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