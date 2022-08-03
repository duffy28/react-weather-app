import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState({ ready: false });
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b9b95b30c94fea1c4bec4ee3672341d&units=imperial`;

  function getCity(event) {
    setCity(event.target.value);
  }

  function newCity(event) {
    event.preventDefault();
    axios.get(apiUrl).then(getWeather);
  }

  function getWeather(response) {
    console.log(response);
    setWeatherData({
      city: city,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={newCity}>
          <div className="row">
            <div className="col-9">
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
                <input
                  className="form-control coord"
                  type="submit"
                  value="Search 🔍"
                />
              </div>
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
        <br />
        <Forecast lat={weatherData.lat} lon={weatherData.lon} />
      </div>
    );
  } else {
    axios.get(apiUrl).then(getWeather);
    return "Loading Data...";
  }
}
