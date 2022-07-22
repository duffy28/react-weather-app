import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div>
      <ul className="row">
        {props.days.map(function(day, index) {
          return (
            <li key={index} className="col-2">
              <div>
                <ul>
                  <li>{day.date}</li>
                  <li>
                    <img src={day.icon} alt="Weather Icon" />
                  </li>
                  <li>{day.temp}</li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
