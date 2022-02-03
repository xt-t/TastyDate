import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";
import {LoginData, loginPost} from "../../service/tastydate-api-service";
import {Alert, AlertTitle, Button, TextField} from "@mui/material";
import * as React from "react";

export default function LoginComponent() {

    const [userName, setUserName] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<boolean>();

    const navigate = useNavigate();

    const {setJwt} = useContext(AuthContext);

    const login = () => {
        const login: LoginData = {name: userName, password: userPassword}
        loginPost(login)
            .then((data) => {
                setJwt(data)
                navigate("/")
            })
            .catch((err) => {
                console.error("Error");
                setErrorMessage(true)
            })
    };

    return (
        <div>
            <TextField variant="outlined" label="Username" type="username" value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>
            <TextField variant="filled" label="Password" type="password" value={userPassword}
                       onChange={(e) => setUserPassword(e.target.value)}/>
            <Button onClick={() => login()} variant="outlined">Login</Button>
    {errorMessage ? (
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            The combination is not corret — <strong>please retry your login!</strong>
           </Alert>
    ) : (
        <>
        </>
    )}
        </div>
    )
}

