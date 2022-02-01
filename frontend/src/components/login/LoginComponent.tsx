import {FormEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";
import {LoginData, loginPost} from "../../service/tastydate-api-service";
import {Button, TextField} from "@mui/material";

export default function LoginComponent() {

    const [userName, setUserName] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();

    const navigate = useNavigate();

    const {setJwt} = useContext(AuthContext);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const login: LoginData = {name: userName, password: userPassword}
        loginPost(login)
            .then(response => response.data)
            .then((data) => {
                setJwt(data)
                navigate("/")
            })
            .catch((err) => console.error("Error"))
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField variant="outlined" label="Username" type="username" value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>
            <TextField variant="filled" label="Password" type="password" value={userPassword}
                       onChange={(e) => setUserPassword(e.target.value)}/>
            <Button type="submit" variant="outlined">Login</Button>
        </form>
    )
}

