import React from "react";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles({
    root: {
        fontSize: "800px",
        backgroundColor: "#b22c5a",
        top: "5vh",
        left: "-500px",
        position: "absolute",
        opacity: 0,
        zIndex: 1,
        animation:"top-block-expand 3s ease-in-out 1 forwards",
        height:400
    },
});
const FormlyBanner=()=>{
    const classes=useStyles;
    return(

            <div className={classes.root}/>
    )
}


export default FormlyBanner;