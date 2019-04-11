import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const EventItem = ({ title, image, startDate, endDate, organisator, city, category, id }) => {
  const start = moment(startDate).format("D MMM");
  const end = moment(endDate).format("D MMM");

  return (
    <Link to={`edit/${id}`}>
      <div>{image}</div>
      <h1>{title}</h1>
      <p>{startDate === endDate ? start : `${start} - ${end}`}</p>
      <p>{organisator}</p>
      <p>{city}</p>
      <p>{category}</p>
    </Link>
  );
};

export default EventItem;
