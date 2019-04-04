import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "../components/DashboardPage";
import AddEventPage from "../components/AddEventPage";
import EditEventPage from "../components/EditEventPage";
import ReadEventPage from "../components/ReadEventPage";
import Header from "../components/Header";

export const history = createHistory();

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
