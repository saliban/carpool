import React, { Component } from "react";
import { Switch, Route, RouteComponentProps } from "react-router";
import { observer, inject } from "mobx-react";
import { CssBaseline, CircularProgress, createMuiTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import teal from "@material-ui/core/colors/teal";
import deepPurple from "@material-ui/core/colors/deepPurple";

import { AuthStore } from "@carpool/core";
import { AppHeader, UserDialog, Content, DocumentHead } from "./components";
import {
    HomeScreen,
    CreateCarpoolScreen,
    CarpoolScreen,
    NotFoundScreen,
    VerificationScreen,
} from "./screens";
import { ScreenMode } from "./screens/verification-screen";

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: teal,
    },
});

export interface IAppProps extends RouteComponentProps {}

export interface IInjectedProps extends IAppProps {
    authStore: AuthStore;
}

export interface IAppState {
    showUserDialog: boolean;
}

@inject("authStore")
@observer
export class App extends Component<IAppProps, IAppState> {
    public state: IAppState = {
        showUserDialog: false,
    };

    private get injectedProps(): IInjectedProps {
        return this.props as IInjectedProps;
    }

    public async componentDidMount() {
        await this.injectedProps.authStore.initialize();
    }

    public render() {
        const { authStore } = this.injectedProps;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <DocumentHead />
                <AppHeader
                    initialized={authStore.initialized}
                    user={authStore.user}
                    onAuthClick={this.handleAuthClick}
                />
                {authStore.initialized && (
                    <Content>
                        <Switch>
                            <Route path="/" exact={true} component={HomeScreen} />
                            <Route
                                path="/create-carpool"
                                exact={true}
                                render={_routeProps => (
                                    <CreateCarpoolScreen
                                        isAuthenticated={authStore.isAuthenticated}
                                        onSignIn={this.handleAuthClick}
                                    />
                                )}
                            />
                            <Route path="/carpool/:id" exact={true} component={CarpoolScreen} />
                            <Route
                                path="/verification"
                                exact={true}
                                render={_routeProps => (
                                    <VerificationScreen
                                        authStore={authStore}
                                        mode={ScreenMode.Verification}
                                    />
                                )}
                            />
                            <Route
                                path="/passwordreset"
                                exact={true}
                                render={_routeProps => (
                                    <VerificationScreen
                                        authStore={authStore}
                                        mode={ScreenMode.PasswordReset}
                                    />
                                )}
                            />
                            <Route component={NotFoundScreen} />
                        </Switch>
                    </Content>
                )}
                {this.state.showUserDialog && (
                    <UserDialog
                        onClose={this.handleCloseDialog}
                        onSignIn={this.handleSignIn}
                        onSignUp={this.handleSignUp}
                        onRequestPasswordReset={this.handleRequestPasswordReset}
                    />
                )}
            </ThemeProvider>
        );
    }

    private handleAuthClick = () => {
        const { authStore } = this.injectedProps;

        if (authStore.isAuthenticated) {
            authStore.signOut();
        } else {
            this.handleShowDialog();
        }
    };

    private handleShowDialog = () => {
        this.setState({ showUserDialog: true });
    };

    private handleCloseDialog = () => {
        this.setState({ showUserDialog: false });
    };

    private handleSignIn = async (email: string, password: string) => {
        const { authStore } = this.injectedProps;
        await authStore.signIn(email, password);

        if (authStore.isAuthenticated) {
            this.handleCloseDialog();
        }
    };

    private handleRequestPasswordReset = async (email: string) => {
        console.log(`Password reset requested for: ${email}`);
    };

    private handleSignUp = async (email: string, password: string, displayName: string) => {
        const { authStore } = this.injectedProps;
        await authStore.signUp(email, password, displayName);
    };
}
