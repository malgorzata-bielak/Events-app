import React from "react";
import { connect } from "react-redux";
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
          <option value="Cracow">Cracow</option>
          <option value="Wroclaw">Wroclaw</option>
          <option value="Warsaw">Warsaw</option>
          <option value="Poznan">Poznan</option>
          <option value="Gdansk">Gdansk</option>
        </select>
        <select onChange={this.onCategoryFilterChange}>
          <option value="">Select category</option>
          <option value="Music">Music</option>
          <option value="Arts">Arts</option>
          <option value="Business">Business</option>
          <option value="Sport">Sport</option>
          <option value="Food">Food</option>
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

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(
  mapStateToProps,
  { searchByTitle, searchByCity, searchByCategory, sortByNewest, sortByClosest },
)(Filters);
