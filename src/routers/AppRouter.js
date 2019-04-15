import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import LoginPage from "../containers/LoginPage";
import DashboardPage from "../components/DashboardPage";
import AddEventPage from "../containers/AddEventPage";
import EditEventPage from "../containers/EditEventPage";
import ReadEventPage from "../containers/ReadEventPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddEventPage} />
        <PrivateRoute path="/edit/:id" component={EditEventPage} />
        <PrivateRoute path="/read/:id" component={ReadEventPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
