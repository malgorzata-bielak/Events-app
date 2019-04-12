import React from "react";
import { connect } from "react-redux";
import EventItem from "./EventItem";
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

export default connect(mapStateToProps)(EventsList);
