import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "../components/Header";
import DashboardPage from "../components/DashboardPage";
import AddEventPage from "../containers/AddEventPage";
import EditEventPage from "../containers/EditEventPage";
import ReadEventPage from "../containers/ReadEventPage";

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
