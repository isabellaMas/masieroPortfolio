import React from "react";
import Header from "../Components/Header";
import "./Main.css";

const MainPage = () => {
  return (
    <div>
      <div className="menu">
        <Header style={{ color: "D9D2B6" }}/>
      </div>
      <div className="intro">
        <h1>HELLO I'M</h1>
        <h1>ISABELLA</h1>
        <h1>MASIERO</h1>
      </div>
    </div>
  );
};

export default MainPage;
