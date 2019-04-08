import React from "react";
import Filters from "./Filters";

const DashboardPage = props => (
  <>
    <Filters history={props.history} />
  </>
);

export default DashboardPage;
