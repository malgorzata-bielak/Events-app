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
      <div>
        addpage
        <EventForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(AddEventPage);
