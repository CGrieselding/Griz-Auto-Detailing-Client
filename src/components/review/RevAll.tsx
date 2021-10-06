import React, { Component } from "react";
import { Grid, Paper } from "@mui/material";

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

  render() {
    return (
      <>
        <h1 className="revTitle2">Check Out Our Reviews!</h1>
        <Grid
          container
          spacing={5}
          justifyContent="flex-start"
          alignItems="center"
          direction="row"
        >
          {this.state.reviews.map((review: any) => (
            <>
              <Grid container item xs={3}>
                <Paper elevation={20} className="revAllPaper">
                  <h3 className="revAllTitle">Title:</h3>
                  <span style={{ fontSize: "17px" }}>{review.title}</span>
                  <h3 className="revAllTitle">Date:</h3>
                  <span style={{ fontSize: "17px" }}>{review.date}</span>
                  <h3 className="revAllTitle">Image/Video URL:</h3>
                  {review.imageURL === "" ? (
                    <p style={{ fontSize: "17px" }}>N/A</p>
                  ) : (
                    <span style={{ fontSize: "17px" }}>{review.imageURL}</span>
                  )}
                  <h3 className="revAllTitle">Review:</h3>
                  <span style={{ fontSize: "17px" }}>{review.review}</span>
                </Paper>
              </Grid>
            </>
          ))}
        </Grid>
      </>
    );
  }
}
