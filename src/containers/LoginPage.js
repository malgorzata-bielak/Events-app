import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startLogin } from "../actions/auth";

const LoginContainer = styled.div`
  align-items: center;
  background: url("/images/event2-photo.jpg");
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LoginBox = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 285px;
  justify-content: center;
  width: 260px;
`;

const H1 = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Permanent+Marker");

  color: #224067;
  font-family: "Permanent Marker", Arial, sans-serif, cursive;
  font-size: 55px;
  line-height: 1.2;
  margin: 0 0 45px;
  overflow-wrap: break-word;
  text-align: center;
`;

const LoginButton = styled.button`
  background: #2273cf;
  border: none;
  color: white;
  font-family: "Open Sans";
  font-size: 16px;
  outline: none;
  padding: 8px 8px;
  text-decoration: none;

  &:hover {
    background-color: #23c3e3;
    border: 1px solid #23c3e3;
    cursor: pointer;
  }
`;

const LoginPage = ({ loginRequestAction }) => (
  <LoginContainer>
    <LoginBox>
      <H1>Event App</H1>
      <LoginButton onClick={loginRequestAction}>Login with Google</LoginButton>
    </LoginBox>
  </LoginContainer>
);

LoginPage.propTypes = {
  loginRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { loginRequestAction: startLogin },
)(LoginPage);
