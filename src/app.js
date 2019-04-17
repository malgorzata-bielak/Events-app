import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";
import { loginRequest, logoutRequest } from "./actions/auth";
import configureStore from "./store/configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";
import { startSetEvents } from "./actions/events";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginRequest(user.uid));
    store.dispatch(startSetEvents(user.uid)).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logoutRequest());
    renderApp();
    history.push("/");
  }
});
