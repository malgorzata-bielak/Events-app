import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startLogout } from "../actions/auth";

const HeaderBar = styled.div`
  background: url("/images/event-photo-bar.jpg");
  background-position: center center;
  background-size: cover;
  height: 120px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90vw;
  margin: 0 auto;
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
  border-radius: 8px;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  padding: 6px 8px;
  text-decoration: none;
  height: 40px;
  width: 80;

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ logoutRequestAction }) => (
  <HeaderBar>
    <Container>
      <StyledLink to="/dashboard">
        <H1>Event App</H1>
      </StyledLink>
      <Button onClick={logoutRequestAction}>logout</Button>
    </Container>
  </HeaderBar>
);

Header.propTypes = {
  logoutRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { logoutRequestAction: startLogout },
)(Header);
