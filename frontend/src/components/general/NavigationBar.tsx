import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthProvider";
import {getLoggedUserName} from "../../service/tastydate-api-service";

interface NavigationBarProps {
    showSidebar: () => void
}

export default function NavigationBar({showSidebar}: NavigationBarProps) {

    const {token, setJwt} = useContext(AuthContext);
    const [userName, setUserName] = useState<string>("");

    const handleLogout = () => {
        if (token !== "") {
            setJwt("");
            setUserName("");
        }
    }

    const getLoggedUser = () => {
        if (token) {
            getLoggedUserName(token)
                .then((response) => {
                    setUserName(response.data);
                })
        }
    }

    useEffect(() => {
        getLoggedUser();
        //eslint-disable-next-line
    }, [])

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" className="bar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={showSidebar}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to="/" className="logo">TastyDate</Link>
                    </Typography>
                    <div className="login" onClick={() => handleLogout()}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <AccountCircle/>
                            <span style={{fontSize: "1rem"}}>&nbsp;{userName}&nbsp;</span>
                        </IconButton>
                        {token ? (
                            <span className="logintext">
                                <Link to={"/"}>Logout </Link>
                            </span>
                        ) : (
                            <span className="logintext">
                                <Link to={"/login"}>Login</Link>
                            </span>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>)
}