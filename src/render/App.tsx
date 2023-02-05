import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Routers from "../constants/routes";
import Home from "../pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`${Routers.Home.path}`} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
