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
          className="revFormField"
        >
          <Box sx={style} className="revModal">
            <Typography variant="h4" component="h2" className="modalTitle">
              Edit Your Review
              <Button onClick={this.props.updateOff}>
                <CloseIcon style={{ color: "#01FFF4" }} />
              </Button>
            </Typography>
            <hr />
            <form onSubmit={this.revUpdate}>
              <Typography sx={{ mt: 2 }}>
                <label htmlFor="title" className="revUpdateLabel">
                  Edit Title:
                </label>
                <input
                  name="title"
                  type="text"
                  value={this.state.editTitle}
                  onChange={(e) => this.setState({ editTitle: e.target.value })}
                  className="revUpdateInput"
                />
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <label htmlFor="date" className="revUpdateLabel">
                  Edit Date:
                </label>
                <input
                  name="date"
                  type="date"
                  value={this.state.editDate}
                  onChange={(e) => this.setState({ editDate: e.target.value })}
                  className="revUpdateInput"
                  style={{ marginBottom: "15px" }}
                />
              </Typography>
              <Typography>
                <label htmlFor="imageURL" className="revUpdateLabel">
                  Edit Image/Video URL:
                </label>
                <input
                  name="imageURL"
                  type="url"
                  value={this.state.editImageURL}
                  onChange={(e) =>
                    this.setState({ editImageURL: e.target.value })
                  }
                  className="revUpdateInput"
                  style={{ marginBottom: "15px" }}
                />
              </Typography>
              <Typography>
                <label htmlFor="review" className="revUpdateLabel">
                  Edit Review:
                </label>
                <textarea
                  name="review"
                  rows={6}
                  value={this.state.editReview}
                  onChange={(e) =>
                    this.setState({ editReview: e.target.value })
                  }
                  className="revUpdateTextarea"
                />
              </Typography>
              <Button
                type="submit"
                variant="contained"
                className="revUpdateButton"
              >
                Update Review
              </Button>
            </form>
          </Box>
        </Modal>
      </>
    );
  }
}
