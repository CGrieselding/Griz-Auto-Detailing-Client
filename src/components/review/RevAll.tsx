import React, { Component } from "react";
import { Button } from "@mui/material";

type StateType = {
  reviews: Array<string>;
};

type PropsType = {
  token: string;
};

export default class RevAll extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/rev/viewRev", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((showRev) => {
        this.setState({ reviews: showRev });
        console.log(showRev);
      });
  };

  render() {  // ADD PAGINATION??
    return (
      <>
      <h1>Check Out Our Reviews!</h1>
        {this.state.reviews.map((review: any) => (
          <>
            {review.title}
            {review.date}
            {review.review}
            {review.imageURL}
          </>
        ))}
      </>
    );
  }
}
