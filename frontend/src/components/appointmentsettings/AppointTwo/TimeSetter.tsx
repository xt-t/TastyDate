import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

interface TimeSetterProps {
    timeInput: Date | null
    setTimeInput: Function
    testIfTimeRestrictionAvailable: Function
}

export default function TimeSetter({timeInput, setTimeInput, testIfTimeRestrictionAvailable}: TimeSetterProps) {


        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Start time"
                    value={timeInput}
                    ampm={false}
                    onChange={(newValue) => {
                        setTimeInput(newValue);
                    }}
                    minTime={testIfTimeRestrictionAvailable()}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        );
}