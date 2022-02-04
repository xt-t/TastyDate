import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import {RegisterData, registerPost} from "../../service/tastydate-api-service";
import {Button, TextField } from "@mui/material";

export default function RegisterComponent() {

    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [userPasswordVerify, setUserPasswordVerify] = useState<string>("");

    const navigate = useNavigate();

    const passwordCheck = () => {
        if (userPassword === userPasswordVerify) return true;
        else {return false;}
    }

    const register = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
            if (passwordCheck()) {
            const register: RegisterData = {name: userName, password: userPassword}
            registerPost(register)
                .then(() => {
                        navigate("/login")
                    }
                )
                .catch((err) => {
                    console.error(err.message)
                })
            }
    };

    return (
        <div>
            <form onSubmit={(e) => register(e)} className="form">
                <TextField variant="outlined" label="Username" type="username" value={userName}
                           onChange={(e) => setUserName(e.target.value)}/>
                <TextField variant="filled" label="Password" type="password" value={userPassword}
                           onChange={(e) => setUserPassword(e.target.value)}/>
                <TextField variant="filled" label="Password" type="password" value={userPasswordVerify}
                           onChange={(e) => setUserPasswordVerify(e.target.value)}/>
                <Button type="submit" variant="outlined">Register</Button>
            </form>
        </div>
    )
}