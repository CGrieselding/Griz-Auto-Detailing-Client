import React, { Component } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  TextareaAutosize,
  Button,
} from "@mui/material";

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
        this.setState({ title: "" });
        this.setState({ date: "" });
        this.setState({ review: "" });
        this.setState({ imageURL: "" });
      });
  };

  render() {
    return (
      <>
        <h1>Leave Us A Review!</h1>
        <form onSubmit={this.handlePost}>
          <FormControl>
            <InputLabel htmlFor="title">Title: </InputLabel>
            <Input
              id="title"
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="date" />
            <Input
              id="date"
              type="date"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="ImageURL">Image/Video Link</InputLabel>
            <Input
              id="Image URL"
              type="text"
              value={this.state.imageURL}
              onChange={(e) => this.setState({ imageURL: e.target.value })}
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="review" />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              placeholder="Review..."
              style={{ width: 400 }}
              value={this.state.review}
              onChange={(e) => this.setState({ review: e.target.value })}
            />
          </FormControl>
          <br />
          <Button onClick={this.handlePost} type="submit" variant="contained">
            Submit Review
          </Button>
        </form>
      </>
    );
  }
}
