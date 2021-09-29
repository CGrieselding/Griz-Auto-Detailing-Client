import React, { Component } from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import InquiryForm from "../inquiry/InquiryForm"

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
            <Tab label={<span style={{ color: "black" }}>Home</span>} />
            <Tab label={<span style={{ color: "black" }}>Our Work</span>} />
            <Tab label={<span style={{ color: "black" }}>Reviews</span>} />
            <Tab
              label={<span style={{ color: "black" }}>Your Activity</span>}
            />
            <Button color="inherit" onClick={this.props.clickLogout}>
              Logout
            </Button>
          </Tabs>
        </AppBar>
        <InquiryForm />
      </>
    );
  }
}
