import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import uuid from "uuid";

export default class EventForm extends React.Component {
  state = {
    title: "",
    description: "",
    organisator: "",
    city: "",
    category: "",
    image: false,
    id: uuid(),
    createdAt: moment(),
    startDate: moment(),
    startDateId: "",
    endDate: moment(),
    endDateId: "",
    calendarFocused: null,
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onTitleChange = e => {
    this.onChange(e);
  };

  onDescriptionChange = e => {
    this.onChange(e);
  };

  onOrganisatorChange = e => {
    this.onChange(e);
  };

  onCityChange = e => {
    this.onChange(e);
  };

  onCategoryChange = e => {
    this.onChange(e);
  };

  onImageChange = e => {
    this.onChange(e);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState(() => ({ startDate, endDate }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description,
      organisator: this.state.organisator,
      city: this.state.city,
      category: this.state.category,
      startDate: this.state.startDate.valueOf(),
      endDate: this.state.endDate.valueOf(),
      image: this.state.image,
      createdAt: this.state.createdAt.valueOf(),
      id: this.state.id,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">
          Title
          <input placeholder="Title" name="title" id="title" onChange={this.onTitleChange} />
        </label>

        <label htmlFor="description">
          Description
          <input
            placeholder="Description"
            name="description"
            id="description"
            onChange={this.onDescriptionChange}
          />
        </label>

        <label htmlFor="organisator">
          Organisator
          <input
            placeholder="Organisator"
            name="organisator"
            id="organisator"
            onChange={this.onOrganisatorChange}
          />
        </label>

        <select name="city" value={this.state.city} onChange={this.onCityChange}>
          <option value="">Select city</option>
          <option value="cracow">Cracow</option>
          <option value="wroclaw">Wroclaw</option>
          <option value="warsaw">Warsaw</option>
          <option value="poznan">Poznan</option>
          <option value="gdansk">Gdansk</option>
        </select>

        <select name="category" value={this.state.category} onChange={this.onCategoryChange}>
          <option value="">Select category</option>
          <option value="music">Music</option>
          <option value="arts">Arts</option>
          <option value="business">Business</option>
          <option value="sport">Sport</option>
          <option value="food">Food</option>
        </select>

        <DateRangePicker
          startDate={this.state.startDate}
          startDateId={this.state.startDateId}
          endDate={this.state.endDate}
          endDateId={this.state.endDateId}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          minimumNights={0}
        />

        <label htmlFor="image">
          Image
          <input
            type="file"
            name="image"
            id="date"
            accept="image/*"
            onChange={this.onImageChange}
          />
        </label>

        <button>{!this.props.event ? "Add event" : "Save changes"}</button>
      </form>
    );
  }
}
