import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./components/DashboardPage";
import Filters from "./components/Filters";
import AddEventPage from "./components/AddEventPage";
import EditEventPage from "./components/EditEventPage";
import Header from "./components/Header";
import ReadEventPage from "./components/ReadEventPage";
import EventItem from "./components/EventItem";

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
