import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7b9b95b30c94fea1c4bec4ee3672341d&units=metric`;
  let [message, setMessage] = useState("");

  function getForecast(response) {
    setMessage(
      <ul>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </li>
        <li>{response.data.main.temp}</li>
      </ul>
    );
  }

  axios.get(apiUrl).then(getForecast);
  return <div>{message}</div>;
}
