import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function NavigationBar() {
    const [auth, setAuth] = React.useState(true);

    const handleLogin = () => {
        setAuth(!auth);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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