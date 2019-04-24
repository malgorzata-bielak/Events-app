import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import {
  searchByTitle,
  searchByCity,
  searchByCategory,
  sortByNewest,
  sortByClosest,
} from "../actions/filters";
import { historyPropTypes } from "../common/models";

const BarBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto 40px;
  max-width: 80vw;
`;

const textField = css`
  border: 1px solid #dbdbdb;
  font-family: "Open Sans";
  font-size: 16px;
  height: 45px;
  margin-right: 25px;
  outline: none;
`;

const Input = styled.input`
  ${textField}
  padding-left: 10px;
  width: 300px;
`;

const Select = styled.select`
  ${textField}
  padding: 0 5px;
`;

export const Button = styled.button`
  background-color: #c03aba;
  border: 1px solid #c03aba;
  color: white;
  font-family: "Open Sans";
  font-size: 16px;
  height: 45px;
  outline: none;
  padding: 0 8px;

  &:hover {
    cursor: pointer;
    background-color: #a1309c;
    border: 1px solid #a1309c;
  }
`;

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
        <BarBox>
          <Input
            type="text"
            autoComplete="off"
            id="search"
            autoFocus
            placeholder="Search event..."
            onChange={this.onTitleFilterChange}
          />
          <Select onChange={this.onCityFilterChange}>
            <option value="">Select city</option>
            <option value="cracow">Cracow</option>
            <option value="wroclaw">Wroclaw</option>
            <option value="warsaw">Warsaw</option>
            <option value="poznan">Poznan</option>
            <option value="gdansk">Gdansk</option>
          </Select>
          <Select onChange={this.onCategoryFilterChange}>
            <option value="">Select category</option>
            <option value="music">Music</option>
            <option value="arts">Arts</option>
            <option value="business">Business</option>
            <option value="sport">Sport</option>
            <option value="food">Food</option>
          </Select>
          <Select onChange={this.onSortByChange}>
            <option value="">Sort by:</option>
            <option value="newest">Newest</option>
            <option value="closest">Closest</option>
          </Select>
          <Button onClick={this.onCreateClick}>Create event</Button>
        </BarBox>
      </>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  filters,
});

Filters.propTypes = {
  ...historyPropTypes,
  searchByTitle: PropTypes.func.isRequired,
  searchByCity: PropTypes.func.isRequired,
  searchByCategory: PropTypes.func.isRequired,
  sortByNewest: PropTypes.func.isRequired,
  sortByClosest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { searchByTitle, searchByCity, searchByCategory, sortByNewest, sortByClosest },
)(Filters);
