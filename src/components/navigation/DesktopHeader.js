import React from "react";
import {Toolbar, Typography, Grid, Container} from "@material-ui/core";

import {Link, useHistory} from 'react-router-dom';
import '../../App.css';
import {connect, useDispatch} from 'react-redux';
import {signOutRequest} from '../../redux/authentication/authenticationActionCreators';
import {makeStyles} from "@material-ui/styles";

function DesktopHeader({currentUser}) {

    const dispatch = useDispatch();
    const history = useHistory();

    function handleLogout(event) {
        event.preventDefault();
        dispatch(signOutRequest());
        history.push('/login');
    }

    const useStyles = makeStyles({
        link: {
            cursor: 'pointer',
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="dense">
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid item={true} lg={2}>
                    <a href="/">
                        <img
                            className="brand-logo"
                            alt=""
                            src={`${process.env.PUBLIC_URL}/images/GoTour_logo.png`}
                        />
                    </a>
                </Grid>
                <Grid justify="flex-end" lg={10} item={true} container={true} spacing={5}>
                    <Grid item={true}>
                        <Link className="yellow-text text-accent-3" to="/">
                            Home
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link className="yellow-text text-accent-3" to="/discovery">
                            Discovery
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        {currentUser ? (
                            <Grid container={true} spacing={5}>
                                <Grid item={true}>
                                    <Link to="/profile">
                                        <span
                                            className="yellow-text text-accent-3">{currentUser && currentUser.name}</span>
                                    </Link>
                                </Grid>
                                <Grid item={true}>
                                    <span onClick={handleLogout} className="yellow-text text-accent-3">Logout</span>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item={true}>
                                <Link to="/login">
                                    <span className="yellow-text text-accent-3">Login</span>
                                </Link>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

function mapStateToProps(state) {
    return {currentUser: state.authentication.currentUser};
}

export default connect(mapStateToProps)(DesktopHeader);
