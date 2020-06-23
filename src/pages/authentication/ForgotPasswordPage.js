import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect, useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/authentication/authenticationActionCreators';

function ForgotPasswordPage({ loading }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleForgotPasswordClick(event) {
    event.preventDefault();

    if (!email) {
      setError({ ...error, email: 'Field required' });
      return;
    } else {
      setError({ ...error, email: '' });
    }
    dispatch(forgotPassword(email));
  }

  const useStyle = makeStyles({
    container: {
      minHeight: '100vh',
    },
    gridContianer: {
      minHeight: '88vh',
    },
  });

  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Grid
        className={classes.gridContianer}
        container={true}
        justify="center"
        alignItems="center"
      >
        <Grid item={true} xs={12} md={6}>
          <form>
            <Card elevation={1} raised={true} variant="elevation">
              {loading && <LinearProgress variant="query" />}
              <CardContent>
                <Typography variant="h5" align="center">
                  GoTour
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                  gutterBottom={true}
                >
                  Forgot Password
                </Typography>

                <Typography variant="caption">Email</Typography>
                <TextField
                  placeholder="Enter Email"
                  name="email"
                  fullWidth={true}
                  onChange={handleEmailChange}
                  value={email}
                  required={true}
                  margin="dense"
                  helperText={error.email}
                  variant="outlined"
                  type="text"
                  label="Email"
                  color="primary"
                  error={error.email}
                />

                <Typography variant="subtitle2" align="center">
                  Password reset link will be sent to the email you have
                  provided above
                </Typography>

                <Button
                  color="primary"
                  variant="contained"
                  disabled={loading}
                  fullWidth={true}
                  onClick={handleForgotPasswordClick}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.authentication.loading,
  };
}
export default connect(mapStateToProps)(ForgotPasswordPage);
