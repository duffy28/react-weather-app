import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  let now = new Date();
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [forecast, setForecast] = useState("");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7b9b95b30c94fea1c4bec4ee3672341d&units=imperial`;

  let days = [
    {
      date: "1/1",
      temp: 86,
      icon: "http://openweathermap.org/img/wn/01n@2x.png",
    },
    {
      date: "1/2",
      temp: 82,
      icon: "http://openweathermap.org/img/wn/01n@2x.png",
    },
    {
      date: "1/3",
      temp: 94,
      icon: "http://openweathermap.org/img/wn/01n@2x.png",
    },
    {
      date: "1/4",
      temp: 83,
      icon: "http://openweathermap.org/img/wn/01n@2x.png",
    },
    {
      date: "1/5",
      temp: 78,
      icon: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  ];

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

  function getTemperature(response) {
    console.log(response);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setForecast(<Forecast city={props.city} days={days} />);
  }

  axios.get(apiUrl).then(getTemperature);

  return (
    <div className="weather">
      <div className="row">
        <div className="temp-box col-8">
          <h1>{props.city}</h1>
          <h3>{formatDate()}</h3>
          <h3>{description}</h3>
          <h2 className="temp">{temperature} °F</h2>
        </div>
        <div className="data-box col-4">
          <h5>Humidity: {humidity}%</h5>
          <h5>Wind: {wind}mph</h5>
        </div>
      </div>
      <img src={icon} alt="Weather icon" className="current-icon" />
      <div>{forecast}</div>
    </div>
  );
}
