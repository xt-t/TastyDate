import {FormEvent, useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";
import {loginPost} from "../../service/tastydate-api-service";
import {Alert, AlertTitle, Button, Card, CardContent, TextField} from "@mui/material";
import * as React from "react";
import "./Login.scss"
import {LoginData} from "../../models/loginregister/loginregister";


export default function LoginComponent() {

    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const navigate = useNavigate();

    const {setJwt} = useContext(AuthContext);

    const loginInputData = (event: FormEvent<HTMLFormElement>) => {
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
        <div className="loginWindow">
            <Card style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
                <CardContent className="loginCard">
                    <h3>Login</h3>
                    <form onSubmit={(e) => loginInputData(e)} className="formLogin">
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
                            The combination is not correct ??? <strong>please retry your login!</strong>
                        </Alert>
                    ) : (
                        <></>
                    )}
                </CardContent></Card>
        </div>
    )
}

