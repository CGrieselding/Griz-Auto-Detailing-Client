import React, { Component } from "react";

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
        //console.log(confirmedAdmin)
      });
  };

  render() {
    return (
      <>
        {this.state.isAdmin === true
          ? "You are an admin"
          : "Sorry, access denied!"}
      </>
    );
  }
}
