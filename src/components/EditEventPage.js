import React from "react";
import { connect } from "react-redux";
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

export default connect(
  mapStateToProps,
  { editEvent, removeEvent },
)(EditEventPage);
