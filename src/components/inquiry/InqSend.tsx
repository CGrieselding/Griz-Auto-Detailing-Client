import React, { Component } from "react";
import axios from "axios";

type StateType = {
  serverState: {
    submitting: boolean;
    status: any;
  };
  fullName: string;
  email: string;
  phoneNumber: string;
  car: string;
  message: string;
};

type PropsType = {
  token: string;
};

export default class InqSend extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      serverState: {
        submitting: false,
        status: null,
      },
      fullName: "",
      email: "",
      phoneNumber: "",
      car: "",
      message: "",
    };
  }

  handleServerResponse = (ok: any, msg: any, form: any) => {
    this.setState({
      serverState: {
        submitting: false,
        status: { ok, msg },
      },
    });
    if (ok) {
      form.reset();
    }
  };

  handleOnSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    this.setState({
      serverState: {
        submitting: true,
        status: null,
      },
    });
    axios({
      method: "POST",
      url: "https://formspree.io/f/myylvgqq",
      data: new FormData(form),
    })
      .then((r) => {
        this.handleServerResponse(
          true,
          "Your inquiry has been sent to Griz Auto Detailing!",
          form
        );
      })
      .catch((r) => {
        this.handleServerResponse(false, r.response.data.error, form);
      });
    fetch("http://localhost:4000/inq/sendInq", {
      method: "POST",
      body: JSON.stringify({
        inq: {
          fullName: this.state.fullName,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          car: this.state.car,
          message: this.state.message,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((sendInq) => {
        console.log(sendInq);
        this.setState({
          fullName: "",
          email: "",
          phoneNumber: "",
          car: "",
          message: "",
        });
      });
  };

  render() {
    return (
      <>
        <h1>Contact Us</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Full Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.fullName}
            onChange={(e) => this.setState({ fullName: e.target.value })}
            required
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
          <br />
          <label htmlFor="phone number">Phone Number: </label>
          <input
            id="phone number"
            type="tel"
            name="phone number"
            value={this.state.phoneNumber}
            onChange={(e) => this.setState({ phoneNumber: e.target.value })}
          />
          <br />
          <label htmlFor="car">Car Make & Model: </label>
          <input
            id="car"
            type="text"
            name="car"
            value={this.state.car}
            onChange={(e) => this.setState({ car: e.target.value })}
          />
          <br />
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
            required
          ></textarea>
          <br />
          <button type="submit" disabled={this.state.serverState.submitting}>
            Submit
          </button>
          {this.state.serverState.status && (
            <p className={!this.state.serverState.status.ok ? "errorMsg" : ""}>
              {this.state.serverState.status.msg}
            </p>
          )}
        </form>
      </>
    );
  }
}
