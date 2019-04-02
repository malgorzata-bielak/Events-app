import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./components/DashboardPage";
import Filters from "./components/Filters";
import AddEventPage from "./components/AddEventPage";
import EditEventPage from "./components/EditEventPage";
import Header from "./components/Header";
import ReadEventPage from "./components/ReadEventPage";
import EventItem from "./components/EventItem";
import configureStore from "./store/configureStore";
import { addEvent, editEvent, removeEvent } from "./actions/events";

const store = configureStore();

store.dispatch(addEvent({ title: "new event", date: 123456, id: "myid" }));
console.log(store.getState());
store.dispatch(editEvent("myid", { title: "changed title" }));
console.log(store.getState());
store.dispatch(removeEvent({ id: "myid" }));
console.log(store.getState());

const jsx = (
  <div>
    <Header />
    <DashboardPage />
    <Filters />
    <AddEventPage />
    <EditEventPage />
    <ReadEventPage />
    <EventItem />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
