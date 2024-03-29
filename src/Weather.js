import React from "react";

import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function Weather(props) {
  let now = new Date();
  function formatDate() {
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

  return (
    <div className="weather">
      <div className="row">
        <div className="temp-box col-8">
          <h1 className="text-capitalize">{props.data.city}</h1>
          <h3>{formatDate()}</h3>
          <h3 className="text-capitalize">{props.data.description}</h3>
          <Temperature temp={props.data.temperature} />
        </div>
        <div className="data-box col-4">
          <h5>Humidity: {props.data.humidity}%</h5>
          <h5>Wind: {props.data.wind} mph</h5>
        </div>
      </div>
      <div className="icon">
        <WeatherIcon
          code={props.data.icon}
          alt={props.data.description}
          size={100}
        />
      </div>
    </div>
  );
}
