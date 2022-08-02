import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  let now = new Date();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7b9b95b30c94fea1c4bec4ee3672341d&units=imperial`;

  function formatDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[now.getDay()];
    let hour = now.getHours();
    if (hour > 12) {
      hour -= 12;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let message = `${day} ${hour}:${minutes}`;
    return message;
  }

  function getWeather(response) {
    console.log(response);
    setWeatherData({
      tempeature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="row">
          <div className="temp-box col-8">
            <h1 className="text-capitalize">{props.city}</h1>
            <h3>{formatDate()}</h3>
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <h2 className="temp">{weatherData.temperature} °F</h2>
          </div>
          <div className="data-box col-4">
            <h5>Humidity: {weatherData.humidity}%</h5>
            <h5>Wind: {weatherData.wind}mph</h5>
          </div>
        </div>
        <img
          src={weatherData.icon}
          alt="Weather icon"
          className="current-icon"
        />
      </div>
    );
  } else {
    axios.get(apiUrl).then(getWeather);
    return "Loading Data...";
  }
}
