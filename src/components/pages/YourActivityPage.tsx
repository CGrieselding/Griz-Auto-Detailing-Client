import React, { Component } from "react";
import { Button, Paper, Stack } from "@mui/material";
import { Router, Link, Switch, Route } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RevUpdate from "../review/RevUpdate";
import InqUpdate from "../inquiry/InqUpdate";
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
        <Stack className="revStack">
          <div key={index}>
            <Paper elevation={20} className="myRevPaper">
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
                variant="outlined"
              >
                Edit
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={() => {
                  this.deleteRev(review);
                }}
                variant="outlined"
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
        <div key={index}>
          {inquiry.fullName}
          {inquiry.email}
          {inquiry.phoneNumber}
          {inquiry.car}
          {inquiry.message}
          {/* <Button
            startIcon={<EditIcon />}
            onClick={() => {
              this.editUpdate(inquiry);
              this.updateOn();
            }}
            variant="outlined"
          >
            Edit
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => {
              this.deleteInq(inquiry);
            }}
            variant="outlined"
          >
            Delete
          </Button> */}
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <h1 className="actTitle">Your Previous Activity</h1>
        <h3 className="actTitle2">Reviews</h3>
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
        <h3 className="actTitle3">Inquiries</h3>
        {this.state.inquiries.length > 0 ? (
          this.inqMapper()
        ) : (
          <p className="noInqYet">You have not sent us any inquiries yet.</p>
        )}

        <h3>Want to edit your sent inquiries?</h3>
        <Link to="/YourActivityPage/InqView">
          <Button>Click Here</Button>
        </Link>
        <Switch>
          <Route exact path="/YourActivityPage/InqView">
            <InqView token={this.props.token} />
          </Route>
        </Switch>

        {/* {this.state.updateActive ? (
          <InqUpdate
            updateMyActivity={this.state.updateMyActivity}
            token={this.props.token}
            updateOff={this.updateOff}
            componentDidMount={this.componentDidMount}
          />
        ) : (
          <p>Oh no! Something went wrong when trying to update your inquiry.</p>
        )} */}
      </>
    );
  }
}
