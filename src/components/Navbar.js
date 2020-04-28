import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <AppBar>
            
            <Toolbar>
            <Typography>Henry Ni's Portfolio</Typography>
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

