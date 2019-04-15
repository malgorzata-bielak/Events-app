import React from "react";
import { Link } from "react-router-dom";

import EventBody from "./EventBody";

const EventItem = event => (
  <Link to={`read/${event.id}`}>
    <EventBody {...event} />
  </Link>
);

export default EventItem;
