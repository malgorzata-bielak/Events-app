import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EventItem from "../components/EventItem";
import visibleEvents from "../selectors/visibleEvents";

const EventsList = ({ events }) => (
  <>
    {events.length === 0 ? (
      <p>No events</p>
    ) : (
      events.map(event => <EventItem key={event.id} {...event} />)
    )}
  </>
);

const mapStateToProps = state => ({
  events: visibleEvents(state.events, state.filters),
});

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(EventsList);
