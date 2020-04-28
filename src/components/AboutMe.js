import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        marginTop: theme.spacing(8)
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} mt={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <h2>About Me!</h2>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}