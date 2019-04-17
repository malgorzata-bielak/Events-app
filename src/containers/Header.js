import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startLogout } from "../actions/auth";

const HeaderBar = styled.div`
  align-items: flex-start;
  background: url("/images/event-photo-bar.jpg");
  background-position: center center;
  background-size: cover;
  display: flex;
  height: 130px;
  justify-content: space-between;
  padding: 20px 20px 0;
`;

const StyledLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Permanent+Marker");

  color: white;
  font-family: "Permanent Marker", Arial, sans-serif, cursive;
  font-size: 28px;
  text-decoration: none;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: 3px solid white;
  border-radius: 5px;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  margin-top: 10px;
  padding: 8px 10px;
  text-decoration: none;
`;

const Header = ({ logoutRequestAction }) => (
  <HeaderBar>
    <StyledLink to="/dashboard">
      <H1>Event App</H1>
    </StyledLink>
    <Button onClick={logoutRequestAction}>logout</Button>
  </HeaderBar>
);

Header.propTypes = {
  logoutRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { logoutRequestAction: startLogout },
)(Header);
