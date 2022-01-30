import TextField from "@mui/material/TextField";
import "./Appoint.scss"

export default function Appointone() {

    return (
        <div className="form">
            <div className="formelements">
                <TextField
                    required
                    id="standard-required"
                    label="TastyDate: Name"
                    variant="standard"
                />
            </div>
            <div className="formelements">
                <TextField
                    id="outlined-multiline-static"
                    label="TastyDate Notes"
                    multiline
                    rows={4}
                />
            </div>
            <div className="formelements">
                <TextField
                    required
                    id="standard-required"
                    label="Your name"
                    variant="standard"
                />
            </div>
        </div>
    )
}