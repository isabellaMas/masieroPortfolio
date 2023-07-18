import React from "react";
import Header from "../Components/Header";
import "./Resume.css";
import Footer from "../Components/Footer";

const ResumePage = () => {
  return (
    <div className="resumePage">
      <div className="menuResume">
        <Header />
      </div>
      <div className="titleResume">RESUME</div>
      <hr id="topLine" />
      <hr id="bottomLine" />
      <div className="persInfo">
        <div id="phone">+1(908)672-3642</div>
        <div id="email">icm268@nyu.edu</div>
        <a
          id="linked"
          href="https://www.linkedin.com/in/isabella-masiero-215647162/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <div id="zip">New York,NY 10009</div>
      </div>
      <div className="infoTotal">
        <div className="infoLeft">
          <div className="infoTitle">EDUCATION</div>
          <div className="infoBody">
            New York University --
            <div className="info">
              Graduated May 2023
              <br />
              Bachelor of Arts
              <br />
              Major in Computer Science <br />
              Minor in Web Programming and Applications
              <br />
            </div>
            <br />
            Ridge High School --
            <div className="info">
              Graduated June 2019
              <br />
              3.95 GPA
              <br />
              National Honors Society — Member
              <br />
              Seal of Biliteracy, Spanish
              <br />
            </div>
          </div>

          <div className="infoTitle">RELEVANT EXPERIANCE</div>
          <div className="infoBody">
            PoaTek -- Software Engineering Intern
            <div className="info">
              Porto Alegre, Brazil <br />
              (June 2022- August 2022) <br />
              - Used Agile methodology to create a fully automated Timesheet to
              track project hours for internal company use <br />
              - Participated in sprint planning and daily meeting to track
              project process throughout <br />- Utilized React, TypeScript,
              .Net, C#, and Web API
            </div>
            iD Tech -- Online Instructor
            <div className="info">
              Virtual <br />
              (May 2021- August 2021) <br />
              - Created lesson plans and conducted one-on-one classes for
              students age 8-18 <br />
              - Taught Java, Pre-Algebra, Scratch, Algebra, and C <br />
            </div>
            NYU Phonathon -- Caller
            <div className="info">
              New York, NY
              <br />
              (Sep 2020- Oct 2020)
              <br />
              - Cold call NYU Alumni for donations & updated information
              <br />
            </div>
            AT&T Summer Learning Academy -- Participant
            <div className="info">
              Virtual
              <br />
              (Jun 2020- Jul 2020)
              <br />
              - Learned skills such as: Project Management, Machine Learning,
              and the Internet of Things
              <br />
            </div>
            William Annin Middle School -- Teacher Assistant
            <div className="info">
              Basking Ridge, NJ
              <br />
              (Sep 2018- Jun 2019)
              <br />
              - Taught alongside game design and computers teacher at local
              middle school
              <br />
            </div>
            Ayga -- Intern
            <div className="info">
              Porto Alegre, Brazil
              <br />
              (Aug 2018- Sep 2018)
              <br />
              - Created/Coded a website to present technological stovetop
              product for the company
              <br />
            </div>
            Brainstem camp -- Counselor
            <div className="info">
              Basking Ridge, NJ
              <br />
              (Jul 2017-Aug 2017)
              <br />
              - Taught robotics and mechanical engineering skills to children of
              ages 7-14 (8 hrs/day)
              <br />
            </div>
          </div>
        </div>
        <div className="infoRight">
          <div className="infoTitle">SKILLS</div>
          <div className="infoBody">
            Computer --
            <div className="info">
              Java, Javascript, NodeJS, TypeScript, React, .Net, SQL, NoSQL,
              HTML, Python, Data Structures, Agile, MongoDB, Photoshop, Adobe
              Illustrator, Adobe InDesign
            </div>
            <br />
            Languages --
            <div className="info">English, Portuguese, Spanish</div>
          </div>

          <div className="infoTitle">OTHER EXPERICANCE</div>
          <div className="infoBody">
            CycleBar -- CBX
            <div className="info">
              New York, New York
              <br />
              (August 2022- May 2023)
              <br />
              - Managed customer communication, provided exceptional service,
              maintained cleanliness, and coordinated schedules for riders and
              instructors at a spin studio
              <br />
            </div>
            William Annin Middle School -- Volleyball Coach
            <div className="info">
              Basking Ridge, NJ
              <br />
              (Nov 2018 - Mar 2019)
              <br />
              - Taught basic volleyball skills and ran drills for the middle
              school volleyball team
              <br />
            </div>
            Minute Man Steak House -- Waitress
            <div className="info">
              Morristown, NJ
              <br />
              (Sep 2018- Nov 2018)
              <br />
              - Took orders and served customers
              <br />
              - Cleaned the restaurant and restocked the kitchen
              <br />
            </div>
          </div>
          <div className="infoTitle">LEADERSHIP ACTIVITIES & AWARDS</div>
          <div className="infoBody">
            Ridge High School -- Peer Leader
            <div className="info">
              Basking Ridge, NJ
              <br />
              (2017-2019)
              <br />
              - Provided support and ran team-building drills with freshmen in
              faculty selected program
              <br />
            </div>
            Latinx Culture Club -- Founder & President
            <div className="info">
              Basking Ridge, NJ
              <br />
              (2017-2019)
              <br />
              - Founded culture club to expand awareness of Latinx population at
              majority non-Latinx school
              <br />
            </div>
          </div>
          <div className="infoTitle">ASPIRATIONS</div>
          <div className="infoBody">
            <div className="info">
              - I want to drive change and help show younger generations of
              women and Latina women in STEM that it is a fun and fair industry
              to pursue <br />
              <br />
              - I want to always keep learning and growing my knowledge in the
              ever-changing field of computer software and graphic design
              <br />
              <br />- I want to work on integrating meaningful design and
              technology to create beautiful yet intuitive websites
            </div>
          </div>
        </div>
      </div>
      <div className="footResume">
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage;
