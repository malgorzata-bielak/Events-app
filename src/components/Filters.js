import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  searchByTitle,
  searchByCity,
  searchByCategory,
  sortByNewest,
  sortByClosest,
} from "../actions/filters";

class Filters extends React.Component {
  onTitleFilterChange = e => {
    this.props.searchByTitle(e.target.value);
  };

  onCityFilterChange = e => {
    this.props.searchByCity(e.target.value);
  };

  onCategoryFilterChange = e => {
    this.props.searchByCategory(e.target.value);
  };

  onSortByChange = e => {
    const sortBy = e.target.value;
    if (sortBy === "newest") {
      this.props.sortByNewest(sortBy);
    }

    if (sortBy === "closest") {
      this.props.sortByClosest(sortBy);
    }
  };

  onCreateClick = () => {
    this.props.history.push("/create");
  };

  render() {
    return (
      <>
        <label htmlFor="search">
          Search
          <input
            id="search"
            autoFocus
            placeholder="Search event"
            onChange={this.onTitleFilterChange}
          />
        </label>
        <select onChange={this.onCityFilterChange}>
          <option value="">Select city</option>
          <option value="cracow">Cracow</option>
          <option value="wroclaw">Wroclaw</option>
          <option value="warsaw">Warsaw</option>
          <option value="poznan">Poznan</option>
          <option value="gdansk">Gdansk</option>
        </select>
        <select onChange={this.onCategoryFilterChange}>
          <option value="">Select category</option>
          <option value="music">Music</option>
          <option value="arts">Arts</option>
          <option value="business">Business</option>
          <option value="sport">Sport</option>
          <option value="food">Food</option>
        </select>
        <select onChange={this.onSortByChange}>
          <option value="">Sort by:</option>
          <option value="newest">Newest</option>
          <option value="closest">Closest</option>
        </select>
        <button onClick={this.onCreateClick}>Create event</button>
      </>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  filters,
});

Filters.propTypes = {
  searchByTitle: PropTypes.func.isRequired,
  searchByCity: PropTypes.func.isRequired,
  searchByCategory: PropTypes.func.isRequired,
  sortByNewest: PropTypes.func.isRequired,
  sortByClosest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  { searchByTitle, searchByCity, searchByCategory, sortByNewest, sortByClosest },
)(Filters);
