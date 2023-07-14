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
        Some words <br />I don't <br />
        know yet
      </div>
    </div>
  );
};

export default Footer;
