import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import EventItem from "../components/EventItem";
import visibleEvents from "../selectors/visibleEvents";
import { eventPropTypes } from "../common/models";

const NoEventsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
`;

const P = styled.p`
  color: white;
  font-style: oblique;
  margin: 0px;
  text-align: center;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  max-width: 80vw;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: auto;
  width: 100%;

  @media (min-width: 478px) {
    grid-auto-rows: 430px;
    width: auto;
  }

  @media (min-width: 880px) {
    grid-template-columns: 381.6px 381.6px;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 381.6px 381.6px 381.6px;
  }
`;

const EventsList = ({ events }) => (
  <>
    {events.length === 0 ? (
      <NoEventsContainer>
        <P>No events to show</P>
      </NoEventsContainer>
    ) : (
      <EventsContainer>
        <EventsGrid>
          {events.map(event => (
            <EventItem key={event.id} {...event} />
          ))}
        </EventsGrid>
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
