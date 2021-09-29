import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

type StateType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

type PropsType = {
  updateToken: (input: string) => void;
};

export default class CreateAcct extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isAdmin: false,
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
          isAdmin: this.state.isAdmin,
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
      <div>
        <h1>Griz Auto Detailing</h1>
        <h1>Create Account</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <TextField
              onChange={(e) => this.setState({ firstName: e.target.value })}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
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
            >
              Password
            </TextField>
          </div>
          <Button type="submit" variant="outlined">
            Create Account
          </Button>
        </form>
      </div>
    );
  }
}
