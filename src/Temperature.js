import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="Temperature">
        <h2>
          {" "}
          <span className="temp">{props.temp}</span> °
          <span className="unit">
            F |{" "}
            <a href="/" onClick={convertToC}>
              C
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let temp = Math.round((props.temp - 32) * (5.0 / 9));
    return (
      <div className="Temperature">
        <h2>
          {" "}
          <span className="temp">{temp}</span> °
          <span className="unit">
            <a href="/" onClick={convertToF}>
              F
            </a>{" "}
            | C
          </span>
        </h2>
      </div>
    );
  }
}
