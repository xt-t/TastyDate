import TextField from "@mui/material/TextField";
import "../Appoint.scss"
import {Box} from "@mui/material";

interface AppointOneProps {
    tastyDateName: string
setTastyDateName: Function
location: string
setLocation: Function
notes: string
setNotes: Function
chosenDisplayName: string
setChosenDisplayName: Function
}

export default function AppointOne(
    {tastyDateName,
setTastyDateName,
location,
setLocation,
notes,
setNotes,
chosenDisplayName,
setChosenDisplayName,}:AppointOneProps
) {



    return (
        <Box className="form">
            <h3>Settings for your TastyDate</h3>
            <TextField
                required
                id="standard-required"
                label="TastyDate: Name"
                variant="standard"
                className="formelements"
                value={tastyDateName}
                onChange={(event) => {
                    setTastyDateName(event.target.value);
                }}
            />
            <TextField
                required
                id="standard-required"
                label="Location"
                variant="standard"
                className="formelements"
                value={location}
                onChange={(event) => {
                    setLocation(event.target.value);
                }}
            />
            <TextField
                id="outlined-multiline-static"
                label="TastyDate Notes"
                multiline
                rows={4}
                className="formelements"
                value={notes}
                onChange={(event) => {
                    setNotes(event.target.value);
                }}
            />
            <TextField
                required
                id="standard-required"
                label="Your name"
                variant="standard"
                className="formelements"
                value={chosenDisplayName}
                onChange={(event) => {
                    setChosenDisplayName(event.target.value);
                }
                }
            />
        </Box>
    )
}