import React, {useState} from "react";
import {createStyles, makeStyles, responsiveFontSizes} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import {Grid, Typography, Button, Paper, Switch} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import NewVisualisationCountChart from "./NewVisualisationCountChart";
import DataPicker from "./DataPicker";
import Shape3d from "./3dShapes";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//modele danych
//szablony w material UI light and dark mode
// useContext, udeReducer
//formik with yup walidacja danych w formularzu




const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'absolute',
            top: theme.spacing(2),
            left: theme.spacing(2),
            zIndex: 900,
            [theme.breakpoints.down('xs')]: { top: theme.spacing(1), left: theme.spacing(1) }
        },
        container: {
            display: 'flex',
            [theme.breakpoints.up('sm')]: { padding: theme.spacing(0.5) }
        },
        buttons:{
            width: 400,
            paddingLeft: 50,
            marginTop: 20

        },
        component:{
            flexGrow: 1,
            width: "100%",
        },

        hamburger:{
            display: "none",
            [theme.breakpoints.up('sm')]: { display:"block"}

        }
    })
)

const MainHeader = () => {
    const [darkMode, setDarkMode] = useState(false);
    const classes=useStyles();
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

            <Paper square className={classes.hamburger}>
                <Grid container direction="row"
                      justify="space-around"

                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"

                    >
                        <Tab icon={<HomeIcon/>} label="Home" component={Link} to="/" style={{
                            marginRight: 50,
                        }}
                        />

                        <Tab icon={<EqualizerIcon/>} label="Statistics" component={Link} to="Statistics" style={{
                            marginRight: 50,

                        }}/>
                        <Tab icon={<InfoIcon/>} label="What is Formly ?" component={Link} to="What"
                             style={{
                                 marginRight: 50,
                                 width: 200

                             }}/>

                        <div className={classes.buttons}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <Button
                                target="_blank"
                                href="https://formly.pl/"
                                variant="outlined"
                                color="secondary"
                            > Check Formly</Button>
                        </motion.div>

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
    )
}


export default MainHeader;

