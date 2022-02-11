import {FormEvent, useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";
import {LoginData, loginPost} from "../../service/tastydate-api-service";
import {Alert, AlertTitle, Button, Card, CardContent, TextField} from "@mui/material";
import * as React from "react";
import "./Login.scss"


export default function LoginComponent() {

    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const navigate = useNavigate();

    const {setJwt} = useContext(AuthContext);

    const login = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const login: LoginData = {name: userName, password: userPassword}
        loginPost(login)
            .then((data) => {
                setJwt(data)
                navigate("/")
            })
            .catch((err) => {
                console.error(err.message);
                setErrorMessage(true)
            })
    };

    return (
        <div className="window">
            <div className="loginCard">
                <Card><CardContent>
                    <h3>Login</h3>
                    <form onSubmit={(e) => login(e)} className="form">
                        <TextField variant="outlined" label="Username" type="username" value={userName}
                                   onChange={(e) => setUserName(e.target.value)}/>
                        <TextField variant="filled" label="Password" type="password" value={userPassword}
                                   onChange={(e) => setUserPassword(e.target.value)}/>
                        <Button type="submit" variant="outlined">Login</Button>
                        <Link to="/register">Register</Link>
                    </form>
                    {errorMessage ? (
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            The combination is not correct — <strong>please retry your login!</strong>
                        </Alert>
                    ) : (
                        <></>
                    )}
                </CardContent></Card>
            </div>
        </div>
    )
}

