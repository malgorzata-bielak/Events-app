import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventForm from "./EventForm";
import { editEvent, removeEvent } from "../actions/events";

class EditEventPage extends React.Component {
  onSubmit = event => {
    this.props.editEvent(this.props.event.id, event);
    this.props.history.push("/");
  };

  onRemoveClick = () => {
    this.props.removeEvent(this.props.event.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <EventForm event={this.props.event} onSubmit={this.onSubmit} />
        <button onClick={this.onRemoveClick}>Remove event</button>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  event: state.events.find(event => event.id === props.match.params.id),
});

EditEventPage.propTypes = {
  editEvent: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  removeEvent: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  { editEvent, removeEvent },
)(EditEventPage);
