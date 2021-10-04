import React, { Component } from "react";
import { TextField, Button, Box } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type StateType = {
  email: string;
  password: string;
  isAdmin: boolean;
};

type PropsType = {
  updateToken: (input: string) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "6px solid #7CFF01",
  boxShadow: 24,
  p: 4,
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
      <Box sx={style}>
        <h1>Login</h1>
        <AccountBoxIcon style={{fontSize: "55px", marginBottom: "15px"}}/>
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
        </Box>
      </>
    );
  }
}
