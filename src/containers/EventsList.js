import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import EventItem from "../components/EventItem";
import visibleEvents from "../selectors/visibleEvents";
import { eventPropTypes } from "../common/models";

const NoEventsContainer = styled.div`
  background: #d3f3f8;
  display: flex;
  justify-content: center;
  margin: 40px auto 0;
  padding: 15px 0;
  width: 56vw;

  p {
    font-style: oblique;
  }
`;

const EventsContainer = styled.div`
  display: grid;
  grid-auto-rows: 427.6px;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: 381.6px 381.6px 381.6px;
  margin: 0 auto 40px;
  width: 80vw;
`;

const EventsList = ({ events }) => (
  <>
    {events.length === 0 ? (
      <NoEventsContainer>
        <p>No events</p>
      </NoEventsContainer>
    ) : (
      <EventsContainer>
        {events.map(event => (
          <EventItem key={event.id} {...event} />
        ))}
      </EventsContainer>
    )}
  </>
);

const mapStateToProps = state => ({
  events: visibleEvents(state.events, state.filters),
});

EventsList.propTypes = {
  events: PropTypes.arrayOf(eventPropTypes.event).isRequired,
};

export default connect(mapStateToProps)(EventsList);
