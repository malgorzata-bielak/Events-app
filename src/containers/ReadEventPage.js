import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";
import EventBody from "../components/EventBody";

class ReadEventPage extends React.Component {
  onEditClick = () => {
    this.props.history.push(`/edit/${this.props.event.id}`);
  };

  onRemoveClick = () => {
    this.props.removeEvent(this.props.event.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <EventBody {...this.props.event} />
        <p>{this.props.event.description}</p>
        <button onClick={this.onEditClick}>Edit event</button>
        <button onClick={this.onRemoveClick}>Remove event</button>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  event: state.events.find(event => event.id === props.match.params.id),
});

ReadEventPage.propTypes = {
  ...historyPropTypes,
  event: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { removeEvent },
)(ReadEventPage);
