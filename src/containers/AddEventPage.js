import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EventForm from "../components/EventForm";
import { startAddEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";

export class AddEventPage extends React.Component {
  onSubmit = event => {
    this.props.startAddEvent(event);
    this.props.history.push("/");
  };

  render() {
    return <EventForm onSubmit={this.onSubmit} />;
  }
}

AddEventPage.propTypes = {
  ...historyPropTypes,
  startAddEvent: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { startAddEvent },
)(AddEventPage);
