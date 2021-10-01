import React, { Component } from "react";
import {Modal, Box, Typography} from "@mui/material";

type StateType = {
  editTitle: string;
  editDate: string;
  editReview: string;
  editImageURL: string;
  visible: boolean;
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
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
      visible: false,
    };
  }

  revUpdate = (e: any, rev: any) => {
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

  closeModal = () => {
    this.setState({
        visible : false
    });
}

  render() {
    return (
      <>
        <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => this.closeModal()}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </>
    );
  }
}
