import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";

const EventItem = ({ title, image, startDate, endDate, organisator, city, category, id }) => {
  const start = moment(startDate).format("D MMM");
  const end = moment(endDate).format("D MMM");

  return (
    <Link to={`read/${id}`}>
      {image ? (
        <img src={image} alt="Event" />
      ) : (
        <img src="/images/no-photo-available.png" alt="Not available" />
      )}
      <h2>{title}</h2>
      <p>{start === end ? start : `${start} - ${end}`}</p>
      <p>{organisator}</p>
      <p>{city}</p>
      <p>{category}</p>
    </Link>
  );
};

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  organisator: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EventItem;
