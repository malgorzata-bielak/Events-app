import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import AddEventPage from "../components/AddEventPage";
import EditEventPage from "../components/EditEventPage";
import ReadEventPage from "../components/ReadEventPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/create" component={AddEventPage} />
        <Route path="/edit/:id" component={EditEventPage} />
        <Route path="/read/:id" component={ReadEventPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
