import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: 70,
        backgroundColor: "#b22c5a"
    },
});

const FooterNav = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction href="https://www.facebook.com/appFormly" target="_blank" label="Facebook"
                                    style={{color: "white"}} value="recents"
                                    icon={<FacebookIcon style={{color: "white"}}/>}/>
            <BottomNavigationAction href="https://www.instagram.com/formly.pl/?hl=pl" target="_blank" label="Instagram"
                                    style={{color: "white"}} value="favorites" icon=<InstagramIcon
                                    style={{color: "white"}}/>/>
            <BottomNavigationAction href="https://www.linkedin.com/company/formly/" label="LinkedIn"
                                    style={{color: "white"}} value="nearby"
                                    icon={<LinkedInIcon style={{color: "white"}}/>}/>
        </BottomNavigation>
    );
}


export default FooterNav;