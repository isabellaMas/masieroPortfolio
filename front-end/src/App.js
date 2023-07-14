import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/Main.js";
import GraphicPage from "./Pages/Graphic";
import ProgrammingPage from "./Pages/Code"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route exact path="/graphic" element={<GraphicPage />}></Route>
            <Route exact path="/projects" element={<ProgrammingPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
