import React from "react";
import {AppBar, Hidden} from "@material-ui/core";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import {makeStyles} from "@material-ui/styles";

function Header({handleDrawerToggle}) {

    const useStyles = makeStyles({
        title: {
            color: "yellow"
        },
        appbar: {
            backgroundColor: "black",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 24,
            paddingRight: 24
        }
    });

    const classes = useStyles();


    return (
        <AppBar className={classes.appbar} variant="elevation" elevation={1} position="sticky" >
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
            <Hidden lgUp={true}>
                <MobileHeader
                    handleDrawerToggle={handleDrawerToggle}/>
            </Hidden>
        </AppBar>
    )
}

export default Header;
