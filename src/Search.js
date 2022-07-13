import React, { useState } from "react";

import "./Search.css";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    setMessage(<Weather city={city} />);
  }
  return (
    <div>
      <form className="search-form" onSubmit={getWeather}>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control search-bar"
              type="text"
              name="location"
              placeholder="Type city: "
              autocomplete="off"
              onChange={getCity}
            />
          </div>
          <div className="col-3">
            <input
              className="form-control search-bttn"
              type="submit"
              value="Search 🔍"
            />
          </div>

          <div className="col-3">
            <button className="coord">Current Location</button>
          </div>
        </div>
      </form>
      <h4>{message}</h4>
    </div>
  );
}
