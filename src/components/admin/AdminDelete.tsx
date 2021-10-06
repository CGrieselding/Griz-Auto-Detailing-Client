import React, { Component } from "react";
import {
  Button,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type StateType = {
  users: Array<string>;
};

type PropsType = {
  token: string;
};

export default class AdminDelete extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/user/viewUser", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((allUsers) => {
        this.setState({ users: allUsers });
        console.log(allUsers);
      });
  };

  deleteUser = (user: any) => {
    fetch(`http://localhost:4000/user/deleteUser/${user.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.componentDidMount());
  };

  userMapper = () => {
    return (
      <TableContainer style={{ width: "100%" }}>
        <Table
          sx={{ width: 900, margin: "auto", border: "2px solid white" }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" className="userTableHeader">
                First Name
              </TableCell>
              <TableCell align="center" className="userTableHeader">
                Last Name
              </TableCell>
              <TableCell align="center" className="userTableHeader">
                Email
              </TableCell>
              <TableCell align="center" className="userTableHeader">
                Delete User?
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map((user: any) => (
              <TableRow>
                <TableCell align="center" className="tableInfo">
                  {user.firstName}
                </TableCell>
                <TableCell align="center" className="tableInfo">
                  {user.lastName}
                </TableCell>
                <TableCell align="center" className="tableInfo">
                  {user.email}
                </TableCell>
                <TableCell>
                  <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      this.deleteUser(user);
                    }}
                    variant="outlined"
                    className="userTableButton"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  render() {
    return (
      <>
        <h1 className="adDeleteTitle">All Users:</h1>
        {this.state.users.length > 0
          ? this.userMapper()
          : "Oh no, couldn't find any users"}
      </>
    );
  }
}
