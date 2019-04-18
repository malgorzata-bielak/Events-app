import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startLogin } from "../actions/auth";

const Container = styled.div`
  align-items: center;
  background: url("/images/event-photo.jpg");
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LoginBox = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
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

const Button = styled.button`
  background: #2273cf;
  border: none;
  color: white;
  padding: 8px 8px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const LoginPage = ({ loginRequestAction }) => (
  <Container>
    <LoginBox>
      <H1>Event App</H1>
      <Button onClick={loginRequestAction}>Login with Google</Button>
    </LoginBox>
  </Container>
);

LoginPage.propTypes = {
  loginRequestAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  { loginRequestAction: startLogin },
)(LoginPage);
