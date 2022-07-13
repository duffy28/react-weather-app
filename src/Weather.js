import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
export default function Weather(props) {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let apiKey = "84c62539d2ae6fa1489aa536b432ef2c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  function getTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  axios.get(apiUrl).then(getTemperature);

  return (
    <div className="weather">
      <div className="row">
        <div className="temp-box col-8">
          <h1>{props.city}</h1>
          <h3>
            {props.date} {props.time}
          </h3>
          <h3>{description}</h3>
          <h2>{temperature} °C</h2>
        </div>
        <div className="data-box col-4">
          <h5>Humidity: {humidity}%</h5>
          <h5>Wind: {wind} km/h</h5>
        </div>
      </div>
      <img src={icon} alt="Weather icon" class="current-icon" />
    </div>
  );
}
