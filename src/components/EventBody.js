import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const EventBody = ({ imageUrl, title, startDate, endDate, organisator, city, category }) => {
  const start = moment(startDate).format("D MMM");
  const end = moment(endDate).format("D MMM");

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt={title || "Event"} />
      ) : (
        <img src="/images/no-photo-available.png" alt="Not available" />
      )}
      <h2>{title}</h2>
      <p>{start === end ? start : `${start} - ${end}`}</p>
      <p>{organisator}</p>
      <p>{city}</p>
      <p>{category}</p>
    </>
  );
};

EventBody.propTypes = {
  title: PropTypes.string.isRequired,
  organisator: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EventBody;
