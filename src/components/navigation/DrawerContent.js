import React from "react";
import {
    Grid,
    Container
} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {connect, useDispatch} from 'react-redux';
import {makeStyles} from "@material-ui/styles";
import {signOutRequest} from "../../redux/authentication/authenticationActionCreators";

function DrawerContent({currentUser}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const useStyles = makeStyles({
        title: {
            fontWeight: "bold"
        },
        logo: {
            width: 80,
            height: 80
        },
        gridContainer: {
            paddingTop: 32,
            paddingBottom: 32,
            width: "100%"
        }
    });

    const classes = useStyles();

    function handleLogout(event) {
        event.preventDefault();
        dispatch(signOutRequest());
        history.push('/login');
    }

    return (
        <Container>
            <Grid
                className={classes.gridContainer}
                container={true}
                justify="center"
                alignItems="center"
                direction="column">
                <Grid item={true} lg={2}>
                    <a href="/">
                        <img
                            className={classes.logo}
                            alt=""
                            src={`${process.env.PUBLIC_URL}/images/GoTour_logo.png`}
                        />
                    </a>
                </Grid>
                <Grid justify="flex-start" direction="column" lg={10} item={true} container={true} spacing={2}>
                    <Grid item={true}>
                        <Link className="black-text text-lighten-5 center-align" to="/">
                            Home
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link className="black-text text-lighten-5 center-align" to="/discovery">
                            Discovery
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        {currentUser ? (
                            <Grid container={true} spacing={2} direction="column">
                                <Grid item={true}>
                                    <Link to="/profile">
                                        <span
                                            className="center-align black-text text-lighten-5">{currentUser && currentUser.name}</span>
                                    </Link>
                                </Grid>
                                <Grid item={true}>
                                    <span onClick={handleLogout}
                                          className=" center-align black-text text-lighten-5">Logout</span>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item={true}>
                                <Link to="/login">
                                    <span>Login</span>
                                </Link>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

function mapStateToProps(state) {
    return {currentUser: state.authentication.currentUser};
}


export default connect(mapStateToProps)(DrawerContent);
