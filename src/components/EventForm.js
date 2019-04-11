import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import uuid from "uuid";

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.event ? props.event.title : "",
      description: props.event ? props.event.description : "",
      organisator: props.event ? props.event.organisator : "",
      city: props.event ? props.event.city : "",
      category: props.event ? props.event.category : "",
      image: props.event ? props.event.image : "",
      id: props.event ? props.event.id : uuid(),
      createdAt: props.event ? moment(props.event.createdAt) : moment(),
      startDate: props.event ? moment(props.event.startDate) : moment(),
      startDateId: "",
      endDate: props.event ? moment(props.event.endDate) : moment(),
      endDateId: "",
      calendarFocused: null,
    };
  }

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
          <input
            placeholder="Title"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <input
            placeholder="Description"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
        </label>

        <label htmlFor="organisator">
          Organisator
          <input
            placeholder="Organisator"
            name="organisator"
            id="organisator"
            value={this.state.organisator}
            onChange={this.onOrganisatorChange}
          />
        </label>

        <select name="city" value={this.state.city} onChange={this.onCityChange}>
          <option value="">Select city</option>
          <option value="Cracow">Cracow</option>
          <option value="Wroclaw">Wroclaw</option>
          <option value="Warsaw">Warsaw</option>
          <option value="Poznan">Poznan</option>
          <option value="Gdansk">Gdansk</option>
        </select>

        <select name="category" value={this.state.category} onChange={this.onCategoryChange}>
          <option value="">Select category</option>
          <option value="Music">Music</option>
          <option value="Arts">Arts</option>
          <option value="Business">Business</option>
          <option value="Sport">Sport</option>
          <option value="Food">Food</option>
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
            files={this.state.image}
            onChange={this.onImageChange}
          />
        </label>

        <button>{!this.props.event ? "Add event" : "Save changes"}</button>
      </form>
    );
  }
}
