import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100vw',
            maxHeight: '10vh',
        },
        appBar: {
            backgroundColor: 'rgba(230,1,10,0.8)',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: "black",
            fontWeight: "bold",
        },
        logoutButton: {
            color: "black",
            fontWeight: "bold",
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <img width="75em" src="./assets/dnd_bug_1c_blk_v1_xl_rgb.png" />
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h5" className={classes.title} id="title">
                        D&#038;D NPC GENERATOR
                    </Typography>
                    { props.token ? <Button className={classes.logoutButton} color="inherit" onClick={props.clickLogout}>Logout</Button> : null }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;