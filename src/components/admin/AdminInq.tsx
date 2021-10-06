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

type StateType = {
  inquiries: Array<string>;
};

type PropsType = {
  token: string;
};

export default class AdminInq extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      inquiries: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/inq/allInq", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((showInq) => {
        this.setState({ inquiries: showInq });
        console.log(showInq);
      });
  };

  render() {
    return (
      <>
        <h1 className="allInqTitle">All Inquiries:</h1>
        <TableContainer style={{ width: "100%" }}>
          <Table
            sx={{
              width: 900,
              margin: "auto",
              border: "2px solid white",
              marginBottom: "60px",
            }}
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" className="inqTableHeader">
                  First & Last Name
                </TableCell>
                <TableCell align="center" className="inqTableHeader">
                  Email
                </TableCell>
                <TableCell align="center" className="inqTableHeader">
                  Phone Number
                </TableCell>
                <TableCell align="center" className="inqTableHeader">
                  Car Make & Model
                </TableCell>
                <TableCell align="center" className="inqTableHeader">
                  Message
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.inquiries instanceof Array
                ? this.state.inquiries.map((inquiry: any) => (
                    <>
                      <TableRow>
                        <TableCell align="center" className="tableInfo">
                          {inquiry.fullName}
                        </TableCell>
                        <TableCell align="center" className="tableInfo">
                          {inquiry.email}
                        </TableCell>
                        <TableCell align="center" className="tableInfo">
                          {inquiry.phoneNumber}
                        </TableCell>
                        <TableCell align="center" className="tableInfo">
                          {inquiry.car}
                        </TableCell>
                        <TableCell align="center" className="tableInfo">
                          {inquiry.message}
                        </TableCell>
                      </TableRow>
                    </>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}
