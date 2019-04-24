/* eslint-disable no-nested-ternary */
import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { eventPropTypes, historyPropTypes } from "../common/models";
import { storage } from "../firebase/firebase";
import { Button } from "../containers/Filters";

const columnView = css`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  ${columnView}
  background: white;
  margin: 40px auto 40px;
  padding: 30px;
  width: 50vw;
`;

const FormHeader = styled.h2`
  color: #224067;
  font-size: 28px;
  margin: 0 0 40px;
`;

const Label = styled.label`
  ${columnView}
  color: #2273cf;
  margin-bottom: 20px;
  width: 100%;
`;

const textField = css`
  border: 1px solid #dbdbdb;
  font-family: "Open Sans";
  font-size: 16px;
  margin-top: 4px;
  outline: none;
  padding-left: 5px;
  width: 100%;
`;

const Input = styled.input`
  ${textField}
  border-color: ${props => (props.missing ? "#c03aba" : "#dbdbdb")};
  height: 45px;
  padding: 0 10px;
`;

const TextArea = styled.textarea`
  ${textField}
  height: 180px;
  padding: 8px 10px;
  resize: none;
`;

const SelectContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  label:first-child {
    margin-right: 15px;
  }
`;

const PickerLabel = styled(Label)`
  width: 286px;

  > div {
    margin-top: 4px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Select = styled.select`
  border: 1px solid ${props => (props.missing ? "#c03aba" : "#dbdbdb")};
  flex-grow: 1;
  font-family: "Open Sans";
  font-size: 16px;
  height: 48px;
  margin-top: 4px;
  outline: none;
  padding: 0 6px;
`;

const imageInfo = css`
  align-items: center;
  display: flex;
  margin-top: 5px;
`;

const NoImageBox = styled.label`
  ${imageInfo}
  color: #2273cf;

  input {
    color: black;
    font-family: "Open Sans";
    font-size: 16px;
    margin-left: 15px;
    outline: none;
  }
`;

const ImageBox = styled.div`
  ${imageInfo}
`;

const ImageP = styled.p`
  color: #2273cf;
  margin-right: 15px;
`;

const ImageTitle = styled.p`
  font-style: oblique;
  font-size: 14px;
  max-height: 20px;
  margin-right: 15px;
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubmitButton = styled(Button)`
  margin: 40px 15px 40px 0;
`;

export const RemoveButton = styled(Button)`
  background-color: #7c7979;
  border-color: #7c7979;

  &:hover {
    background-color: #5f5d5d;
    border-color: #5f5d5d;
  }
`;

const CancelButton = styled(Button)`
  background-color: #2273cf;
  border-color: #2273cf;

  &:hover {
    background-color: #1c60ad;
    border-color: #1c60ad;
  }
`;

const ErrorMessage = styled.p`
  color: #c03aba;
  font-style: oblique;
  margin: 0 0 20px;
`;

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
      isImageLoading: false,
      createdAt: moment(event.createdAt) || moment(),
      startDate: moment(event.startDate) || moment(),
      startDateId: "",
      endDate: moment(event.endDate) || moment(),
      endDateId: "",
      calendarFocused: null,
      missingInfo: "",
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
            this.setState({ imageUrl, imageFile, imageName, isImageLoading: false });
          });
      });
  };

  onImageChange = e => {
    const imageFile = e.target.files[0];
    const imageName = imageFile.name;
    const { uid } = this.props;

    this.setState({ isImageLoading: true });
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

    this.setState({ isImageLoading: false });
    this.startRemoveFile(this.props.uid);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState(() => ({ startDate, endDate }));
  };

  onSubmit = e => {
    const { startDate, endDate, city, category, title, organisator } = this.state;
    e.preventDefault();

    if (startDate === null || endDate === null || !city || !category || !title || !organisator) {
      this.setState(() => ({ missingInfo: "Please provide all necessary information" }));
    } else {
      this.setState(() => ({ missingInfo: "" }));
      this.props.onSubmit({
        ...this.state,
        startDate: this.state.startDate.valueOf(),
        endDate: this.state.endDate.valueOf(),
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  onCancel = e => {
    e.preventDefault();
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Container>
          <FormHeader>{!this.props.event.id ? "Add new event" : "Edit event"}</FormHeader>

          {this.state.missingInfo && <ErrorMessage>{this.state.missingInfo}</ErrorMessage>}

          <SelectContainer>
            <PickerLabel>
              Date:
              <DateRangePicker
                startDate={this.state.startDate}
                startDateId={this.state.startDateId}
                endDate={this.state.endDate}
                endDateId={this.state.endDateId}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                minimumNights={0}
              />
            </PickerLabel>

            <SelectBox>
              <Label>
                Location:
                <Select
                  missing={this.state.missingInfo && !this.state.city}
                  id="city"
                  value={this.state.city}
                  onChange={this.onChange}
                >
                  <option value="">Select city</option>
                  <option value="Cracow">Cracow</option>
                  <option value="Wroclaw">Wroclaw</option>
                  <option value="Warsaw">Warsaw</option>
                  <option value="Poznan">Poznan</option>
                  <option value="Gdansk">Gdansk</option>
                </Select>
              </Label>

              <Label>
                Category:
                <Select
                  missing={this.state.missingInfo && !this.state.category}
                  id="category"
                  value={this.state.category}
                  onChange={this.onChange}
                >
                  <option value="">Select category</option>
                  <option value="Music">Music</option>
                  <option value="Arts">Arts</option>
                  <option value="Business">Business</option>
                  <option value="Sport">Sport</option>
                  <option value="Food">Food</option>
                </Select>
              </Label>
            </SelectBox>
          </SelectContainer>

          <Label htmlFor="title">
            Title:
            <Input
              missing={this.state.missingInfo && !this.state.title}
              type="text"
              autoComplete="off"
              id="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </Label>

          <Label htmlFor="organisator">
            Organisator:
            <Input
              missing={this.state.missingInfo && !this.state.organisator}
              type="text"
              autoComplete="off"
              id="organisator"
              value={this.state.organisator}
              onChange={this.onChange}
            />
          </Label>

          <Label htmlFor="description">
            Description:
            <TextArea id="description" value={this.state.description} onChange={this.onChange} />
          </Label>

          {!this.state.imageUrl ? (
            this.state.isImageLoading ? (
              <span>Loading image...</span>
            ) : (
              <NoImageBox htmlFor="image">
                Image:
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  files={this.state.imageUrl}
                  onChange={this.onImageChange}
                />
              </NoImageBox>
            )
          ) : (
            <ImageBox>
              <ImageP>Image:</ImageP>
              <ImageTitle>{this.state.imageName}</ImageTitle>
              <RemoveButton onClick={this.onRemoveImageClick}>Remove image</RemoveButton>
            </ImageBox>
          )}

          <div>
            <SubmitButton disabled={this.state.isImageLoading}>
              {!this.props.event.id ? "Add event" : "Save changes"}
            </SubmitButton>

            <CancelButton onClick={this.onCancel}>Cancel</CancelButton>
          </div>
        </Container>
      </form>
    );
  }
}

EventForm.defaultProps = {
  event: {},
};

EventForm.propTypes = {
  ...historyPropTypes,
  event: eventPropTypes.event,
  onSubmit: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};
