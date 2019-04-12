import React from "react";
import { historyPropTypes } from "../common/models";

import Filters from "../containers/Filters";
import EventsList from "../containers/EventsList";

const DashboardPage = props => (
  <>
    <Filters history={props.history} />
    <EventsList />
  </>
);

DashboardPage.propTypes = {
  ...historyPropTypes,
};

export default DashboardPage;
