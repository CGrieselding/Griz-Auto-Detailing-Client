import React, { Component } from "react";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InqUpdate from "./InqUpdate";

type StateType = {
  inquiries: Array<string>;
  updateActive: boolean;
  updateMyActivity: object;
};

type PropsType = {
  token: string;
};

export default class InqView extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      inquiries: [],
      updateActive: false,
      updateMyActivity: {},
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/inq/viewInq", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((viewInq) => {
        this.setState({ inquiries: viewInq });
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

  deleteInq = (inquiry: any) => {
    fetch(`http://localhost:4000/inq/deleteInq/${inquiry.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.componentDidMount());
  };

  inqMapper = () => {
    return this.state.inquiries.map((inquiry: any, index: any) => {
      return (
        <div key={index} >
        <Stack className="myStack">
          <h2 className="inqNeedUpdateTitle">Your Editable Inquiries Below:</h2>
          <div className="myPaper">
            <h3 className="inqMyTitle2">First & Last Name:</h3>
            <span style={{ fontSize: "17px" }}>{inquiry.fullName}</span>
            <h3 className="inqMyTitle2">Email:</h3>
            <span style={{ fontSize: "17px" }}>{inquiry.email}</span>
            <h3 className="inqMyTitle2">Phone Number:</h3>
            <span style={{ fontSize: "17px" }}>{inquiry.phoneNumber}</span>
            <h3 className="inqMyTitle2">Car Make & Model:</h3>
            <span style={{ fontSize: "17px" }}>{inquiry.car}</span>
            <h3 className="inqMyTitle2">Message:</h3>
            <span style={{ fontSize: "17px" }}>{inquiry.message}</span>
            <br />
            <Button
              startIcon={<EditIcon />}
              onClick={() => {
                this.editUpdate(inquiry);
                this.updateOn();
              }}
              variant="outlined"
              className="inqMyButton"
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => {
                this.deleteInq(inquiry);
              }}
              variant="outlined"
              className="inqMyButton"
            >
              Delete
            </Button>
          </div>
        </Stack>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        {this.state.inquiries.length > 0 ? (
          this.inqMapper()
        ) : (
          <p className="noInqYet2">You have no inquiries to edit.</p>
        )}

        {this.state.updateActive ? (
          <InqUpdate
            updateMyActivity={this.state.updateMyActivity}
            token={this.props.token}
            updateOff={this.updateOff}
            componentDidMount={this.componentDidMount}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}
