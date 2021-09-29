import React, { Component } from "react";
import CreateAcct from "./CreateAcct";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button} from "@mui/material";

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
          <Button variant="outlined">
            <Link to="/Home">Home</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/CreateAcct">Create Account</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/Login">Login</Link>
          </Button>
        </nav>
        <Switch>
          <Route exact path="/Home">
            <h1>Griz Auto Detailing</h1>
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
