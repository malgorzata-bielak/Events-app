import React from "react";
import { connect } from "react-redux";
import EventItem from "./EventItem";

const EventsList = ({ events }) => (
  <>
    {events.map(event => (
      <EventItem key={event.id} {...event} />
    ))}
  </>
);

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(EventsList);
