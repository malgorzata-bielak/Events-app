import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const EventBox = styled.div`
  background: white;
  margin: 30px;
  width: 320px;
`;

const Img = styled.img`
  height: 200px;
  margin: 0 0 10px 0;
  width: 100%;
`;

const DetailsBox = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
`;

const Date = styled.p`
  color: #2273cf;
  font-weight: bold;
  flex-shrink: 0;
  margin: 6px 0 0;
  width: 70px;
`;

const TitleBox = styled.div`
  flex-shrink: 2;
  padding-left: 20px;
  width: 210px;

  * {
    margin: 0 0 5px;
    width: 100%;
  }

  p:first-of-type {
    max-height: 43.2px;
    overflow: hidden;
    word-break: break-all;
  }

  p:last-of-type {
    margin: 0;
  }
`;

const H2 = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EventBody = ({ imageUrl, title, startDate, endDate, organisator, city, category }) => {
  const start = moment(startDate).format("D MMM");
  const end = moment(endDate).format("D MMM");

  return (
    <EventBox>
      {imageUrl ? (
        <Img src={imageUrl} alt={title || "Event"} />
      ) : (
        <Img src="/images/no-photo-available.png" alt="Not available" />
      )}
      <DetailsBox>
        <Date>{start === end ? start : `${start} - ${end}`}</Date>
        <TitleBox>
          <H2>{title}</H2>
          <p>{organisator}</p>
          <p>{city}</p>
          <p>{category}</p>
        </TitleBox>
      </DetailsBox>
    </EventBox>
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
