import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  Container,
  LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect, useDispatch } from 'react-redux';
import { changePassword } from '../../redux/authentication/authenticationActionCreators';

function ChangePasswordPage({ loading, token }) {
  const [passwords, setPasswords] = useState({});
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  function handlePasswordChange(event) {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
  }

  function handleChangeClick(event) {
    event.preventDefault();
    if (!passwords.currentPassword) {
      setError({ ...error, currentPassword: 'Field required' });
      return;
    } else {
      setError({ ...error, currentPassword: '' });
    }

    if (!passwords.newPassword) {
      setError({ ...error, newPassword: 'Field required' });
      return;
    } else {
      setError({ ...error, newPassword: '' });
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError({
        ...error,
        newPassword: 'Password Mismatch',
        confirmPassword: 'Password Mismatch',
      });
      return;
    } else {
      setError({ ...error, newPassword: '', confirmPassword: '' });
    }
    dispatch(
      changePassword(passwords.currentPassword, passwords.newPassword, token)
    );
    setPasswords({
      ...passwords,
      newPassword: '',
      confirmPassword: '',
      currentPassword: '',
    });
  }

  const useStyle = makeStyles({
    container: {
      minHeight: '100vh',
    },
    gridContainer: {
      flex: 1,
      minHeight: '88vh',
    },
  });

  const classes = useStyle();

  return (
    <Layout>
      <Container className={classes.container}>
        <Grid
          className={classes.gridContainer}
          container={true}
          alignItems="center"
          justify="center"
        >
          <Grid item={true} xs={12} md={6} lg={6}>
            <Card elevation={1} raised={true} variant="elevation">
              {loading && <LinearProgress variant="query" />}
              <CardContent>
                <form>
                  <Typography gutterBottom={true} variant="h5" align="center">
                    GoTour
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    gutterBottom={true}
                    align="center"
                  >
                    Change Password
                  </Typography>

                  <Typography variant="caption">Current Password</Typography>
                  <TextField
                    placeholder="Enter Current Password"
                    name="currentPassword"
                    fullWidth={true}
                    onChange={handlePasswordChange}
                    value={passwords.currentPassword}
                    required={true}
                    margin="dense"
                    helperText={error.currentPassword}
                    variant="outlined"
                    type="text"
                    label="Current Password"
                    color="primary"
                    error={error.title}
                  />

                  <Divider variant="fullWidth" />

                  <Typography variant="caption">New Password</Typography>
                  <TextField
                    placeholder="New Password"
                    name="newPassword"
                    fullWidth={true}
                    onChange={handlePasswordChange}
                    value={passwords.newPassword}
                    required={true}
                    margin="dense"
                    helperText={error.newPassword}
                    variant="outlined"
                    type="text"
                    label="New Password"
                    color="primary"
                    error={error.newPassword}
                  />

                  <Typography variant="caption">Confirm Password</Typography>
                  <TextField
                    placeholder="Enter Password Confirmation"
                    name="confirmPassword"
                    fullWidth={true}
                    onChange={handlePasswordChange}
                    value={passwords.confirmPassword}
                    required={true}
                    margin="dense"
                    helperText={error.confirmPassword}
                    variant="outlined"
                    type="text"
                    label="Confirm Password"
                    color="primary"
                    error={error.confirmPassword}
                  />

                  <Button
                    disableElevation={true}
                    color="primary"
                    variant="contained"
                    disabled={loading}
                    fullWidth={true}
                    onClick={handleChangeClick}
                  >
                    Change Password
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.authentication.loading,
    token: state.authentication.token,
  };
}

export default connect(mapStateToProps)(ChangePasswordPage);
