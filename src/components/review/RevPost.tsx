import React, { Component } from "react";
import { FormControl, TextareaAutosize, Button } from "@mui/material";

type StateType = {
  title: string;
  date: string;
  review: string;
  imageURL: string;
};

type PropsType = {
  token: string;
};

export default class RevPost extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      date: "",
      review: "",
      imageURL: "",
    };
  }

  handlePost = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:4000/rev/postRev", {
      method: "POST",
      body: JSON.stringify({
        rev: {
          title: this.state.title,
          date: this.state.date,
          review: this.state.review,
          imageURL: this.state.imageURL,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((postRev) => {
        console.log(postRev);
        this.setState({ title: "", date: "", review: "", imageURL: "" });
      });
  };

  render() {
    return (
      <>
        <h1 className="revTitle">LEAVE US A REVIEW!</h1>
        <form onSubmit={this.handlePost} className="revForm">
          <FormControl>
            <label
              htmlFor="title"
              className="revLabel"
              style={{ marginBottom: "12px" }}
            >
              Title:{" "}
            </label>
            <input
              className="revInput"
              id="title"
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <label
              htmlFor="date"
              className="revLabel"
              style={{ marginBottom: "12px" }}
            >
              Date:{" "}
            </label>
            <input
              className="revInput"
              id="date"
              type="date"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <label htmlFor="ImageURL" className="revLabel">
              Image/Video Link:
            </label>
            <p className="revOptional">(optional)</p>
            <input
              className="revInput"
              id="Image URL"
              type="text"
              value={this.state.imageURL}
              onChange={(e) => this.setState({ imageURL: e.target.value })}
            />
          </FormControl>
          <br />
          <FormControl>
            <label
              htmlFor="review"
              className="revLabel"
              style={{ marginBottom: "15px" }}
            >
              Review:
            </label>
            <TextareaAutosize
              className="revTextarea"
              aria-label="minimum height"
              minRows={6}
              placeholder="Your review..."
              value={this.state.review}
              onChange={(e) => this.setState({ review: e.target.value })}
            />
          </FormControl>
          <br />
          <Button
            onClick={this.handlePost}
            className="revButton"
            type="submit"
            variant="contained"
          >
            Submit Review
          </Button>
        </form>
      </>
    );
  }
}
