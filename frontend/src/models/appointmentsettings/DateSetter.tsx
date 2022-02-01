import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import deLocale from 'date-fns/locale/de'

interface DateSetterProps {
    date: Date | null
    setDate: Function
}

export default function DateSetter({date, setDate} : DateSetterProps) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
            <DatePicker
                label="Pick your date"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}