import React from "react";

const Filters = () => (
  <div>
    <input autoFocus placeholder="Search event" />
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
    <select>
      <option>Newest</option>
      <option>Closest</option>
    </select>
    <button>Create event</button>
  </div>
);

export default Filters;
