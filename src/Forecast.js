import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDate from "./ForecastDate";

export default function Forecast(props) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=7b9b95b30c94fea1c4bec4ee3672341d&units=imperial`;
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    setReady(false);
  }, [props.lat]);

  function getForecast(response) {
    console.log(response);
    setReady(true);
    setForecastData(response.data.daily);
  }

  if (ready) {
    return (
      <div>
        <ul className="row">
          {forecastData.map(function(day, index) {
            if (index < 6) {
              return (
                <li key={index} className="col-2">
                  <div>
                    <ForecastDate data={day} />
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    axios.get(apiUrl).then(getForecast);
    return;
  }
}
