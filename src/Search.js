import React, { useState } from "react";
import axios from "axios";

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

  let [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [forecast, setForecast] = useState("");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b9b95b30c94fea1c4bec4ee3672341d&units=imperial`;

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(response) {
    console.log(response);
    setWeatherData({
      city: city,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
    setForecast(<Forecast days={days} />);
  }

  function newCity(event) {
    event.preventDefault();
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={newCity}>
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
                <input
                  className="form-control"
                  type="submit"
                  value="Search 🔍"
                />
              </div>
            </div>
            <div className="col-4">
              <button className="coord">Current Location</button>
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
        <br />
        <div>{forecast}</div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(getWeather);
    return "Loading Data...";
  }
}
