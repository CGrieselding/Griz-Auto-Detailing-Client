import React, { Component } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RevUpdate from "../review/RevUpdate";

type StateType = {
  reviews: Array<string>;
  inquiries: Array<string>;
  updateActive: boolean;
  updateMyActivity: object;
};

type PropsType = {
  token: string;
};

export default class YourActivityPage extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      reviews: [],
      inquiries: [],
      updateActive: false,
      updateMyActivity: {},
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/user/myInfo", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((myAct) => {
        this.setState({ reviews: myAct.revs, inquiries: myAct });
        console.log(myAct);
      });
  };

  editUpdate = (act: any) => {
    this.setState({ updateMyActivity: act });
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  deleteRev = (review: any) => {
    fetch(`http://localhost:4000/rev/deleteRev/${review.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.componentDidMount());
  };

  deleteInq = (inquiry: any) => {
    fetch(`http://localhost:4000/inq/deleteInq/${inquiry.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.componentDidMount());
  };

  revMapper = () => {
    return this.state.reviews.map((review: any, index: any) => {
      return (
        <div key={index}>
          {review.title}
          {review.date}
          {review.review}
          {review.imageURL}
          <Button
            startIcon={<EditIcon />}
            onClick={() => {
              this.editUpdate(review);
              this.updateOn();
            }}
          >
            Edit
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => {
              this.deleteRev(review);
            }}
          >
            Delete
          </Button>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <h1>Your Previous Activity</h1>
        <h3>Your Reviews</h3>
        {this.state.reviews.length > 0 ? (
          this.revMapper()
        ) : (
          <p>You have not posted any reviews yet.</p>
        )}

        {this.state.updateActive ? (
          <RevUpdate
            updateMyActivity={this.state.updateMyActivity}
            token={this.props.token}
            updateOff={this.updateOff}
            componentDidMount={this.componentDidMount}
          />
        ) : (
          <></>
        )}
        <h3>Your Inquiries</h3>
      </>
    );
  }
}
