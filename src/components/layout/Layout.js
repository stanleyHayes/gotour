import React, {useState} from "react";
import Header from "../navigation/Header";
import {
    Drawer,
    Grid,
    Hidden
} from "@material-ui/core";

import DrawerContent from "../navigation/DrawerContent";
import {makeStyles} from "@material-ui/styles";

function Layout({children}) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = (open) => {
        setDrawerOpen(open);
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    const useStyles = makeStyles(theme => {
        return {
            grid: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    })

    const classes = useStyles();

    return (
        <div>
            <div>
                <Header handleDrawerToggle={handleDrawerToggle}/>
            </div>
            <div>
                <Hidden lgUp={true}>
                    <Drawer
                        className={classes.grid}
                        variant="temporary"
                        onClose={handleDrawerClose}
                        anchor="left"
                        elevation={16}
                        open={drawerOpen}>
                        <DrawerContent />
                    </Drawer>
                </Hidden>
                <Grid container={true}>
                    <Grid item={true} xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Layout;
