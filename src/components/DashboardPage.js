import React from "react";
import PropTypes from "prop-types";

import Filters from "../containers/Filters";
import EventsList from "../containers/EventsList";

const DashboardPage = props => (
  <>
    <Filters history={props.history} />
    <EventsList />
  </>
);

DashboardPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default DashboardPage;
