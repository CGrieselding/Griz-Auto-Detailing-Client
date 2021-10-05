import React, { Component } from "react";
import { Button, Paper, Stack } from "@mui/material";
import { Router, Link, Switch, Route } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RevUpdate from "../review/RevUpdate";
import InqView from "../inquiry/InqView";

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
    this.updateOff = this.updateOff.bind(this);
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
        this.setState({ reviews: myAct.revs, inquiries: myAct.inqs });
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
        <Stack className="myStack">
          <div key={index}>
            <Paper elevation={20} className="myPaper">
              <h3 className="revMyTitle">Title:</h3>
              <span style={{ fontSize: "17px" }}>{review.title}</span>
              <h3 className="revMyTitle">Date:</h3>
              <span style={{ fontSize: "17px" }}>{review.date}</span>
              <h3 className="revMyTitle">Image/Video URL:</h3>
              {review.imageURL === "" ? (
                <p style={{ fontSize: "17px" }}>N/A</p>
              ) : (
                <span style={{ fontSize: "17px" }}>{review.imageURL}</span>
              )}
              <h3 className="revMyTitle">Review:</h3>
              <span style={{ fontSize: "17px" }}>{review.review}</span>
              <br />
              <Button
                startIcon={<EditIcon />}
                onClick={() => {
                  this.editUpdate(review);
                  this.updateOn();
                }}
                variant="outlined"
                className="revMyButton"
              >
                Edit
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={() => {
                  this.deleteRev(review);
                }}
                variant="outlined"
                className="revMyButton"
              >
                Delete
              </Button>
            </Paper>
          </div>
        </Stack>
      );
    });
  };

  inqMapper = () => {
    return this.state.inquiries.map((inquiry: any, index: any) => {
      return (
        <Stack className="myStack">
          <div key={index}>
            <Paper elevation={20} className="myPaper">
              <h3 className="inqMyTitle">First & Last Name:</h3>
              <span style={{ fontSize: "17px" }}>{inquiry.fullName}</span>
              <h3 className="inqMyTitle">Email:</h3>
              <span style={{ fontSize: "17px" }}>{inquiry.email}</span>
              <h3 className="inqMyTitle">Phone Number:</h3>
              <span style={{ fontSize: "17px" }}>{inquiry.phoneNumber}</span>
              <h3 className="inqMyTitle">Car Make & Model:</h3>
              <span style={{ fontSize: "17px" }}>{inquiry.car}</span>
              <h3 className="inqMyTitle">Message:</h3>
              <span style={{ fontSize: "17px" }}>{inquiry.message}</span>
            </Paper>
          </div>
        </Stack>
      );
    });
  };

  render() {
    return (
      <>
        <h1 className="actTitle">Your Previous Activity</h1>
        <h3 className="actTitle2">Your Reviews</h3>
        {this.state.reviews.length > 0 ? (
          this.revMapper()
        ) : (
          <p className="noRevYet">You have not posted any reviews yet.</p>
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
        <h3 className="actTitle3">Your Inquiries</h3>
        {this.state.inquiries.length > 0 ? (
          this.inqMapper()
        ) : (
          <p className="noInqYet">You have not sent us any inquiries yet.</p>
        )}

        <h3 className="inqNeedUpdate">Need to edit your sent inquiries too?</h3>
        <Link to="/YourActivityPage/InqView" style={{textDecoration: "none"}}>
          <Button variant="contained" className="inqNeedUpdateButton">Click Here!</Button>
        </Link>
        <Switch>
          <Route exact path="/YourActivityPage/InqView">
            <InqView token={this.props.token} />
          </Route>
        </Switch>
      </>
    );
  }
}
