import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    TextField,
    Typography,
    Container,
    LinearProgress
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {resetPassword} from "../../redux/authentication/authenticationActionCreators";
import {useParams} from "react-router-dom";

function ResetPasswordPage({loading}) {

    const dispatch = useDispatch();
    const {resetToken} = useParams();
    const [passwords, setPasswords] = useState({});
    const [error, setError] = useState({});

    function handlePasswordChange(event) {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    function handlePasswordResetClick(event) {
        event.preventDefault();

        if(!passwords.newPassword){
            setError({...passwords, newPassword: "Field required"});
            return;
        }else {
            setError({...passwords, newPassword: null});
        }

        if(!passwords.confirmPassword){
            setError({...passwords, confirmPassword: "Field required"});
            return;
        }else {
            setError({...passwords, confirmPassword: null});
        }

        if(passwords.confirmPassword !== passwords.newPassword){
            setError({...passwords, confirmPassword: "\"Password Mismatch\"", newPassword: "Password Mismatch"});
            return;
        }else {
            setError({...passwords, confirmPassword: null, newPassword: null});
        }
        dispatch(resetPassword(passwords.newPassword, resetToken));
    }


    const useStyle = makeStyles({
        container: {
            marginTop: 30,
            marginBottom: 30,
            minHeight: "95vh"
        }
    });

    const classes = useStyle();


    return (
        <Layout>
            <Container>
                <Grid className={classes.container} container={true} alignItems="center" justify="center">
                    <Grid item={true} xs={12} md={8} lg={6}>
                        <Card elevation={4} raised={true} variant="elevation">
                            {loading && <LinearProgress variant="query" /> }
                            <CardContent>
                                <form>
                                    <Typography gutterBottom={true} variant="h3" align="center">Commonwealth Project Manager</Typography>
                                    <Typography gutterBottom={true} variant="h6" align="center">Grow your potential by
                                        reading
                                        more</Typography>
                                    <Typography gutterBottom={true} variant="h6" align="center">Reset
                                        Password</Typography>
                                    <Divider variant="fullWidth"/>

                                    <Typography variant="overline">New Password</Typography>
                                    <TextField
                                        placeholder="New Password"
                                        name="description"
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

                                    <Typography variant="overline">Confirm Password</Typography>
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
                                        color="primary"
                                        variant="contained"
                                        disabled={loading}
                                        fullWidth={true}
                                        onClick={handlePasswordResetClick}>
                                        Save Password
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        loading: state.authentication.loading
    }
}
export default connect(mapStateToProps) (ResetPasswordPage);
