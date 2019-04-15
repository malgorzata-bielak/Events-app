import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import EventForm from "../components/EventForm";
import { startEditEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";

class EditEventPage extends React.Component {
  onSubmit = event => {
    this.props.startEditEvent(this.props.event.id, event);
    this.props.history.push("/");
  };

  render() {
    return this.props.event ? (
      <EventForm event={this.props.event} onSubmit={this.onSubmit} />
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = (state, props) => ({
  event: state.events.find(event => event.id === props.match.params.id),
});

EditEventPage.propTypes = {
  ...historyPropTypes,
  startEditEvent: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  { startEditEvent },
)(EditEventPage);
