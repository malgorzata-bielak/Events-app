import React from "react";
import { DateRangePicker } from "react-dates";

const EventForm = () => (
  <div>
    <input placeholder="Title" />
    <input placeholder="Description" />
    <input placeholder="Organisator" />
    <select>
      <option>Select city</option>
      <option>Cracow</option>
      <option>Wroclaw</option>
      <option>Warsaw</option>
      <option>Poznan</option>
      <option>Gdansk</option>
    </select>
    <select>
      <option>Select category</option>
      <option>Music</option>
      <option>Arts</option>
      <option>Business</option>
      <option>Sport</option>
      <option>Food</option>
    </select>
    {/* <DateRangePicker /> */}
    <input type="file" accept="image/*" />
  </div>
);

export default EventForm;
