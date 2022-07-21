import React, { useState } from "react";

export default function Forecast(props) {
  let [message, setMessage] = useState("");

  function getForecast() {
    setMessage(
      <ul>
        {props.days.map(function(day, index) {
          return (
            (<li key={index}>{day.date}</li>),
            (<li key={index}>{day.temp}</li>),
            (
              <li key={index}>
                <img src={day.icon} />
              </li>
            )
          );
        })}
      </ul>
    );
  }

  return <div>{message}</div>;
}
