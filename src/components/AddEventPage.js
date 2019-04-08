import React from "react";
import { connect } from "react-redux";

import EventForm from "./EventForm";
import { addEvent } from "../actions/events";

export class AddEventPage extends React.Component {
  onSubmit = event => {
    this.props.addEvent(event);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <EventForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(
  undefined,
  { addEvent },
)(AddEventPage);
