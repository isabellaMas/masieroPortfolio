import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/Main.js";
import GraphicPage from "./Pages/Graphic";
import ProgrammingPage from "./Pages/Code";
import ResumePage from "./Pages/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route exact path="/graphic" element={<GraphicPage />}></Route>
            <Route exact path="/projects" element={<ProgrammingPage />}></Route>
            <Route exact path="/resume" element={<ResumePage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
