import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashboardPage from "../components/DashboardPage";
import AddEventPage from "../components/AddEventPage";
import EditEventPage from "../components/EditEventPage";
import ReadEventPage from "../components/ReadEventPage";
import Header from "../components/Header";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/create" component={AddEventPage} />
        <Route path="/edit/:id" component={EditEventPage} />
        <Route path="/read/:id" component={ReadEventPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
