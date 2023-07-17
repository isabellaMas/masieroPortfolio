import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [emailValue, setEmailValue] = useState("EMAIL");

  const handleEmailInputChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleEmailInputClick = () => {
    if (emailValue === "EMAIL") {
      setEmailValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch("http://localhost:3001/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="footer">
      <div className="email">
        <div id="wordsEmail">
          Send me your email and <br /> I’ll get in touch!
        </div>
        <form id="emailInput" onSubmit={handleSubmit}>
          <label>
            <input
              className="emailIn"
              type="text"
              name="EMAIL"
              value={emailValue}
              onChange={handleEmailInputChange}
              onClick={handleEmailInputClick}
            />
          </label>
          <input
            className="submit"
            type="submit"
            value="submit"
            onClick={handleSubmit} 
          />
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
