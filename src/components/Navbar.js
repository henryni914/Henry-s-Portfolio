import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        align: 'right',
        marginRight: theme.spacing(2)
    }
}))

export default function Navbar() {

    const classes = useStyles();

    return (
        <AppBar>

            <Toolbar>
                <Typography align="center">Henry Ni's Portfolio</Typography>
                <Button className={classes.button}>
                    About Me
            </Button>
                <Button>
                    Projects
            </Button>
                <Button>
                    Resume
            </Button>
                {/* <Link to="/">
                    <Button>Home</Button>
                </Link>
                <Link to="/projects">
                    <Button>Projects</Button>
                </Link> */}
            </Toolbar>
        </AppBar>
    )
}

