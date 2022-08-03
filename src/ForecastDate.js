import React from "react";
import "./ForecastDate.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDate(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div>{day()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div>
        {Math.round(props.data.temp.max)}°{" "}
        <span className="low">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
