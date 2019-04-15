import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { login, logout } from "./actions/auth";
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
    store.dispatch(login(user.uid));
    store.dispatch(startSetEvents()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
