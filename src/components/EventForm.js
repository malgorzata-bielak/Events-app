import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import PropTypes from "prop-types";
import { eventPropTypes } from "../common/models";

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);

    const { event } = props;

    this.state = {
      title: event.title || "",
      description: event.description || "",
      organisator: event.organisator || "",
      city: event.city || "",
      category: event.category || "",
      image: event.image || "",
      imageName: event.imageName || "",
      createdAt: moment(event.createdAt) || moment(),
      startDate: moment(event.startDate) || moment(),
      startDateId: "",
      endDate: moment(event.endDate) || moment(),
      endDateId: "",
      calendarFocused: null,
    };
  }

  onChange = e => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  onImageChange = e => {
    const { files } = e.target;
    const localImageUrl = window.URL.createObjectURL(files[0]);
    this.setState({ image: localImageUrl, imageName: files[0].name });
  };

  onRemoveImageClick = () => {
    this.setState({ image: "", imageName: "" });
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
      imageName: this.state.imageName,
      createdAt: this.state.createdAt.valueOf(),
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">
          Title
          <input placeholder="Title" id="title" value={this.state.title} onChange={this.onChange} />
        </label>

        <label htmlFor="description">
          Description
          <input
            placeholder="Description"
            id="description"
            value={this.state.description}
            onChange={this.onChange}
          />
        </label>

        <label htmlFor="organisator">
          Organisator
          <input
            placeholder="Organisator"
            id="organisator"
            value={this.state.organisator}
            onChange={this.onChange}
          />
        </label>

        <select id="city" value={this.state.city} onChange={this.onChange}>
          <option value="">Select city</option>
          <option value="Cracow">Cracow</option>
          <option value="Wroclaw">Wroclaw</option>
          <option value="Warsaw">Warsaw</option>
          <option value="Poznan">Poznan</option>
          <option value="Gdansk">Gdansk</option>
        </select>

        <select id="category" value={this.state.category} onChange={this.onChange}>
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
        {this.state.image === "" ? (
          <label htmlFor="image">
            Image
            <input
              type="file"
              id="image"
              accept="image/*"
              files={this.state.image}
              onChange={this.onImageChange}
            />
          </label>
        ) : (
          <>
            <p>Image</p>
            <p>{this.state.imageName}</p>
            <button onClick={this.onRemoveImageClick}>Remove image</button>
          </>
        )}

        <button>{!this.props.event.id ? "Add event" : "Save changes"}</button>
      </form>
    );
  }
}

EventForm.defaultProps = {
  event: {},
};

EventForm.propTypes = {
  event: eventPropTypes.event,
  onSubmit: PropTypes.func.isRequired,
};
