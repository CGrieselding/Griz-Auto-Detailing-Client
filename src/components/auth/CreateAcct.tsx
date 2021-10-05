import React, { Component } from "react";
import { TextField, Button, Box } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

type StateType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type PropsType = {
  updateToken: (input: string) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "57%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "6px solid #ea4033",
  boxShadow: 24,
  p: 4,
};

export default class CreateAcct extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();
    fetch("http://localhost:4000/user/createAcct", {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.props.updateToken(data.sessionToken);
      });
  }

  render() {
    return (
      <>
        <Box sx={style}>
          <h1 className="createAcctTitle">Create Account</h1>
          <AccountBoxIcon
            style={{ fontSize: "55px", marginBottom: "15px", color: "#ea4033" }}
          />
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <TextField
                onChange={(e) => this.setState({ firstName: e.target.value })}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                className="createAcctInput"
                required
              >
                First Name
              </TextField>
            </div>
            <div>
              <TextField
                onChange={(e) => this.setState({ lastName: e.target.value })}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="createAcctInput"
                required
              >
                Last Name
              </TextField>
            </div>
            <div>
              <TextField
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => this.setState({ email: e.target.value })}
                className="createAcctInput"
                required
              >
                E-mail
              </TextField>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                inputProps={{
                  minLength: 5,
                }}
                onChange={(e) => this.setState({ password: e.target.value })}
                className="createAcctInput"
                required
              >
                Password
              </TextField>
            </div>
            <Button
              type="submit"
              variant="contained"
              className="createAcctButton2"
            >
              Create Account
            </Button>
          </form>
        </Box>
      </>
    );
  }
}
