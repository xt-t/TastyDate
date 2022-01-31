import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from "@mui/icons-material/Menu";

interface NavigationBarProps {
    showSidebar: () => void
}

export default function NavigationBar({showSidebar}:NavigationBarProps) {
    const [auth, setAuth] = React.useState(true);

    const handleLogin = () => {
        setAuth(!auth);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={showSidebar}
                            >
                                <MenuIcon/>
                            </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TastyDate
                    </Typography>
                        <div className="Login" onClick={() => handleLogin()}>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                                {auth ? (
                                    <>
                                        Login
                                    </>
                                    ): (
                                        <>
                                        Logout
                                        </>
                                    )}
                        </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}