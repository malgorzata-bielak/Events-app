import React from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import EventsList from "./EventsList";

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
