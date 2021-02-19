import React, {useState} from "react";
import {createMuiTheme, createStyles, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Grid, Button, Switch} from "@material-ui/core";
import NewVisualisationCountChart from "./NewVisualisationCountChart";
import DataPicker from "./DataPicker";
import Shape3d from "./3dShapes";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import clsx from "clsx";
import {Router} from "@material-ui/icons";
//modele danych
//szablony w material UI light and dark mode
// useContext, udeReducer
//formik with yup walidacja danych w formularzu

const useStyles = makeStyles((theme) =>
    createStyles({
        buttons: {
            display: "flex",
            alignItems: "center",
        },
        hide: {
            display: "none",
        },
        headerContent: {
            display: "none",
            [theme.breakpoints.up("sm")]: {display: "flex"},
        },
        mobileHeaderContent: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            [theme.breakpoints.up("sm")]: {display: "none"},
        },
        tab: {},
    })
);

const MainHeader = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [darkMode, setDarkMode] = useState(false);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <AppBar
                color="default"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerOpen,
                })}
            >
                <Toolbar>
                    <div className={classes.mobileHeaderContent}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            edge="start"
                            className={clsx(drawerOpen && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>

                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        className={classes.headerContent}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth" F
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >
                            <Tab
                                className={classes.tab}
                                icon={<HomeIcon/>}
                                label="Home"
                                component={Link}
                                to="/"
                            />

                            <Tab
                                className={classes.tab}
                                icon={<EqualizerIcon/>}
                                label="Statistics"
                                component={Link}
                                to="Statistics"
                            />
                            <Tab
                                className={classes.tab}
                                icon={<InfoIcon/>}
                                label="What is Formly"
                                component={Link}
                                to="What"
                            />

                            <div className={classes.buttons}>
                                <motion.div
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <Button
                                        target="_blank"
                                        href="https://formly.pl/"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        Check Formly
                                    </Button>
                                </motion.div>
                            </div>
                        </Tabs>
                        <div
                            style={{
                                marginTop: 15,
                            }}
                        >
                            {/*<Switch*/}
                            {/*  color="primary"*/}
                            {/*  checked={darkMode}*/}
                            {/*  onChange={() => setDarkMode(!darkMode)}*/}
                            {/*>*/}
                            {/*  <Shape3d />*/}
                            {/*  <NewVisualisationCountChart />*/}
                            {/*  <DataPicker />*/}
                            {/*</Switch>*/}
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                onClose={handleDrawerToggle}
                className={classes.drawer}
                variant="temporary"
                anchor="right"
                open={drawerOpen}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerToggle}>
                        {!drawerOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List
                    onChange={handleChange}
                    value={value}
                >
                    <ListItem button="Home"
                              component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon/></ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button="Statistics"
                              component={Link} to="Statistics">
                        <ListItemIcon>
                            <EqualizerIcon/></ListItemIcon>
                        <ListItemText primary="Statistics"/>
                    </ListItem>
                    <ListItem button="What is Formly"
                              component={Link} to="What">
                        <ListItemIcon>
                            <HomeIcon></HomeIcon></ListItemIcon>
                        <ListItemText primary="What is Formly"/>
                    </ListItem>
                </List>
                <Divider/>

            </Drawer>
        </>
    );
};

export default MainHeader;
