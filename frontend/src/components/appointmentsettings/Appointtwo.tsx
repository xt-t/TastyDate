import TextField from "@mui/material/TextField";

export default function Appointtwo() {

    return (
        <div>
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