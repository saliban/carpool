import React, { Component } from "react";
import { Redirect } from "react-router";
import {
    CircularProgress,
    Typography,
    WithStyles,
    withStyles,
    createStyles,
    Theme,
    Card,
    TextField,
    Button,
} from "@material-ui/core";
import { observer } from "mobx-react";

import { AuthStore } from "@carpool/core";
import { DocumentHead } from "../components";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: "auto",
            width: 500,
            maxWidth: "100%",
            padding: theme.spacing(2),
        },
        password: {
            width: "100%",
        },
        actions: {
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            marginTop: theme.spacing(2),
        },
    });

export interface IVerificationScreenProps extends WithStyles<typeof styles> {
    authStore: AuthStore;
    mode: ScreenMode;
}

export interface IVerificationScreenState {
    readyForRedirect: boolean;
    newPassword: string;
    newPasswordDuplicate: string;
}

export enum ScreenMode {
    Verification,
    PasswordReset,
}

@observer
class _VerificationScreen extends Component<IVerificationScreenProps, IVerificationScreenState> {
    public state: IVerificationScreenState = {
        readyForRedirect: false,
        newPassword: "",
        newPasswordDuplicate: "",
    };

    private _token?;
    private _email?;

    public async componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        this._token = params.get("token");
        this._email = params.get("email");

        if (this.props.mode !== ScreenMode.Verification) {
            return;
        }
        if (!this._token || !this._email) {
            this.setState({ readyForRedirect: true });
            return;
        }

        try {
            await this.props.authStore.verifyUser(this._email, this._token);
        } finally {
            this.setState({ readyForRedirect: true });
        }
    }

    public render() {
        const { classes } = this.props;
        if (this.state.readyForRedirect) {
            return <Redirect to="/" />;
        }
        if (this.props.mode === ScreenMode.Verification) {
            return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h6">Verifying your account...</Typography>
                    <CircularProgress style={{ marginTop: 8 }} />
                </div>
            );
        }

        return (
            <Card className={classes.root}>
                <DocumentHead screenTitle="Reset Password" />
                <Typography variant="h6" align="center">
                    Password Reset
                </Typography>
                <TextField
                    className={classes.password}
                    label="Password"
                    required={true}
                    type="password"
                    value={this.state.newPassword}
                    onChange={e => this.setState({ newPassword: e.target.value })}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    className={classes.password}
                    label="Retype Password"
                    required={true}
                    type="password"
                    value={this.state.newPasswordDuplicate}
                    onChange={e => this.setState({ newPasswordDuplicate: e.target.value })}
                    variant="outlined"
                    margin="normal"
                />
                <div className={classes.actions}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={
                            this.state.newPassword.length == 0 ||
                            this.state.newPassword !== this.state.newPasswordDuplicate
                        }
                        onClick={() => {
                            console.log("hi");
                        }}
                    >
                        Change Password
                    </Button>
                </div>
            </Card>
        );
    }
}

export const VerificationScreen = withStyles(styles)(_VerificationScreen);
