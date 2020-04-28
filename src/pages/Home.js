import React from 'react';
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Home() {

    return (
        <>
            <Container>
                <Navbar />
                <Grid container direction="row" xs={12}>
                    <AboutMe />
                </Grid>
            </Container>
        </>
    )
}