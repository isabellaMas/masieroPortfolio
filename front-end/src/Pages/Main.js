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
        <div id="hello">HELLO, I'M</div>
        <div id="first">ISABELLA</div>
        <div id="last">MASIERO</div>
      </div>
    </div>
  );
};

export default MainPage;
