import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startLogout } from "../actions/auth";

const HeaderBackground = styled.div`
  background: url("/images/event2-photo.jpg");
  background-position: center center;
  background-size: cover;
  height: 130px;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 80vw;
`;

const StyledLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Permanent+Marker");

  color: white;
  font-family: "Permanent Marker", Arial, sans-serif, cursive;
  font-size: 30px;
  text-decoration: none;
`;

const H1 = styled.h1`
  margin: 0;
`;

const LogoutButton = styled.button`
  background-color: #074073;
  border: 3px solid white;
  border-radius: 8px;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin-top: 25px;
  outline: none;
  padding: 6px 8px;
  text-decoration: none;
  width: 80;

  &:hover {
    border-color: #c03aba;
    color: #c03aba;
    cursor: pointer;
  }
`;

const Header = ({ logoutRequestAction }) => (
  <HeaderBackground>
    <HeaderContainer>
      <StyledLink to="/dashboard">
        <H1>Event App</H1>
      </StyledLink>
      <LogoutButton onClick={logoutRequestAction}>logout</LogoutButton>
    </HeaderContainer>
  </HeaderBackground>
);

Header.propTypes = {
  logoutRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { logoutRequestAction: startLogout },
)(Header);
