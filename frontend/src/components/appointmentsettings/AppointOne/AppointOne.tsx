import TextField from "@mui/material/TextField";
import "../Appoint.scss"
import {Card, CardContent} from "@mui/material";
import {AppointOneType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";
import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../../context/AuthProvider";
import {getLoggedUserName} from "../../../service/tastydate-api-service";

interface AppointOneProps {
    appointOne: AppointOneType
}

export default function AppointOne(
    {appointOne}: AppointOneProps
) {

    const {token} = useContext(AuthContext)

    const getUserName = () => {
        if (token) {
            getLoggedUserName(token)
                .then((response) => {
                    appointOne.setChosenDisplayName(response.data)
                });
        }
    }

    useEffect(() => {
        getUserName();
        //eslint-disable-next-line
    }, [])

    return (
        <div className="cardOne">
            <Card style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
                <CardContent className="form">
                    <h3>Your TastyDate Settings</h3>
                    <TextField
                        required
                        id="standard-required"
                        label="TastyDate: Name"
                        variant="standard"
                        className="formelements"
                        value={appointOne.tastyDateName}
                        onChange={(event) => {
                            appointOne.setTastyDateName(event.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Location"
                        variant="standard"
                        className="formelements"
                        value={appointOne.location}
                        onChange={(event) => {
                            appointOne.setLocation(event.target.value);
                        }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="TastyDate Notes"
                        multiline
                        rows={4}
                        className="formelements"
                        value={appointOne.notes}
                        onChange={(event) => {
                            appointOne.setNotes(event.target.value);
                        }}
                    />

                    <TextField label="Your voting name" className="formelements" variant="standard" value={appointOne.chosenDisplayName}
                               InputProps={{readOnly: true}}/>

                </CardContent>
            </Card>
        </div>
    )
}