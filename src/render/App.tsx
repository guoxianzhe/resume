import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Routers from "../constants/routes";
import Home from "../pages/home";
import Resume from "../pages/resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`${Routers.Home.path}`} element={<Home />} />
        <Route path={`${Routers.Resume.path}`} element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
