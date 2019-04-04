import React from "react";
import Filters from "./Filters";

const DashboardPage = props => (
  <div>
    dashboard
    <Filters history={props.history} />
  </div>
);

export default DashboardPage;
