import React from "react";
import {useNavigate} from "react-router-dom"
import "./Header.css";

const Header = () => {
  const navigate = useNavigate(); 
  return (
    <div className="header">
      <div className="menuPages" onClick = {() => {navigate("/") }}>isabella masiero</div>
      <div className="pageLinks">
        <div className="menuPages" onClick = {() => {navigate("/graphic") }}>graphic design</div>
        <div className="menuPages"> programming project</div>
        <div className="menuPages">resume</div>
      </div>
    </div>
  );
};

export default Header;
