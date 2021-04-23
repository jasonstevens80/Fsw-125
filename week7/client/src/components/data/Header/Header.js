import React from "react";
import "./Header.css";
import Search from "./Search"
import logo from "../../images/capital-logo.png"

const Header = (props) => {
  return (
    <header className="head-container">
    <img src={logo} alt="Logo" />
      <div>
      <h1 className="header">Lets Go Caps!</h1>
      </div>
      <div className="header-search">
      <Search searchCapitals={props.searchCapitals}/>
      </div>
    </header>
  );
};

export default Header