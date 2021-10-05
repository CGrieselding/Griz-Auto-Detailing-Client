import React, { Component } from "react";
import Admin from "../auth/Admin"

type PropsType = {
  token: string
}

export default class OurWorkPage extends Component <PropsType, {}> {
  render() {
    return (
      <>
        <h1 className="workTitle">Our Work</h1>
        <h6>Link Alec's Instagram</h6>
        <Admin token={this.props.token}/>
      </>
    );
  }
}
