import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
// import Filters from "./components/Filters";
// import EventItem from "./components/EventItem";
import { addEvent, editEvent, removeEvent } from "./actions/events";

const store = configureStore();

store.dispatch(addEvent({ title: "new event", date: 123456, id: "myid" }));
console.log(store.getState());
store.dispatch(editEvent("myid", { title: "changed title" }));
console.log(store.getState());
store.dispatch(removeEvent({ id: "myid" }));
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
