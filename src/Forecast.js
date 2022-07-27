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
                <div>{day.date}</div>
                <div>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div>{day.temp}°</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
