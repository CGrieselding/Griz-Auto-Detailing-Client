import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

type StateType = {
  email: string;
  password: string;
  isAdmin: boolean;
};

type PropsType = {
  updateToken: (input: string) => void;
};

export default class Login extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAdmin: false
    };
  }

  handleSubmit (e: any) {
    e.preventDefault();
    fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: {
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
      <>
      <h1>Griz Auto Detailing</h1>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
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
              value={this.state.password}
            >
              Password
            </TextField>
          </div>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </>
    );
  }
}
