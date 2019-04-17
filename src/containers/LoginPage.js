import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { startLogin } from "../actions/auth";

const LoginPage = ({ loginRequestAction }) => (
  <>
    <h1>Event App</h1>
    <button onClick={loginRequestAction}>Login with Google</button>
  </>
);

LoginPage.propTypes = {
  loginRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { loginRequestAction: startLogin },
)(LoginPage);
