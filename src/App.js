import logo from "./logo.svg";
import "./App.css";

import Search from "./Search";
import Forecast from "./Forecast";
export default function App() {
  return (
    <div className="container">
      <Search />
      <Forecast city="Somerset" date="Tuesday" time="11:00" />
    </div>
  );
}
