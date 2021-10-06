import React, { Component } from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import InqSend from "../inquiry/InqSend";
import RevPage from "../review/RevPage";
import OurWorkPage from "./OurWorkPage";
import YourActivityPage from "./YourActivityPage";
import DetailingPage from "./DetailingPage";
import Admin from "../admin/Admin";

type StateType = {
  value: number;
  isAdmin: boolean;
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
      isAdmin: false,
    };
  }

  handleTabs = (event: React.SyntheticEvent, newValue: number) => {
    this.setState({ value: newValue });
  };

  componentDidMount = () => {
    fetch("http://localhost:4000/user/admin", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((confirmedAdmin) => {
        if (confirmedAdmin !== null) this.setState({ isAdmin: true });
      });
  };

  render() {
    return (
      <>
        <h1 className="mainTitle">GRIZ AUTO DETAILING</h1>
        <AppBar position="static" style={{ background: "#01FFF4" }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleTabs}
            TabIndicatorProps={{
              style: {
                background: "black",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Tab label={<span className="appBarLink">┇ Home ┇</span>} />
            </Link>
            <Link to="/OurWorkPage" style={{ textDecoration: "none" }}>
              <Tab label={<span className="appBarLink">┇ Our Work ┇</span>} />
            </Link>
            <Link to="/RevPage" style={{ textDecoration: "none" }}>
              <Tab label={<span className="appBarLink">┇ Reviews ┇</span>} />
            </Link>
            <Link to="/YourActivityPage" style={{ textDecoration: "none" }}>
              <Tab
                label={<span className="appBarLink">┇ Your Activity ┇</span>}
              />
            </Link>
            {this.state.isAdmin === true ? (
              <Link to="/AdminPage" style={{ textDecoration: "none" }}>
                <Tab label={<span className="appBarLink">┇ Admin Roles ┇</span>} />
              </Link>
            ) : null}
            <Button
              color="inherit"
              onClick={this.props.clickLogout}
              style={{
                color: "#FE0000",
                position: "absolute",
                right: "66px",
                top: "8px",
                bottom: "8px",
                fontSize: "15px",
                fontWeight: "bolder",
              }}
              className="logoutButton"
            >
              ┇ Logout ┇
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
          <Route path="/AdminPage">
            <Admin token={this.props.token} />
          </Route>
          <Route path="/">
            <DetailingPage />
            <InqSend token={this.props.token} />
          </Route>
        </Switch>
      </>
    );
  }
}
