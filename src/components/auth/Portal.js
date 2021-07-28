import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid
} from '@material-ui/core';

import Signup from './Signup';
import Login from './Login';
import Introduction from './Introduction';

const Portal = (props) => {
    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            justifyContent: "center",
            height: "100vh",
        },
        gridItem: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(230,1,10,0.9)",
            borderRadius: "1rem",
            minHeight: "60vh",
            maxHeight: "60vh",
            color: "black",
            marginTop: "12em",
        },
    }))

    const classes = useStyles();

    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const togglePortal = () => { setShowLogin(!showLogin) };

    // const submitLogin = () => { console.log(`Form is sent!\nusername: ${username}\npassword: ${password}`) };

    // const submitSignup = () => { console.log(`Form is sent!\nusername: ${username}\nemail: ${email}\npassword: ${password}\nconfirm password: ${cPassword}`) }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={5} sm={3} className={classes.gridItem}>
                {showLogin
                    ? <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        togglePortal={togglePortal}
                        // submitForm={submitLogin}
                        updateToken={props.updateToken}
                    />
                    : <Signup
                        username={username}
                        email={email}
                        password={password}
                        setUsername={setUsername}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        togglePortal={togglePortal}
                        // submitForm={submitSignup}
                        updateToken={props.updateToken}
                    />
                }
            </Grid>
            <Grid item xs={5} sm={3} id="intro" className={classes.gridItem}>
                <Introduction />
            </Grid>
        </Grid>
    )
}

export default Portal;