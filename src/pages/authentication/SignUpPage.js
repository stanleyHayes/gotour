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
import {Link, Redirect, useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { connect, useDispatch } from 'react-redux';
import { signUp } from '../../redux/authentication/authenticationActionCreators';
import "../../App.css";

function SignUpPage({ currentUser, loading }) {
  const [user, setUser] = useState({ role: 'ADMIN' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  function handleUserChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handlePasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSignUpClick(event) {
    event.preventDefault();
    if (!user.name) {
      setError({ ...error, name: 'Field required' });
      return;
    } else {
      setError({ ...error, name: '' });
    }

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

    if (!confirmPassword) {
      setError({ ...error, confirmPassword: 'Field required' });
      return;
    } else {
      setError({ ...error, confirmPassword: '' });
    }

    if (user.password !== confirmPassword) {
      setError({
        ...error,
        confirmPassword: 'Password mismatch',
        password: 'Password mismatch',
      });
      return;
    } else {
      setError({ ...error, confirmPassword: null, password: null });
    }
    console.log(user);
    dispatch(signUp(user, history));
  }

  const useStyles = makeStyles({
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

  const classes = useStyles();

  if(!currentUser && !loading){
    return <Redirect to="/" />
  }

  return (
    <Grid
      className={classes.container}
      justify="center"
      container={true}
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
                Sign Up
              </Typography>

              <Typography variant="caption">Name</Typography>
              <TextField
                placeholder="Enter Name"
                name="name"
                fullWidth={true}
                onChange={handleUserChange}
                value={user.name}
                required={true}
                margin="dense"
                size="small"
                helperText={error.name}
                variant="outlined"
                type="text"
                label="Name"
                color="primary"
                error={error.name}
              />

              <Typography variant="caption">Email</Typography>
              <TextField
                placeholder="Enter Email"
                name="email"
                fullWidth={true}
                onChange={handleUserChange}
                value={user.email}
                required={true}
                size="small"
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
                size="small"
                helperText={error.password}
                variant="outlined"
                type="password"
                label="Password"
                color="primary"
                error={error.password}
              />

              <Typography variant="caption">Confirm Password</Typography>
              <TextField
                placeholder="Confirm Password"
                name="confirmPassword"
                fullWidth={true}
                onChange={handlePasswordChange}
                value={confirmPassword}
                required={true}
                size="small"
                margin="dense"
                helperText={error.confirmPassword}
                variant="outlined"
                type="password"
                label="Confirm Password"
                color="primary"
                error={error.confirmPassword}
              />

              <Button
                color="primary"
                variant="contained"
                disabled={loading}
                className={classes.button}
                disableElevation={true}
                onClick={handleSignUpClick}
              >
                Sign Up
              </Button>

              <Button
                color="primary"
                size="small"
                variant="text"
                disabled={loading}
                fullWidth={true}
              >
                <Link to="/login">Already have an account? Sign In</Link>
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

export default connect(mapStateToProps)(SignUpPage);
