import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import {registerPost} from "../../service/tastydate-api-service";
import {Button, Card, CardContent, TextField} from "@mui/material";
import {RegisterData} from "../../models/loginregister/loginregister";
import "./Login.scss"

export default function RegisterComponent() {

    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [userPasswordVerify, setUserPasswordVerify] = useState<string>("");

    const navigate = useNavigate();

    const passwordCheck = () => {
        return (userPassword === userPasswordVerify);
    }

    const register = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (passwordCheck()) {
            const register: RegisterData = {name: userName, password: userPassword}
            registerPost(register)
                .then(() => {
                    navigate("/login")
                })
                .catch((err) => {
                    console.error(err.message)
                })
        }
    };

    return (
<div className="registerWindow">

    <Card>
                    <CardContent className="registerCard">
                    <h3>Register</h3>
                    <form className="formRegister" onSubmit={(e) => register(e)}>
                        <TextField variant="outlined" label="Username" type="username" value={userName}
                                   onChange={(e) => setUserName(e.target.value)}/>
                        <TextField variant="filled" label="Password" type="password" value={userPassword}
                                   onChange={(e) => setUserPassword(e.target.value)}/>
                        <TextField variant="filled" label="Password" type="password" value={userPasswordVerify}
                                   onChange={(e) => setUserPasswordVerify(e.target.value)}/>
                        <Button type="submit" variant="outlined">Register</Button>
                        <Link to="/login">Back to login</Link>
                    </form>
                </CardContent>
                </Card>
</div>
    )
}