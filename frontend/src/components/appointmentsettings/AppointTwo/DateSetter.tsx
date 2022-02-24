import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface DateSetterProps {
    date: Date
    setDate: Function
}

export default function DateSetter({date, setDate}: DateSetterProps) {

    var currentDate = new Date();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Pick your date"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                minDate={currentDate.setDate(currentDate.getDate() + 1)}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}