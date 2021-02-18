import React, {useState, useEffect, PureComponent} from "react"
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, ThemeProvider, Paper} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core/styles';
import Image from "../images/tlo2.svg"
import {scale, rotate, translate, compose, applyToPoint} from 'transformation-matrix';



const theme = createMuiTheme({
    typography: {
        fontFamily: 'sans-serif',


    },


});

const newStyles = makeStyles({
    root: {
        maxHeight: "100%",
        height: 740,
        textAlign: "center",
    }
});

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
}

const MainContainer = () => {
    const classes = newStyles();

    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.root} style={styles.paperContainer}>
                <Typography style={{paddingTop: 40}} variant="h3">Manage your design studio stats</Typography>
                <p style={{
                    fontSize: 20,
                    fontFamily: "sans-serif",
                    color: "grey",
                    paddingTop: 20,
                }}>Check and control views, statistics and many other data in your personal app</p>
            </Paper>
        </ThemeProvider>
    );


}


export default MainContainer;



