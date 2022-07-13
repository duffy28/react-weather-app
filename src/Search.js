import React, { useState } from "react";

import "./Search.css";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    setMessage(<Weather city={city} />);
  }
  return (
    <div>
      <form onSubmit={getWeather}>
        <input type="text" placeholder="Type city" onChange={getCity} />
        <input type="submit" value="Search" />
      </form>
      <h4>{message}</h4>
    </div>
  );
}
