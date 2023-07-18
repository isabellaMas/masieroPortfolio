import React from "react";
import Header from "../Components/Header";
import "./Code.css";
import Footer from "../Components/Footer";
import CreamLines from "../Components/creamLines";
import SoundTrack from "../Images/soundTrack.png";
import Sound1 from "../Images/sound1.png";
import Sound2 from "../Images/sound2.png";
import StudyDemo from "../Images/studyDemo.mov";
import StudyPic from "../Images/studyPic.png";

const ProgrammingPage = () => {
  return (
    <div className="codePage">
      <div className="menuMain">
        <Header />
      </div>
      <div className="codeTitle">
        <div id="prog">PROGRAMMING</div>
        <div id="projects">PROJECTS</div>
      </div>
      <div className="linesCode">
        <CreamLines />
      </div>
      <div className="soundTrack">
        <div className="soundDesAndLink">
          <div className="soundDes">
            One of my largest projects was SoundTrack, a web-based app where
            users can upload the current song they are listing to at that moment
            to a map. After the song is uploaded with an image a playlist will
            be created for that location, or the song will be added to a
            preexisting playlist. The goal was to integrate BeReal, A location
            setting, and Spotify.
            <br />
            <br /> I worked on this project in a group with four other students.
            We used the Agile methodology to complete this project in one
            semester. Throughout the semester we rotated roles between software
            engineer, project manager and SCRUM master. We held daily meetings
            to give updates on our work and sprint planning meetings every two
            weeks the night prior to the end of the previous sprint. <br />
            <br />
            Though the project is no longer live because we would get charged by
            digital ocean the git repository still holds all of the projects
            information.
          </div>
          <div className="link">
            <a
              href="https://github.com/agiledev-students-spring-2023/final-project-soundtrack"
              target="_blank"
              rel="noreferrer"
            >
              VISIT THE GIT HERE
            </a>
          </div>
        </div>
        <div className="soundImages">
          <img id="soundLogo" src={SoundTrack} alt="soundLogo"></img>
          <img id="sound1" src={Sound1} alt="sound1"></img>
          <img id="sound2" src={Sound2} alt="sound2"></img>
        </div>
      </div>
      <hr id="left" />
      <hr id="right" />
      <div className="studyEasy">
        <div className="studyImages">
          <video
            src={StudyDemo}
            width="600"
            controls="controls"
            autoplay="true"
            muted
          />
          <img id="studyPic" src={StudyPic} alt="studyPic"></img>
        </div>
        <div className="studyDesAndLink">
          <div className="studyDes">
            My other project was made about three years ago but i like to keep
            it seeing that it was my first web page that I created. The project
            called Studyeasy was created to help students keep track of their
            class schedules, notes for class, and specific materials they needed
            to study.
            <br />
            <br /> Students are able to add their classes to their schedules and
            then add notes throughout the class. The notes are then stored and
            can be set as “need to study” notes. Those are then taken to the
            STUDY! page where you will find all the pressing material to be
            memorized. The notes can also all be downloaded both the full notes
            and just the study notes. When downloaded the notes are organized by
            class.
          </div>
          <div className="link">
            <a
              href="https://github.com/isabellaMas/frontEnd-example"
              target="_blank"
              rel="noreferrer"
            >
              VISIT THE GIT HERE
            </a>
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default ProgrammingPage;
