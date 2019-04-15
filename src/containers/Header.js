import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { startLogout } from "../actions/auth";

const Header = ({ startLogout: logout }) => (
  <Link to="/dashboard">
    <h1>Event App</h1>
    <button onClick={logout}>Logout</button>
  </Link>
);

Header.propTypes = {
  startLogout: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { startLogout },
)(Header);
