import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventForm from "./EventForm";
import { addEvent } from "../actions/events";

export class AddEventPage extends React.Component {
  onSubmit = event => {
    this.props.addEvent(event);
    this.props.history.push("/");
  };

  render() {
    return <EventForm onSubmit={this.onSubmit} />;
  }
}

AddEventPage.propTypes = {
  addEvent: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(
  undefined,
  { addEvent },
)(AddEventPage);
