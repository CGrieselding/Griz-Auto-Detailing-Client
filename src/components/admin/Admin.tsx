import React, { Component } from "react";
import AdminDelete from "./AdminDelete";
import AdminInq from "./AdminInq";

type StateType = {
  isAdmin: boolean;
};

type PropsType = {
  token: string;
};

export default class Admin extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }

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
        {this.state.isAdmin === true ? (
          <>
            <AdminDelete token={this.props.token} />
            <AdminInq token={this.props.token} />
          </>
        ) : (
          <p className="noAdminTitle">
            "Sorry! You do not have access to this page."
          </p>
        )}
      </>
    );
  }
}
