import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin: login }) => (
  <div>
    <h1>Event App</h1>
    <button onClick={login}>Login with Google</button>
  </div>
);

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { startLogin },
)(LoginPage);
