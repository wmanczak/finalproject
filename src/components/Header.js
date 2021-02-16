import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import {Grid, Typography, Button, Paper, Switch} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import NewVisualisationCountChart from "./New VisualisationCountChart";
import DataPicker from "./DataPicker";
import Shape3d from "./3dShapes";
import {Link} from "react-router-dom";
//modele danych
//szablony w material UI light and dark mode
// useContext, udeReducer
//formik with yup walidacja danych w formularzu


const newStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: "100%",
    }
});

const buttonStyles = makeStyles({
    root: {
        width: 400,
        paddingLeft: 50,
        marginTop: 20

    }


});


const MainHeader = () => {
    const [darkMode, setDarkMode] = useState(false);
    const classes = newStyles();
    const buttons = buttonStyles();
    const [value, setValue] = React.useState(0);
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },

    })

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <ThemeProvider theme={theme}>
            <Paper square className={classes.root}>
                <Grid container direction="row" justify="space-around">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"

                    >
                        <Tab icon={<HomeIcon/>} label="Home" component={Link} to="/" style={{}}
                        />
                        <Tab icon={<VisibilityIcon/>} label="Views" component={Link} to="Views" style={{}}
                        />
                        <Tab icon={<EqualizerIcon/>} label="Statistics" component={Link} to="Statistics" style={{}}/>
                        <Tab icon={<InfoIcon/>} label="What is Formly ?" component={Link} to="What is Formly ?"
                             style={{}}/>
                        <div className={buttons.root}>

                            <Button
                                variant="outlined"
                                color="secondary"
                            > Check Formly</Button>
                        </div>
                    </Tabs>
                    <div style={{
                        marginTop: 15
                    }}>
                        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}>
                            <Shape3d/>
                            <NewVisualisationCountChart/>
                            <DataPicker/>


                        </Switch></div>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}


export default MainHeader;

