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
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onOrganisatorChange = e => {
    const organisator = e.target.value;
    this.setState(() => ({ organisator }));
  };

  onCityChange = e => {
    const city = e.target.value;
    this.setState(() => ({ city }));
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };

  onImageChange = e => {
    const image = e.target.value;
    this.setState(() => ({ image }));
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
      <div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Title" onChange={this.onTitleChange} />
          <input placeholder="Description" onChange={this.onDescriptionChange} />
          <input placeholder="Organisator" onChange={this.onOrganisatorChange} />
          <select value={this.state.city} onChange={this.onCityChange}>
            <option value="">Select city</option>
            <option value="cracow">Cracow</option>
            <option value="wroclaw">Wroclaw</option>
            <option value="warsaw">Warsaw</option>
            <option value="poznan">Poznan</option>
            <option value="gdansk">Gdansk</option>
          </select>
          <select value={this.state.category} onChange={this.onCategoryChange}>
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
          <input type="file" accept="image/*" onChange={this.onImageChange} />
          <button>{!this.props.event ? "Add event" : "Save changes"}</button>
        </form>
      </div>
    );
  }
}
