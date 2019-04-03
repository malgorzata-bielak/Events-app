import React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";

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
      createdAt: moment(),
      date: 0,
      id: "",
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
    console.log(this.state.title);
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
    console.log(this.state.description);
  };

  onOrganisatorChange = e => {
    const organisator = e.target.value;
    this.setState(() => ({ organisator }));
    console.log(this.state.organisator);
  };

  onCityChange = e => {
    const city = e.target.value;
    this.setState(() => ({ city }));
    console.log(this.state.city);
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
    console.log(this.state.category);
  };

  onImageChange = e => {
    const image = e.target.value;
    this.setState(() => ({ image }));
    console.log(this.state.image);
  };

  render() {
    return (
      <div>
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
        {/* <DateRangePicker /> */}
        <input type="file" accept="image/*" onChange={this.onImageChange} />
      </div>
    );
  }
}
