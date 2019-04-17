import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EventForm from "../components/EventForm";
import { startAddEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";

export class AddEventPage extends React.Component {
  onSubmit = event => {
    this.props.startAddEvent(event, this.props.uid);
    this.props.history.push("/dashboard");
  };

  render() {
    return <EventForm uid={this.props.uid} onSubmit={this.onSubmit} />;
  }
}

AddEventPage.propTypes = {
  ...historyPropTypes,
  startAddEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  uid: state.auth.uid,
});

export default connect(
  mapStateToProps,
  { startAddEvent },
)(AddEventPage);
