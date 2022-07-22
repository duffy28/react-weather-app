import React from "react";

export default function Forecast(props) {
  return (
    <div>
      <ul>
        {props.days.map(function(day, index) {
          return (
            <li key={index}>
              <ul className="row">
                <li className="col-4">{day.date}</li>
                <li className="col-4">{day.icon}</li>
                <li className="col-4">{day.temp}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
