import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Calculate from "./page/Calculate";
import FetchApi from "./page/FetchApi";
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/Calculate">Calculate</NavLink></li>
          <li><NavLink to="/FetchApi">Fetch API</NavLink></li>
          <li><NavLink to="/NotFound">NotFound</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculate" element={<Calculate />} />
        <Route path="/FetchApi" element={<FetchApi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
