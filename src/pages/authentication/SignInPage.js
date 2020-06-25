import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { Link, useHistory,Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { connect, useDispatch } from 'react-redux';
import { signIn } from '../../redux/authentication/authenticationActionCreators';
import "../../App.css";

function SignInPage({ currentUser, loading }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const history = useHistory();

  const dispatch = useDispatch();

  function handleUserChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSignUpClick(event) {
    event.preventDefault();
    if (!user.email) {
      setError({ ...error, email: 'Field required' });
      return;
    } else {
      setError({ ...error, email: '' });
    }

    if (!user.password) {
      setError({ ...error, password: 'Field required' });
      return;
    } else {
      setError({ ...error, password: '' });
    }
    dispatch(signIn(user.email, user.password, history));
  }

  const useStyle = makeStyles({
    container: {
      minHeight: '100vh',
      backgroundColor: '#eeeeee',
    },
    button: {
      marginTop: 8,
      marginBottom: 8,
      margin: '0 auto',
      display: 'block',
    },
  });

  const classes = useStyle();

  if(currentUser && !loading){
    return <Redirect to="/" />
  }

  return (
    <Grid
      className={classes.container}
      container={true}
      justify="center"
      alignItems="center"
    >
      <Grid item={true} xs={11} md={6} lg={4}>
        <form>
          <Card elevation={1} raised={true} variant="elevation">
            {loading && <LinearProgress variant="query" />}
            <CardContent>
              <Typography gutterBottom={true} variant="h4" align="center">
                GoTour
              </Typography>
              <Typography gutterBottom={true} variant="h6" align="center">
                Sign In
              </Typography>

              <Typography variant="caption">Email</Typography>
              <TextField
                placeholder="Enter Email"
                name="email"
                fullWidth={true}
                onChange={handleUserChange}
                value={user.email}
                required={true}
                margin="dense"
                helperText={error.email}
                variant="outlined"
                type="text"
                label="Email"
                color="primary"
                error={error.email}
              />

              <Typography variant="caption">Password</Typography>
              <TextField
                placeholder="Enter Password"
                name="password"
                fullWidth={true}
                onChange={handleUserChange}
                value={user.password}
                required={true}
                margin="dense"
                helperText={error.password}
                variant="outlined"
                type="password"
                label="Password"
                color="primary"
                error={error.password}
              />

              <Button
                size="small"
                color="primary"
                variant="text"
                disabled={loading}
                fullWidth={true}
              >
                <Link to="/forgot-password">Forgot Password?</Link>
              </Button>

              <Button
                color="primary"
                variant="contained"
                size="medium"
                disableElevation={true}
                disabled={loading}
                className={classes.button}
                onClick={handleSignUpClick}
              >
                Sign in
              </Button>

              <Button
                color="primary"
                variant="text"
                fullWidth={true}
                size="small"
              >
                <Link to="/register">Don't have an account? Sign Up</Link>
              </Button>
            </CardContent>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.authentication.loading,
    currentUser: state.authentication.currentUser,
  };
}

export default connect(mapStateToProps)(SignInPage);
