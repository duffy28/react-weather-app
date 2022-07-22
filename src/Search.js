import React, { useState } from "react";

import "./Search.css";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState(<Weather city="New York" />);

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    setMessage(<Weather city={city} />);
  }
  return (
    <div className="Weather">
      <form onSubmit={getWeather}>
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Type city: "
                autoComplete="off"
                onChange={getCity}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <input className="form-control" type="submit" value="Search 🔍" />
            </div>
          </div>
          <div className="col-6">
            <button className="coord">Current Location</button>
          </div>
        </div>
      </form>
      <h4>{message}</h4>
    </div>
  );
}
