import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import EventBody from "./EventBody";

const EventBox = styled(Link)`
  background: white;
  border: 1px solid #dbdbdb;
  color: black;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: #eee;
  }
`;

const EventItem = event => (
  <EventBox to={`read/${event.id}`}>
    <EventBody {...event} />
  </EventBox>
);

export default EventItem;
