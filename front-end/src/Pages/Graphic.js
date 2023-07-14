import React from "react";
import Header from "../Components/Header";
import "./Graphic.css";
import Album from "../Images/albumCover.png";
import Mockup from "../Images/mockup.png";
import Post from "../Images/instaPost.png";

const GraphicPage = () => {
  return (
    <div className="graphicPage">
      <div className="menuGraphic">
        <Header />
      </div>
      <div className="titleGraphic">
        <div id="graphic">GRAPHIC</div>
        <hr id="topLine" />
        <div id="design">DESIGN</div>
        <hr id="bottomLine" />
      </div>
      <div className="albumDesign">
        <img id="mock" src={Mockup} alt="album mockup"></img>
        <img id="album" src={Album} alt="album"></img>
      </div>
      <hr id="afterDesign" />
      <img id="post" src={Post} alt="insta post collage"></img>
      <hr id="afterDesign" />
    </div>
  );
};

export default GraphicPage;
