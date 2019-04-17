import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import PropTypes from "prop-types";

import { eventPropTypes } from "../common/models";
import { storage } from "../firebase/firebase";

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
      imageUrl: event.imageUrl || "",
      imageFile: event.imageFile || "",
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

  startUploadFile = (uid, imageFile, imageName) => {
    const pathReference = `/users/${uid}/images/${imageName}`;

    storage
      .ref(pathReference)
      .put(imageFile)
      .then(() => {
        storage
          .ref(pathReference)
          .getDownloadURL()
          .then(imageUrl => {
            this.setState({ imageUrl, imageFile, imageName });
          });
      });
  };

  onImageChange = e => {
    const imageFile = e.target.files[0];
    const imageName = imageFile.name;
    const { uid } = this.props;

    this.startUploadFile(uid, imageFile, imageName);
  };

  startRemoveFile = uid => {
    const pathReference = `/users/${uid}/images/${this.state.imageName}`;

    storage
      .ref(pathReference)
      .delete()
      .then(() => {
        this.setState(() => ({ imageUrl: "", imageFile: "", imageName: "" }));
      });
  };

  onRemoveImageClick = e => {
    e.preventDefault();
    this.startRemoveFile(this.props.uid);
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
      ...this.state,
      startDate: this.state.startDate.valueOf(),
      endDate: this.state.endDate.valueOf(),
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

        {!this.state.imageUrl ? (
          <label htmlFor="image">
            Image
            <input
              type="file"
              id="image"
              accept="image/*"
              files={this.state.imageUrl}
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
  uid: PropTypes.string.isRequired,
};
