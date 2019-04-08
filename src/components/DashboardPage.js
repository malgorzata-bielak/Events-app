import React from "react";
import Filters from "./Filters";
import EventsList from "./EventsList";

const DashboardPage = props => (
  <>
    <Filters history={props.history} />
    <EventsList />
  </>
);

export default DashboardPage;
