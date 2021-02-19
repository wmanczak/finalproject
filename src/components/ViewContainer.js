import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(9),
            [theme.breakpoints.down("xs")]: {
                paddingTop: theme.spacing(7),
            },
        },
    })
);

const ViewContainer = ({children}) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default ViewContainer;
