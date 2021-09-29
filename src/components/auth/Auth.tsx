import React, { Component } from "react";
import CreateAcct from "./CreateAcct";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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
        <Router>
          <nav>
            <button>
              <Link to="/CreateAcct">Create Account</Link>
            </button>
            <button>
              <Link to="/Login">Login</Link>
            </button>
          </nav>
          <Switch>
            <Route path="/CreateAcct">
              <CreateAcct updateToken={this.props.updateToken} />
            </Route>
            <Route path="/Login">
              <Login updateToken={this.props.updateToken} />
            </Route>
          </Switch>
        </Router>
        {/* <CreateAcct updateToken={this.props.updateToken} />
        <Login updateToken={this.props.updateToken} /> */}
      </>
    );
  }
}
