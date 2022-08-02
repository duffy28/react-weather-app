import React, { useState } from "react";

import "./Search.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search() {
  let days = [
    {
      date: "1/1",
      temp: 86,
      icon: "03d",
    },
    {
      date: "1/2",
      temp: 82,
      icon: "04d",
    },
    {
      date: "1/3",
      temp: 94,
      icon: "10d",
    },
    {
      date: "1/4",
      temp: 83,
      icon: "10n",
    },
    {
      date: "1/5",
      temp: 78,
      icon: "01n",
    },
    {
      date: "1/6",
      temp: 85,
      icon: "13d",
    },
  ];

  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(<Weather city="New York" />);
  let [forecast, setForecast] = useState("");

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    setWeather(<Weather city={city} />);
    setForecast(<Forecast days={days} />);
  }
  return (
    <div className="Weather">
      <form onSubmit={getWeather}>
        <div className="row">
          <div className="col-5">
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
          <div className="col-4">
            <button className="coord">Current Location</button>
          </div>
        </div>
      </form>
      <div>{weather}</div>
      <br />
      <div>{forecast}</div>
    </div>
  );
}
