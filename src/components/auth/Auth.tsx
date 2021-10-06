import React, { Component } from "react";
import CreateAcct from "./CreateAcct";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

type PropsType = {
  updateToken: (input: string) => void;
};

export default class Auth extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
  }

  render() {
    return (
      <>
        <nav>
          <Button variant="outlined" className="homeButton">
            <Link
              to="/Home"
              style={{ textDecoration: "none", color: "#ea4033" }}
            >
              Home
            </Link>
          </Button>
          <Button variant="outlined" className="createAcctButton">
            <Link
              to="/CreateAcct"
              style={{ textDecoration: "none", color: "#ea4033" }}
            >
              Create Account
            </Link>
          </Button>
          <Button variant="outlined" className="loginButton">
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "#ea4033" }}
            >
              Login
            </Link>
          </Button>
        </nav>
        <Switch>
          <Route exact path="/Home">
            <Grid container justifyContent="center">
              <img
                src={require("../../assets/images/logo.jpg").default}
                className="logo"
                alt="logo"
              />
            </Grid>
          </Route>
          <Route path="/CreateAcct">
            <CreateAcct updateToken={this.props.updateToken} />
          </Route>
          <Route path="/Login">
            <Login updateToken={this.props.updateToken} />
          </Route>
        </Switch>
      </>
    );
  }
}
