import React, { Component } from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import InquiryForm from "../inquiry/InquiryForm";
import RevPage from "../review/RevPage";
import OurWorkPage from "./OurWorkPage"
import YourActivityPage from "./YourActivityPage";

type StateType = {
  value: number;
};

type PropsType = {
  clickLogout: () => void;
  token: string;
};

export default class HomePage extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleTabs = (event: React.SyntheticEvent, newValue: number) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <>
        <h1>Griz Auto Detailing</h1>
          <AppBar position="static" style={{ background: "magenta" }}>
            <Tabs
              value={this.state.value}
              onChange={this.handleTabs}
              TabIndicatorProps={{ style: { background: "black" } }}
            >
              <Link to="/">
                <Tab label={<span style={{ color: "black" }}>Home</span>} />
              </Link>
              <Link to="/OurWorkPage">
              <Tab label={<span style={{ color: "black"}}>Our Work</span>} />
              </Link>
              <Link to="/RevPage">
                <Tab label={<span style={{ color: "black" }}>Reviews</span>} />
              </Link>
              <Link to="/YourActivityPage">
              <Tab
                label={<span style={{ color: "black" }}>Your Activity</span>}
              />
              </Link>
              <Button color="inherit" onClick={this.props.clickLogout} style={{position:"absolute", right:"66px", top:"5px"}}>
                Logout
              </Button>
            </Tabs>
          </AppBar>
          <Switch>
            <Route path="/OurWorkPage">
              <OurWorkPage />
            </Route>
            <Route path="/RevPage">
              <RevPage token={this.props.token} />
            </Route>
            <Route path="/YourActivityPage">
              <YourActivityPage token={this.props.token} />
            </Route>
            <Route path="/">
              <h1>Auto Detailing Services and Packages...</h1>
          <InquiryForm />
            </Route>
          </Switch>
      </>
    );
  }
}
