import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { startLogout } from "../actions/auth";

const Header = ({ logoutRequestAction }) => (
  <Link to="/dashboard">
    <h1>Event App</h1>
    <button onClick={logoutRequestAction}>Logout</button>
  </Link>
);

Header.propTypes = {
  logoutRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { logoutRequestAction: startLogout },
)(Header);
