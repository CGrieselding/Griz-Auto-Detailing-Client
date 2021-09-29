import React, { Component } from "react";

type StateType = {
  reviews: Array<string>;
  revUpdateActive: boolean;
  updateMyRev: object;
};

type PropsType = {
  token: string;
};

export default class RevEdit extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      reviews: [],
      revUpdateActive: false,
      updateMyRev: {},
    };
  }

  editUpdateRev = (rev: any) => {
    this.setState({ updateMyRev: rev });
  };

  updateOn = () => {
    this.setState({ revUpdateActive: true });
  };

  updateOff = () => {
    this.setState({ revUpdateActive: false });
  };

  deleteRev = (review: any) => {
    fetch(`http://localhost:4000/rev/deleteRev/${review.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => null); // myActivity()) // Pass as a prop from my activity page??
  };
  render() {
    return (
      <>
        <h1>Put ternary here...</h1>
      </>
    );
  }
}
