import React, { Component, Fragment } from "react";
import { Switch, Route, RouteComponentProps } from "react-router";
import { observer, inject } from "mobx-react";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import teal from "@material-ui/core/colors/teal";
import deepPurple from "@material-ui/core/colors/deepPurple";

import { AuthStore } from "@carpool/core";
import { AppHeader, UserDialog, Content } from "./components";
import { Home, CreateEvent, NotFound } from "./screens";

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

    public render() {
        const { authStore } = this.injectedProps;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppHeader
                    isAuthenticated={authStore.isAuthenticated}
                    onAuthClick={this.handleAuthClick}
                />
                <Content>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/create-event" exact={true} component={CreateEvent} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
                {this.state.showUserDialog && (
                    <UserDialog
                        onClose={this.handleCloseDialog}
                        onSignIn={this.handleSignIn}
                        onSignUp={this.handleSignUp}
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

    private handleSignUp = async (email: string, password: string, displayName: string) => {
        const { authStore } = this.injectedProps;
        await authStore.signUp(email, password, displayName);

        if (authStore.isAuthenticated) {
            this.handleCloseDialog();
        }
    };
}
