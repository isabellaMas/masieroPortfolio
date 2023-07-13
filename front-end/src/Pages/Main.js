import React from "react";
import Header from "../Components/Header";
import "./Main.css";
import mainImage from "../Images/mainImage.jpg";
import CreamLines from "../Components/creamLines";

const MainPage = () => {
  return (
    <div>
      <div className="menu">
        <Header style={{ color: "D9D2B6" }} />
      </div>
      <div className="imgAndName">
        <div className="intro">
          <div id="hello">HELLO, I'M</div>
          <div id="first">ISABELLA</div>
          <div id="last">MASIERO</div>
        </div>
        <img id="gradPic" src={mainImage} alt="graduation"></img>
      </div>
      <CreamLines/>
    </div>
  );
};

export default MainPage;
