import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (isAuth ? <Redirect to="/dashboard" /> : <Component {...props} />)}
  />
);
const mapStateToProps = state => ({
  isAuth: !!state.auth.uid,
});

PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PublicRoute);
