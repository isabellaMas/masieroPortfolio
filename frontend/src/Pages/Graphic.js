import React from "react";
import Header from "../Components/Header";
import "./Graphic.css";
import Album from "../Images/albumCover.png";
import Mockup from "../Images/mockup.png";
import Post from "../Images/instaPost.png";
import Cover from "../Images/cover.png";
import FirstSpread from "../Images/firstSpread.png";
import SecondSpread from "../Images/secondSpread.png";
import Footer from "../Components/Footer";


const GraphicPage = () => {
  return (
    <div className="graphicPage">
      <div className="menuGraphic">
        <Header />
      </div>
      <div className="titleGraphic">
        <div id="graphic">GRAPHIC</div>
        <hr id="topL" />
        <div id="design">DESIGN</div>
        <hr id="bottomL" />
      </div>
      <div className="albumDesign">
        <img id="mock" src={Mockup} alt="album mockup"></img>
        <img id="album" src={Album} alt="album"></img>
      </div>
      <hr id="afterDesign" />
      <img id="post" src={Post} alt="instagram post collage"></img>
      <hr id="afterDesign" />
      <div className="mag">
        <img id="cover" src={Cover} alt="magazine cover"></img>
        <div className="spreads">
          <img id="firstS" src={FirstSpread} alt="magazine spread"></img>
          <img id="secondS" src={SecondSpread} alt="magazine spread"></img>

        </div>
      </div>
      <div className="footGraphic">
        <Footer />
      </div>
    </div>
  );
};

export default GraphicPage;


