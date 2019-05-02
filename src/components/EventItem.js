import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import EventBody from "./EventBody";

const EventItemBox = styled(Link)`
  background: white;
  border: 1px solid #dbdbdb;
  color: black;
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: #eee;
  }
`;

const EventItem = event => (
  <EventItemBox to={`read/${event.id}`}>
    <EventBody {...event} />
  </EventItemBox>
);

export default EventItem;
