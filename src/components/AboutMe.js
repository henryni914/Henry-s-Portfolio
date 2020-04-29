import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
    media: {
        height: 200,
        width: 200,
        position: 'relative'
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} mt={3}>
                <Grid item xs={12}>
                    <Card className={classes.paper} elevation={1}>
                        <div>
                            <CardContent display='flex'>
                                <Typography variant='h5'>
                                    Start of About Me!
                            </Typography>
                                <Typography>
                                    Hello, I'm Henry and I'm an aspiring web developer with
                            </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            display='flex'
                            className={classes.media}
                            component='img'
                            src={"https://source.unsplash.com/random"}
                        ></CardMedia>
                    </Card>
                    {/* <Paper className={classes.paper} elevation={0}>
                        <h2>About Me!</h2>
                    </Paper> */}
                </Grid>
            </Grid>
        </div>
    )
}