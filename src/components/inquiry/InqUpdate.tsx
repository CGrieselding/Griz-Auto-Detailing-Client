import React, { Component } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type StateType = {
  editFullName: string;
  editEmail: string;
  editPhoneNumber: string;
  editCar: string;
  editMessage: string;
};

type Inquiry = {
  car?: string;
  createdAt?: string;
  email?: string;
  fullName?: string;
  id?: string;
  message?: string;
  phoneNumber?: string;
  updatedAt?: string;
  userId?: string;
};

type PropsType = {
  token: string;
  updateMyActivity: Inquiry;
  updateOff: () => void;
  componentDidMount: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default class InqUpdate extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      editFullName: this.props.updateMyActivity.fullName!,
      editEmail: this.props.updateMyActivity.email!,
      editPhoneNumber: this.props.updateMyActivity.phoneNumber!,
      editCar: this.props.updateMyActivity.car!,
      editMessage: this.props.updateMyActivity.message!,
    };
  }

  inqUpdate = (e: any) => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/inq/updateInq/${this.props.updateMyActivity.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          inq: {
            fullName: this.state.editFullName,
            email: this.state.editEmail,
            phoneNumber: this.state.editPhoneNumber,
            car: this.state.editCar,
            message: this.state.editMessage,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      }
    ).then((res) => {
      this.props.componentDidMount();
      this.props.updateOff();
    });
  };

  render() {
    return (
      <>
        <Modal
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Update Your Inquiry:
              <Button onClick={this.props.updateOff}>
                <CloseIcon />
              </Button>
            </Typography>
            <form onSubmit={this.inqUpdate}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <label htmlFor="fullName">Edit Name:</label>
                <input
                  name="fullName"
                  type="text"
                  value={this.state.editFullName}
                  onChange={(e) =>
                    this.setState({ editFullName: e.target.value })
                  }
                />
              </Typography>
              <Typography>
                <label htmlFor="email">Edit Email:</label>
                <input
                  name="email"
                  type="text"
                  value={this.state.editEmail}
                  onChange={(e) => this.setState({ editEmail: e.target.value })}
                />
              </Typography>
              <Typography>
                <label htmlFor="phoneNumber">Edit Phone Number:</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  value={this.state.editPhoneNumber}
                  onChange={(e) =>
                    this.setState({ editPhoneNumber: e.target.value })
                  }
                />
              </Typography>
              <Typography>
                <label htmlFor="car">Edit Car Make & Model:</label>
                <input
                  name="car"
                  type="text"
                  value={this.state.editCar}
                  onChange={(e) => this.setState({ editCar: e.target.value })}
                />
              </Typography>
              <Typography>
                <label htmlFor="message">Edit Message:</label>
                <input
                  name="message"
                  type="text"
                  value={this.state.editMessage}
                  onChange={(e) =>
                    this.setState({ editMessage: e.target.value })
                  }
                />
              </Typography>
              <Button type="submit" variant="contained">Update Inquiry</Button>
            </form>
          </Box>
        </Modal>
      </>
    );
  }
}
