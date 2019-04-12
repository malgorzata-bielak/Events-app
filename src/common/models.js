import PropTypes from "prop-types";

export const historyPropTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export const eventPropTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    organisator: PropTypes.string,
    city: PropTypes.string,
    category: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
    image: PropTypes.string,
    createdAt: PropTypes.number,
    id: PropTypes.string,
  }),
};
