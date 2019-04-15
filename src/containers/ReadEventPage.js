import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import PropTypes from "prop-types";

import { removeEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";

class ReadEventPage extends React.Component {
  onEditClick = () => {
    this.props.history.push(`/edit/${this.props.event.id}`);
  };

  onRemoveClick = () => {
    this.props.removeEvent(this.props.event.id);
    this.props.history.push("/");
  };

  render() {
    const {
      image,
      title,
      startDate,
      endDate,
      organisator,
      city,
      category,
      description,
    } = this.props.event;

    const start = moment(startDate).format("D MMM");
    const end = moment(endDate).format("D MMM");

    return (
      <>
        {image ? (
          <img src={image} alt="Event" />
        ) : (
          <img src="/images/no-photo-available.png" alt="Not available" />
        )}
        <h2>{title}</h2>
        <p>{start === end ? start : `${start} - ${end}`}</p>
        <p>{organisator}</p>
        <p>{city}</p>
        <p>{category}</p>
        <p>{description}</p>
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
  event: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  removeEvent: PropTypes.func.isRequired,
  ...historyPropTypes,
};

export default connect(
  mapStateToProps,
  { removeEvent },
)(ReadEventPage);
