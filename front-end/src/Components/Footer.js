import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="email">
        <div id="wordsEmail">
          Send me your email and <br /> I’ll get in touch!
        </div>
        <form id= "emailInput">
          <label>
            <input class="emailIn" type="text" name="EMAIL" value="  EMAIL"/>
          </label>
          <input class="submit" type="submit" value="submit" />
        </form>
      </div>
      <div id="words">
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
    </div>
  );
};

export default Footer;
