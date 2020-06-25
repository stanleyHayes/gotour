import React from "react";
import {Toolbar, Grid, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

function MobileHeader({handleDrawerToggle}) {

    const handleClick = () => {
        handleDrawerToggle(true)
    }

    const useStyles = makeStyles({
        title: {
            fontWeight: "bold"
        },
        logo: {
            width: 40,
            height: 40
        },
        menu: {
            color: "yellow"
        }
    });

    const classes = useStyles();


    return (
        <Toolbar variant="regular">
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true}>
                    <Menu className={classes.menu} onClick={handleClick}/>
                </Grid>
                <Grid item={true}>
                    <Typography className={`${classes.title} yellow-text darken-4`} align="center" variant="h4">GoTour</Typography>
                </Grid>
                <Grid item={true}>
                    <div>
                        <a href="/">
                            <img
                                className={classes.logo}
                                alt=""
                                src={`${process.env.PUBLIC_URL}/images/GoTour_logo.png`}
                            />
                        </a>
                    </div>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;
