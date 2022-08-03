import React from "react";
import "./ForecastDate.css";

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
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
      </div>
      <div>
        {Math.round(props.data.temp.max)}°{" "}
        <span className="low">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
