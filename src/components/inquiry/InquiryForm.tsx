import React, { Component } from "react";
import axios from "axios";

type StateType = {
    serverState: {
        submitting: boolean,
        status: any
    }
}

export default class InquiryForm extends Component <{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      serverState: {
        submitting: false,
        status: null,
      },
    };
  }

  handleServerResponse = (ok: any, msg: any, form: any) => {
    this.setState({serverState: {
        submitting: false,
        status: {ok, msg}
    }})
    if (ok) {
        form.reset()
    }
  }

  handleOnSubmit = (e: any) => {
      e.preventDefault();
      const form = e.target;
      this.setState({serverState: {
          submitting: true,
          status: null
      }})
      axios({
          method: "POST",
          url: "https://formspree.io/f/myylvgqq",
          data: new FormData(form)
      })
      .then(r => {
          this.handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
          this.handleServerResponse(false, r.response.data.error, form)
      })
  }

  render() {
    return (
    <>
    <h1>Contact Us</h1>
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
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
    )
  }
}
