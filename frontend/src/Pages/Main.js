import React from "react";
import Header from "../Components/Header";
import "./Main.css";
import mainImage from "../Images/mainImage.jpg";
import CreamLines from "../Components/creamLines";
import beachImage from "../Images/beach.png";
import capImage from "../Images/cap.png";
import logoImage from "../Images/logo.png";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="menuMain">
        <Header />
      </div>
      <div className="imgAndName">
        <div className="intro">
          <div id="hello">HELLO, I'M</div>
          <div id="first">ISABELLA</div>
          <div id="last">MASIERO</div>
        </div>
        <img id="gradPic" src={mainImage} alt="graduation"></img>
      </div>
      <CreamLines />
      <div className="aboutMe">
        <div id="about">ABOUT</div>
        <div className="niceContainer">
          <div id="me">ME</div>
          <div className="niceToMeet">
            <div id="nice">Nice to meet you!</div>
            <div id="bio">
              My name is Isabella Masiero :) I am a 22-year-old software
              engineer with a passion for design and front-end development. I
              recently graduated from New York University, where I obtained a
              major in Computer Science with a minor in Web Programming and
              Applications.
              <br />
              <br /> Though I was born in Brazil, I have spent most of my life
              in the United States. I moved here when I was just two years old,
              but my Brazilian roots and culture have always remained close to
              my heart. Specifically the food and the music.
              <br />
              <br /> I am a fluent speaker of English, Portuguese, and Spanish,
              and I am currently working on improving my French language skills.
              This linguistic versatility has allowed me to connect with people
              from different backgrounds learn from different cultures.
            </div>
          </div>
        </div>
        <div className="imageOverlap">
          <img id="beachPic" src={beachImage} alt="beach"></img>
          <img id="capPic" src={capImage} alt="cap"></img>
        </div>
        <hr id="left" />
        <hr id="right" />
        <div className="bottomBio">
          <div className="bottomBlurb">
            <div id="bio">
              Though I love technology I also have a special place in my heart
              for design aesthetics and a passion for creating user-friendly and
              visually appealing interfaces. I strive to combine my technical
              skills with my creative mindset to deliver seamless and engaging
              experiences for users. <br />
              <br />I am excited to contribute my skills and knowledge to
              meaningful projects that positively impact people's lives. I am
              eager to collaborate with like-minded professionals and make a
              difference in the world through technology.
            </div>
          </div>
          <img id="logoPic" src={logoImage} alt="logo"></img>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
