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

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 40px auto 40px;
  padding: 30px;
  width: 80vw;

  @media (min-width: 910px) {
    width: 727px;
  }
`;

const FormHeader = styled.h2`
  color: #224067;
  font-size: 28px;
  margin: 0 0 40px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 433px) {
    flex-direction: row;
    flex-wrap: wrap;

    label:nth-of-type(2) {
      margin-right: 15px;
    }
  }

  @media (min-width: 588px) {
    label:first-of-type {
      margin-right: 15px;
    }
  }
`;

const Label = styled.label`
  color: #2273cf;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PickerLabel = styled(Label)`
  > div {
    margin-top: 4px;
  }
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

const NoImageBox = styled.label`
  color: #2273cf;

  input {
    color: black;
    font-family: "Open Sans";
    font-size: 16px;
    margin-top: 5px;
    outline: none;
    overflow-wrap: break-word;
    width: 100%;
  }

  @media (min-width: 460px) {
    align-items: center;
    display: flex;

    input {
      margin-left: 15px;
    }
  }
`;

const ImageBox = styled.div`
  @media (min-width: 460px) {
    align-items: center;
    display: flex;

    p {
      margin: 13px 15px 13px 0;
    }
  }
`;

const ImageP = styled.p`
  color: #2273cf;
  margin: 0;
`;

const ImageTitle = styled.p`
  font-style: oblique;
  font-size: 14px;
  max-height: 20px;
  margin: 5px 0px 10px 0;
  max-width: 500px;
  overflow: hidden;
  padding-right: 5px;
  text-overflow: ellipsis;
`;

const Buttons = styled.div`
  display: flex;
  height: 45px;
  margin: 40px 0 20px;
`;

export const Button = styled.button`
  background-color: #c03aba;
  border: 1px solid #c03aba;
  color: white;
  font-family: "Open Sans";
  font-size: 16px;
  height: 45px;
  max-width: 383px;
  outline: none;
  padding: 0 8px;
  width: 100%;

  @media (min-width: 377px) {
    width: 113px;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #7c7979;
  border-color: #7c7979;
  flex-shrink: 0;

  &:hover {
    background-color: #5f5d5d;
    border-color: #5f5d5d;
  }
`;

const CancelButton = styled(Button)`
  background-color: #2273cf;
  border-color: #2273cf;
  margin-top: 15px;

  &:hover {
    background-color: #1c60ad;
    border-color: #1c60ad;
  }

  @media (min-width: 377px) {
    margin: 0 0 0 15px;
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

          <Buttons>
            <Button disabled={this.state.isImageLoading}>
              {!this.props.event.id ? "Add event" : "Save changes"}
            </Button>

            <CancelButton onClick={this.onCancel}>Cancel</CancelButton>
          </Buttons>
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
