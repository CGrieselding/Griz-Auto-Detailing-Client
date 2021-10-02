import React, { Component } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type StateType = {
  editTitle: string;
  editDate: string;
  editReview: string;
  editImageURL: string;
};

type Review = {
  createdAt?: string;
  date?: string;
  id?: string;
  imageURL?: string;
  review?: string;
  title?: string;
  updatedAt?: string;
  userId?: string;
};

type PropsType = {
  token: string;
  updateMyActivity: Review;
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

export default class RevUpdate extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      editTitle: this.props.updateMyActivity.title!,
      editDate: this.props.updateMyActivity.date!,
      editReview: this.props.updateMyActivity.review!,
      editImageURL: this.props.updateMyActivity.imageURL!,
    };
  }

  revUpdate = (e: any) => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/rev/updateRev/${this.props.updateMyActivity.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          rev: {
            title: this.state.editTitle,
            date: this.state.editDate,
            review: this.state.editReview,
            imageURL: this.state.editImageURL,
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
              Update Your Review:
              <Button onClick={this.props.updateOff}>
                <CloseIcon />
              </Button>
            </Typography>
            <form onSubmit={this.revUpdate}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <label htmlFor="title">Edit Title:</label>
                <input
                  name="title"
                  type="text"
                  value={this.state.editTitle}
                  onChange={(e) => this.setState({ editTitle: e.target.value })}
                />
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <label htmlFor="date">Edit Date:</label>
                <input
                  name="date"
                  type="date"
                  value={this.state.editDate}
                  onChange={(e) => this.setState({ editDate: e.target.value })}
                />
              </Typography>
              <Typography>
                <label htmlFor="imageURL">Edit Image/Video URL:</label>
                <input
                  name="imageURL"
                  type="text"
                  value={this.state.editImageURL}
                  onChange={(e) =>
                    this.setState({ editImageURL: e.target.value })
                  }
                />
              </Typography>
              <Typography>
                <label htmlFor="review">Edit Review:</label>
                <input
                  name="review"
                  type="text"
                  value={this.state.editReview}
                  onChange={(e) =>
                    this.setState({ editReview: e.target.value })
                  }
                />
              </Typography>
              <Button type="submit" variant="contained">
                Update Review
              </Button>
            </form>
          </Box>
        </Modal>
      </>
    );
  }
}
