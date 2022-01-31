import TextField from "@mui/material/TextField";
import "./Appoint.scss"

export default function AppointOne() {

    return (
        <div className="form">
                <h2>Settings for your TastyDate</h2>
                <TextField
                    required
                    id="standard-required"
                    label="TastyDate: Name"
                    variant="standard"
                    className="formelements"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Location"
                    variant="standard"
                    className="formelements"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="TastyDate Notes"
                    multiline
                    rows={4}
                    className="formelements"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Your name"
                    variant="standard"
                    className="formelements"
                />
        </div>
    )
}