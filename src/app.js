import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { startSetEvents } from "./actions/events";

const store = configureStore();

store.dispatch(startSetEvents());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
