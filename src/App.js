import React from "react";
import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Search />
      </div>
      <p className="source-link">
        <a
          className="git-link"
          href="https://github.com/duffy28/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Shaun Duffy
      </p>
    </div>
  );
}
